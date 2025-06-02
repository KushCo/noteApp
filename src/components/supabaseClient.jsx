import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://ssqwkqgtbblysludodcf.supabase.co"
const supabaseANONKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcXdrcWd0YmJseXNsdWRvZGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3ODAyNjksImV4cCI6MjA2NDM1NjI2OX0.ZK60Fakubndx2NyKUfVdi1S7hAn5kwfYyBplz5fYDTs"

const supabase = createClient(supabaseURL, supabaseANONKey);