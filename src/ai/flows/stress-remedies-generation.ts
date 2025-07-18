// stress-remedies-generation.ts
'use server';

/**
 * @fileOverview Provides personalized remedies and stress management tips for highly stressed students.
 *
 * - generateStressRemedies - A function that generates stress remedies and tips.
 * - StressRemediesInput - The input type for the generateStressRemedies function.
 * - StressRemediesOutput - The return type for the generateStressRemedies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StressRemediesInputSchema = z.object({
  stressFactors: z
    .string()
    .describe(
      'A detailed description of the factors contributing to the student\'s stress.'
    ),
});
export type StressRemediesInput = z.infer<typeof StressRemediesInputSchema>;

const StressRemediesOutputSchema = z.object({
  remedies: z
    .string()
    .describe('A list of personalized remedies and stress management tips.'),
});
export type StressRemediesOutput = z.infer<typeof StressRemediesOutputSchema>;

export async function generateStressRemedies(
  input: StressRemediesInput
): Promise<StressRemediesOutput> {
  return stressRemediesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'stressRemediesPrompt',
  input: {schema: StressRemediesInputSchema},
  output: {schema: StressRemediesOutputSchema},
  prompt: `You are a stress management expert providing personalized remedies and tips to students who are highly stressed.

  Based on the stress factors described below, provide a list of remedies and tips that the student can implement to reduce their stress levels. The output should be a well-formatted list.

  Stress Factors: {{{stressFactors}}}
  `,
});

const stressRemediesFlow = ai.defineFlow(
  {
    name: 'stressRemediesFlow',
    inputSchema: StressRemediesInputSchema,
    outputSchema: StressRemediesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
