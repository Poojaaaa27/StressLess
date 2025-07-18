"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { predictStressLevel } from "@/ai/flows/predict-stress-level";
import { stressReasonsGeneration } from "@/ai/flows/stress-reasons-generation";
import { generateStressRemedies } from "@/ai/flows/stress-remedies-generation";

import { useToast } from "@/hooks/use-toast";
import StressAssessmentForm, { formSchema } from "@/components/dashboard/StressAssessmentForm";
import ResultDisplay from "@/components/dashboard/ResultDisplay";
import HealthChatbot from "@/components/dashboard/HealthChatbot";
import { Loader2 } from "lucide-react";
import { User } from "@/lib/types";

export type Results = {
  stressLevel: 'Highly Stressed' | 'Stressed' | 'Normal';
  reasons?: string;
  remedies?: string;
} | null;

export default function DashboardPage() {
  const [results, setResults] = useState<Results>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 20,
      academicStress: "",
      familyPressure: "",
      healthStatus: "",
      studyHours: 8,
      sleepHours: 6,
      otherFactors: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResults(null);
    try {
      const { stressLevel } = await predictStressLevel(values);
      let reasons, remedies;

      if (stressLevel === 'Highly Stressed') {
        const reasonsResult = await stressReasonsGeneration(values);
        reasons = reasonsResult.reasons;
        if(reasons) {
          const remediesResult = await generateStressRemedies({ stressFactors: reasons });
          remedies = remediesResult.remedies;
        }
      }
      
      const newResults = { stressLevel, reasons, remedies };
      setResults(newResults);

      // Save user to localStorage
      const storedUsersRaw = localStorage.getItem("stressUsers");
      const storedUsers: User[] = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];
      
      const newUser: User = {
        id: `usr_${Date.now()}`,
        name: values.name,
        age: values.age,
        email: `${values.name.split(' ')[0].toLowerCase()}@example.com`,
        prediction: {
          stressLevel: newResults.stressLevel,
          reasons: newResults.reasons,
          remedies: newResults.remedies,
          assessedDate: new Date().toISOString(),
        }
      };

      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("stressUsers", JSON.stringify(updatedUsers));
      
      toast({
        title: "Assessment Complete",
        description: "Your results have been generated below.",
      });

    } catch (error) {
      console.error("Error processing stress assessment:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to analyze stress levels. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="flex flex-col gap-8">
        <StressAssessmentForm form={form} onSubmit={onSubmit} isLoading={isLoading} />
        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Analyzing your stress factors...</p>
          </div>
        )}
        {results && <ResultDisplay results={results} />}
      </div>
      <HealthChatbot />
    </div>
  );
}
