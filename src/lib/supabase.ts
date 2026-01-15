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
  type: 'exhibitor' | 'sponsor' | 'sustainability-partner';
  is_main_partner: boolean;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link?: string;
  created_at: string;
  updated_at: string;
};
