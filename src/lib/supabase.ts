import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export type Company = {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  website?: string;
  type: 'exhibitor' | 'sponsor';
  created_at: string;
  updated_at: string;
};
