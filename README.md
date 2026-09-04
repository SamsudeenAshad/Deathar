# Deathar

Deathar is a Next.js event-registration website configured for server-side rendering on Vercel.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel detects Next.js automatically. Keep the default build command: `npm run build`.
4. Click **Deploy**.

The app uses the Node.js runtime and forces dynamic server rendering. Do not configure `output: "export"`—that would convert it to a static site and disable SSR.
