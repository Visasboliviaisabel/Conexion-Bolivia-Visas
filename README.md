# Conexión Bolivia Visas

Sitio web estático para asesoría de visas a Bolivia desde Cusco. Construido con [Astro](https://astro.build) y desplegado en [Vercel](https://vercel.com).

**Producción:** https://conexion-bolivia-visas.vercel.app

## Idiomas

| URL | Idioma |
|-----|--------|
| `/es/` | Español (predeterminado) |
| `/en/` | English |
| `/zh/` | 中文 (simplificado) |
| `/zh-tw/` | 繁體中文 |
| `/ar/` | العربية (RTL) |
| `/pt/` | Português |
| `/ru/` | Русский |

Cada idioma tiene páginas propias con slugs localizados (ej. `/es/contacto/`, `/en/contact/`, `/pt/contato/`).

Las traducciones (excepto ES/EN de su sitio actual) están en `src/i18n/translations.ts` y pueden editarse sin tocar el código de las páginas.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Publicar cambios

1. Edita el sitio localmente y prueba con `npm run dev`.
2. Guarda y sube a GitHub:

```bash
git add .
git commit -m "Describe your change"
git push
```

3. Vercel detecta el push y despliega automáticamente a producción.

## Dominio personalizado del cliente

Cuando tengas el dominio del cliente:

1. En Vercel: **Project → Settings → Domains** → agrega el dominio.
2. Actualiza `site` en `astro.config.mjs` al dominio final (por ejemplo `https://www.tudominio.com`).
3. Configura DNS en el registrador del dominio según las instrucciones de Vercel.

## Formulario de contacto

El formulario usa [Web3Forms](https://web3forms.com) (250 envíos gratis/mes). La clave de acceso está en `src/data/business.ts`. Los envíos llegan al email configurado en tu cuenta Web3Forms.

## Estructura

- `src/pages/index.astro` — Inicio
- `src/pages/servicios/` — Servicios y FAQ
- `src/pages/contacto/` — Formulario y datos de contacto
- `src/layouts/BaseLayout.astro` — Layout compartido
