import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "sbp_d38894f57a950b73cf3666ed34f1a2f4cbfbf374";
export const supabase = createClient(supabaseUrl, supabaseKey);
