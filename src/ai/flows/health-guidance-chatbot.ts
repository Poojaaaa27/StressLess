// src/ai/flows/health-guidance-chatbot.ts
'use server';

/**
 * @fileOverview A health guidance chatbot for providing personalized stress management support.
 *
 * - healthGuidanceChatbot - A function that handles the chatbot interaction.
 * - HealthGuidanceChatbotInput - The input type for the healthGuidanceChatbot function.
 * - HealthGuidanceChatbotOutput - The return type for the healthGuidanceChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HealthGuidanceChatbotInputSchema = z.object({
  message: z.string().describe('The user message to the chatbot.'),
  chatHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional().describe('The chat history between the user and the chatbot.'),
});
export type HealthGuidanceChatbotInput = z.infer<typeof HealthGuidanceChatbotInputSchema>;

const HealthGuidanceChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
});
export type HealthGuidanceChatbotOutput = z.infer<typeof HealthGuidanceChatbotOutputSchema>;

export async function healthGuidanceChatbot(input: HealthGuidanceChatbotInput): Promise<HealthGuidanceChatbotOutput> {
  return healthGuidanceChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'healthGuidanceChatbotPrompt',
  input: {schema: HealthGuidanceChatbotInputSchema},
  output: {schema: HealthGuidanceChatbotOutputSchema},
  prompt: `You are a health guidance chatbot designed to provide personalized stress management support and advice to students.
  Your responses should be encouraging, supportive, and informative.
  Consider the user's message and the chat history to provide relevant and helpful guidance.

  Chat History:
  {{#each chatHistory}}
    {{#if (eq role \"user\")}}
      User: {{{content}}}
    {{else}}
      Assistant: {{{content}}}
    {{/if}}
  {{/each}}

  User Message: {{{message}}}

  Response:`, // Removed < and > to prevent HTML escaping
});

const healthGuidanceChatbotFlow = ai.defineFlow(
  {
    name: 'healthGuidanceChatbotFlow',
    inputSchema: HealthGuidanceChatbotInputSchema,
    outputSchema: HealthGuidanceChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      response: output!.response,
    };
  }
);
