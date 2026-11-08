import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Client public Supabase, le même projet que l'appli ORA.
// Les deux variables sont publiques (clé anonyme) : elles vont dans
// .env.local en local et dans les variables d'environnement Vercel en
// production, avec les mêmes valeurs que VITE_SUPABASE_URL et
// VITE_SUPABASE_PUBLISHABLE_KEY de l'appli.
// Si elles sont absentes, le client vaut null et le formulaire affiche
// une erreur au lieu d'un faux succès.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;
