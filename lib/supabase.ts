import { createClient } from '@supabase/supabase-js'

// Using a fallback empty string "" instead of forcing it with "!" prevents build-time crashes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)