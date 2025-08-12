# smartphowned

MVP de mural de textos usando React + Vite + Tailwind + Supabase.

## Como rodar localmente
1. `npm install`
2. Copiar `.env.example` para `.env` e preencher:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. `npm run dev`

## Deploy no Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Variáveis de ambiente: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
