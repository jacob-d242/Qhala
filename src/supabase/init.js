// 7fqKPAN4rlJeQ95y
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VUE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VUE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
