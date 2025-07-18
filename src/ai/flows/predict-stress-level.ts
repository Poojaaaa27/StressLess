// src/ai/flows/predict-stress-level.ts
'use server';

/**
 * @fileOverview Predicts the stress level of a student based on input data.
 *
 * - predictStressLevel - A function that takes student data as input and returns a predicted stress level.
 * - PredictStressLevelInput - The input type for the predictStressLevel function.
 * - PredictStressLevelOutput - The return type for the predictStressLevel function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictStressLevelInputSchema = z.object({
  academicStress: z.string().describe('Description of academic stress.'),
  familyPressure: z.string().describe('Description of family pressure.'),
  healthStatus: z.string().describe('Description of health status.'),
  studyHours: z.number().describe('Number of study hours per day.'),
  sleepHours: z.number().describe('Number of sleep hours per day.'),
  otherFactors: z.string().describe('Any other relevant factors.'),
});
export type PredictStressLevelInput = z.infer<typeof PredictStressLevelInputSchema>;

const PredictStressLevelOutputSchema = z.object({
  stressLevel: z.enum(['Highly Stressed', 'Stressed', 'Normal']).describe('The predicted stress level.'),
});
export type PredictStressLevelOutput = z.infer<typeof PredictStressLevelOutputSchema>;

export async function predictStressLevel(input: PredictStressLevelInput): Promise<PredictStressLevelOutput> {
  return predictStressLevelFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictStressLevelPrompt',
  input: {schema: PredictStressLevelInputSchema},
  output: {schema: PredictStressLevelOutputSchema},
  prompt: `You are an AI that predicts the stress level of a student based on the following information:

Academic Stress: {{{academicStress}}}
Family Pressure: {{{familyPressure}}}
Health Status: {{{healthStatus}}}
Study Hours: {{{studyHours}}}
SleepHours: {{{sleepHours}}}
Other Factors: {{{otherFactors}}}

Based on this information, predict the student's stress level. The stress level should be one of the following values: "Highly Stressed", "Stressed", or "Normal".

Return ONLY the predicted stress level.
`,
});

const predictStressLevelFlow = ai.defineFlow(
  {
    name: 'predictStressLevelFlow',
    inputSchema: PredictStressLevelInputSchema,
    outputSchema: PredictStressLevelOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
