/* Configuração pública do Supabase. Nunca coloque service_role key neste arquivo. */
window.SOMENTE_SUPABASE_URL = 'https://ugtecgnuzxqdoygxuofg.supabase.co';
window.SOMENTE_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_YVzBlB7yC62h-PrJQL3C8g_G-hZBTOL';
window.somenteSupabase = window.supabase?.createClient(
  window.SOMENTE_SUPABASE_URL,
  window.SOMENTE_SUPABASE_PUBLISHABLE_KEY
) || null;
