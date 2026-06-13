import { createClient } from '@supabase/supabase-js'

// Using a properly formatted placeholder URL completely prevents 
// Supabase from crashing the Next.js build process.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)