// stress-reasons-generation.ts
'use server';

/**
 * @fileOverview Generates the reasons contributing to a student's high stress level.
 *
 * - stressReasonsGeneration - A function that generates reasons for stress.
 * - StressReasonsGenerationInput - The input type for the stressReasonsGeneration function.
 * - StressReasonsGenerationOutput - The return type for the stressReasonsGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StressReasonsGenerationInputSchema = z.object({
  academicStress: z.string().describe('Description of academic stress.'),
  familyPressure: z.string().describe('Description of family pressure.'),
  healthStatus: z.string().describe('Description of health status.'),
  studyHours: z.number().describe('Number of study hours per day.'),
  sleepHours: z.number().describe('Number of sleep hours per day.'),
  otherFactors: z.string().describe('Any other factors contributing to stress.'),
});

export type StressReasonsGenerationInput = z.infer<typeof StressReasonsGenerationInputSchema>;

const StressReasonsGenerationOutputSchema = z.object({
  reasons: z.string().describe('The reasons contributing to the student\'s high stress level.'),
});

export type StressReasonsGenerationOutput = z.infer<typeof StressReasonsGenerationOutputSchema>;

export async function stressReasonsGeneration(
  input: StressReasonsGenerationInput
): Promise<StressReasonsGenerationOutput> {
  return stressReasonsGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'stressReasonsGenerationPrompt',
  input: {schema: StressReasonsGenerationInputSchema},
  output: {schema: StressReasonsGenerationOutputSchema},
  prompt: `You are an expert counselor specializing in identifying the reasons for student stress.

  Based on the information provided, identify the primary reasons contributing to the student's stress.

  Academic Stress: {{{academicStress}}}
  Family Pressure: {{{familyPressure}}}
  Health Status: {{{healthStatus}}}
  Study Hours: {{{studyHours}}}
  Sleep Hours: {{{sleepHours}}}
  Other Factors: {{{otherFactors}}}

  Reasons:
`,
});

const stressReasonsGenerationFlow = ai.defineFlow(
  {
    name: 'stressReasonsGenerationFlow',
    inputSchema: StressReasonsGenerationInputSchema,
    outputSchema: StressReasonsGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
