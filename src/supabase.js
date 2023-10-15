import { createClient } from "@supabase/supabase-js";

const supabase_URL = process.env.REACT_APP_SUPABASE_URL;
const supabase_Key = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabase_URL, supabase_Key);