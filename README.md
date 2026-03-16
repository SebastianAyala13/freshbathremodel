# Fresh Bath Renovations Landing

Landing page de captación de leads en Next.js App Router.

## Quick start

1. Instala Node.js 18+ y npm.
2. Copia `.env.example` a `.env.local`.
3. Configura `ZAPIER_FRESH_BATH_HOOK_URL` con tu webhook real.
4. Instala dependencias:

```bash
npm install
```

5. Corre en local:

```bash
npm run dev
```

## Producción / pendientes

- Reemplaza GTM ID en `src/app/layout.tsx`.
- Reemplaza Meta Pixel ID en `src/app/layout.tsx`.
- Reemplaza dominio final en `src/app/layout.tsx` (`SITE_URL`).
- Coloca imágenes finales en `public/freshbath/`:
  - `logo.png`
  - `bg-blur.png`
  - `style-bright.png`
  - `style-dark.png`
