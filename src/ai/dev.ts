import { config } from 'dotenv';
config();

import '@/ai/flows/stress-remedies-generation.ts';
import '@/ai/flows/stress-reasons-generation.ts';
import '@/ai/flows/health-guidance-chatbot.ts';
import '@/ai/flows/predict-stress-level.ts';
