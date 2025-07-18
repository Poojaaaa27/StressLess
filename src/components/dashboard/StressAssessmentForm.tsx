"use client";

import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export const formSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  age: z.coerce.number().min(10, "Please enter a valid age.").max(100),
  academicStress: z.string().min(1, "Please describe your academic stress.").max(500),
  familyPressure: z.string().min(1, "Please describe your family pressure.").max(500),
  healthStatus: z.string().min(1, "Please describe your health status.").max(500),
  studyHours: z.number().min(0).max(24),
  sleepHours: z.number().min(0).max(24),
  otherFactors: z.string().max(500).optional(),
});

interface StressAssessmentFormProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  isLoading: boolean;
}

export default function StressAssessmentForm({ form, onSubmit, isLoading }: StressAssessmentFormProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Stress Assessment</CardTitle>
        <CardDescription>
          Fill out this form to help us understand your current stress level.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 21" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="academicStress"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Academic Stress</FormLabel>
                        <FormControl>
                            <Textarea placeholder="e.g., upcoming exams, heavy workload..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="familyPressure"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Family Pressure</FormLabel>
                        <FormControl>
                            <Textarea placeholder="e.g., high expectations, family conflicts..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="healthStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Current Health Status</FormLabel>
                    <FormControl>
                        <Textarea placeholder="e.g., feeling tired, frequent headaches, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="studyHours"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Daily Study Hours: {field.value}h</FormLabel>
                        <FormControl>
                            <Slider
                            min={0}
                            max={24}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            />
                        </FormControl>
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="sleepHours"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Daily Sleep Hours: {field.value}h</FormLabel>
                        <FormControl>
                            <Slider
                            min={0}
                            max={24}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            />
                        </FormControl>
                    </FormItem>
                    )}
                />
            </div>
             <FormField
                control={form.control}
                name="otherFactors"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Other Factors (Optional)</FormLabel>
                    <FormControl>
                        <Textarea placeholder="e.g., financial worries, relationship issues..." {...field} />
                    </FormControl>
                    <FormDescription>
                        Please mention any other factors that might be contributing to your stress.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</> : "Analyze My Stress"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
