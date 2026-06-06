<div align="center">
  <img src="src/assets/gargantua-logo.png" alt="Gargantua" width="120" />

  # gargantua-website

  Marketing site for **[Gargantua](https://gargantua.app)** — the open, auditable, agent-drivable macOS cleaner.

  [![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](LICENSE)
  [![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01.svg)](https://astro.build)
</div>

---

The landing page that converts a skeptical developer into an install. It tells Gargantua's
differentiation story — rule provenance, a three-tier safety classification AI can't override,
MCP agent automation, local-first and telemetry-free — with the credibility a developer needs
and none of the gloss the cleaner category trades in.

Primary CTA: `brew install --cask gargantua`. GitHub and license purchase are secondary paths.

## The app

This repo is **just the website**. Gargantua itself — the native macOS cleaner with
YAML-driven safety rules, local AI explainability via MLX, and an MCP server for
agent-controlled cleanup — lives here:

- **[inceptyon-labs/gargantua](https://github.com/inceptyon-labs/gargantua)** — the app
- **[inceptyon-labs/gargantua-rules](https://github.com/inceptyon-labs/gargantua-rules)** — community cleanup & uninstall rules

Install it:

```bash
brew tap inceptyon-labs/tap
brew install --cask gargantua
```

Apple Silicon, macOS 14 (Sonoma) or newer.

## Stack

- [Astro 5](https://astro.build) — static output, zero client JS by default
- [Tailwind CSS 4](https://tailwindcss.com) via the Vite plugin
- Deployed to [gargantua.app](https://gargantua.app)

## Develop

Requires Node 22 (`.nvmrc`).

```bash
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
npm run preview    # serve the production build
```

## Structure

```
src/
  components/   section components (Hero, Pricing, Mcp, TrustTiers, Faq, …)
  layouts/      Base.astro
  pages/        index.astro
  assets/       logo, icon, product screenshots
  styles/       global.css
```

Design and product intent are documented in [`DESIGN.md`](DESIGN.md) and [`PRODUCT.md`](PRODUCT.md).

## License

[AGPL-3.0](LICENSE) © Inceptyon Labs LLC
