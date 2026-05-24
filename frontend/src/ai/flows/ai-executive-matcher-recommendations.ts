
'use server';
/**
 * @fileOverview An AI agent that provides personalized session recommendations and networking connections
 *               based on an attendee's professional background for the Business Summit.
 *
 * - aiExecutiveMatcherRecommendations - A function that handles the recommendation process.
 * - ExecutiveMatcherInput - The input type for the aiExecutiveMatcherRecommendations function.
 * - ExecutiveMatcherOutput - The return type for the aiExecutiveMatcherRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExecutiveMatcherInputSchema = z.object({
  professionalBackground: z
    .string()
    .describe(
      "The attendee's professional background, including their role, industry, and interests."
    ),
});
export type ExecutiveMatcherInput = z.infer<typeof ExecutiveMatcherInputSchema>;

const ExecutiveMatcherOutputSchema = z.object({
  sessionRecommendations: z
    .array(z.string())
    .describe(
      'A list of highly relevant sessions recommended for the attendee, based on their background.'
    ),
  networkingConnections: z
    .array(z.string())
    .describe(
      'A list of potential networking connections (e.g., job titles, companies, or professional profiles) that would be beneficial for the attendee.'
    ),
  reasoning: z
    .string()
    .describe(
      'A brief explanation of why these recommendations and connections were made, highlighting the alignment with the professional background.'
    ),
});
export type ExecutiveMatcherOutput = z.infer<typeof ExecutiveMatcherOutputSchema>;

export async function aiExecutiveMatcherRecommendations(
  input: ExecutiveMatcherInput
): Promise<ExecutiveMatcherOutput> {
  return executiveMatcherFlow(input);
}

const prompt = ai.definePrompt({
  name: 'executiveMatcherPrompt',
  input: {schema: ExecutiveMatcherInputSchema},
  output: {schema: ExecutiveMatcherOutputSchema},
  prompt: `You are an expert event planner for the 'Business Summit'. Your goal is to provide personalized recommendations for sessions and networking opportunities to an attendee.

Analyze the provided professional background and generate:
1. A list of highly relevant session recommendations.
2. A list of potential networking connections (e.g., job titles, companies, or professional profiles) that would be beneficial.
3. A brief explanation for these recommendations and connections.

Professional Background: {{{professionalBackground}}}`,
});

const executiveMatcherFlow = ai.defineFlow(
  {
    name: 'executiveMatcherFlow',
    inputSchema: ExecutiveMatcherInputSchema,
    outputSchema: ExecutiveMatcherOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get recommendations from the AI.');
    }
    return output;
  }
);
