import { createClient } from "@supabase/supabase-js";

require('dotenv').config()

const supabase_URL = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL;
const supabase_Key = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabase_URL, supabase_Key);