import { createClient } from '@supabase/supabase-js'

// Using temporary valid URL formats ensures Next.js passes the build checks.
// Once the site is live, it will automatically use your real Netlify keys.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)