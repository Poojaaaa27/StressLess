"use client";

import { Results } from "@/app/dashboard/page";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, HeartPulse, ShieldAlert, Sparkles, Smile } from "lucide-react";

interface ResultDisplayProps {
  results: Results;
}

const getStressLevelStyle = (level: Results['stressLevel']) => {
    switch (level) {
        case 'Highly Stressed':
            return {
                badge: 'destructive',
                icon: <ShieldAlert className="h-10 w-10 text-destructive" />,
                title: 'Highly Stressed',
                description: 'It seems you are under significant pressure. Let\'s explore why and find ways to help.'
            };
        case 'Stressed':
            return {
                badge: 'secondary',
                icon: <HeartPulse className="h-10 w-10 text-yellow-500" />,
                title: 'Stressed',
                description: 'You are experiencing some stress. It\'s important to manage it effectively.'
            };
        case 'Normal':
        default:
            return {
                badge: 'default',
                icon: <Smile className="h-10 w-10 text-green-500" />,
                title: 'Normal',
                description: 'Your stress levels appear to be within a normal range. Keep up the healthy habits!'
            };
    }
}

export default function ResultDisplay({ results }: ResultDisplayProps) {
  if (!results) return null;

  const style = getStressLevelStyle(results.stressLevel);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
            <div className="flex items-start justify-between">
                <div>
                    <CardTitle className="text-2xl">Your Results</CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                </div>
                {style.icon}
            </div>
        </CardHeader>
        <CardContent>
            <Badge variant={style.badge as any} className="text-lg px-4 py-1">{style.title}</Badge>
        </CardContent>
      </Card>

      {results.stressLevel === 'Highly Stressed' && (
        <>
          {results.reasons && (
            <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <CardTitle>Contributing Factors</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{results.reasons}</p>
                </CardContent>
            </Card>
          )}
          {results.remedies && (
            <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <CardTitle>Personalized Remedies & Tips</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Show suggestions</AccordionTrigger>
                            <AccordionContent>
                                <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: results.remedies.replace(/\n/g, '<br />') }} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
