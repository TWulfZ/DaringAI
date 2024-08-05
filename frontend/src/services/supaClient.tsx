import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://hmufciaqsqyjctwkcblk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdWZjaWFxc3F5amN0d2tjYmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2NDQ0MjEsImV4cCI6MjAzODIyMDQyMX0.Dupf4hlTwMvFBXPKQ0ZGtNuamuFTY88ZqY5ePCndhXU",
);

export default supabaseClient;