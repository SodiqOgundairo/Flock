import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env.local file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for database tables
export type Member = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  gender?: "male" | "female" | "other";
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  member_since?: string;
  status: "active" | "inactive" | "deceased";
  profile_image_url?: string;
  family_id?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
};

export type Group = {
  id: string;
  name: string;
  description?: string;
  type: "cell_group" | "ministry" | "department" | "choir" | "other";
  leader_id?: string;
  meeting_day?: string;
  meeting_time?: string;
  location?: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: string;
  title: string;
  description?: string;
  type:
    | "service"
    | "meeting"
    | "conference"
    | "outreach"
    | "wedding"
    | "funeral"
    | "other";
  start_date: string;
  end_date?: string;
  location?: string;
  is_recurring: boolean;
  recurrence_pattern?: string;
  status: "scheduled" | "ongoing" | "completed" | "cancelled";
  created_at: string;
  updated_at: string;
};

export type Offering = {
  id: string;
  member_id?: string;
  event_id?: string;
  amount: number;
  currency: string;
  type: "tithe" | "offering" | "donation" | "seed" | "project" | "other";
  payment_method: "cash" | "transfer" | "card" | "online" | "other";
  reference_number?: string;
  notes?: string;
  date: string;
  created_at: string;
};

export type ChurchSettings = {
  id: string;
  church_name: string;
  tagline?: string;
  logo_url?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  phone?: string;
  email?: string;
  website?: string;
  currency: string;
  timezone: string;
  created_at: string;
  updated_at: string;
};
