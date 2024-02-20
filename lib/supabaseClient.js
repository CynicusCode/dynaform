// Load environment variables with dotenv at the very beginning
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Supabase URL and Anon Key must be provided!");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = { supabase };
