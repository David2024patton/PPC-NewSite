import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ravwcxipshxlnhduivbq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdndjeGlwc2h4bG5oZHVpdmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNDk0MDYsImV4cCI6MjA1ODkyNTQwNn0.ih720gQha1BzD-SrNwQiwZqJYKLAWJbB717zwElNDH8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
