# Product

## Register

brand

## Users

Developer and power-user Mac owners deciding whether to install Gargantua. They arrive from Homebrew search, GitHub, Hacker News, a Nolan-naming wink, or word of mouth. They are skeptical of cleaner apps because the category is full of opaque "1,000 junk files found" black boxes and subscription gloss. They read fast, distrust marketing language, and check the GitHub repo before they trust a claim. Their job on this page: decide in under a minute whether this tool is trustworthy enough to run against their filesystem, then get it installed via Homebrew. Secondary audience: privacy-conscious prosumers who care about telemetry and open source.

## Product Purpose

The marketing site for Gargantua, the native macOS cleaner that is open, auditable, agent-drivable, and explainable end to end. The site exists to convert a skeptical developer into an install. It tells the differentiation story the README makes (rule provenance, three-tier safety classification AI can't override, MCP agent automation, local-first/telemetry-free, AGPL-free-at-source) with the credibility a developer needs and none of the gloss the category trades in. Scope: a landing page, a pricing section (free source build vs. one-time destructive-action license), and a clear download/install path. Success = the visitor runs `brew install --cask gargantua`.

Primary CTA: install via Homebrew. License purchase and GitHub are secondary paths, present but not the lead.

## Brand Personality

Precise. Trustworthy. Gravitational.

Named after the black hole in Interstellar; the app devours your Mac's junk. The name is not decorative, it shapes the visual language. Voice is technical and exact: a specific noun and a verb that says what the product literally does, never a buzzword. Confident without selling. The Nolan/Interstellar references (Gargantua, event horizon, accretion disk, gravity, singularity) are winks carried by the visual world and the occasional turn of phrase, never named outright and never cute. The page should feel like the app's world told as a scroll: cold like deep space, exact like a file path, calm under pressure.

## Anti-references

- **CleanMyMac X marketing.** Oversized lifestyle hero photography, "your Mac is slow!" fear copy, animated speedometer gauges, subscription-cleaner gloss. This is the exact thing the product rejects; the site must not become it.
- **Generic SaaS landing template.** The hero-metric template (big number, gradient accent, three supporting stats), identical icon-heading-text card grids, tiny tracked uppercase eyebrow over every section, 01/02/03 numbered section scaffolding.
- **Neon-on-dark "AI aesthetic."** Purple-blue gradients, glowing outlines, bokeh backgrounds, gradient text. The void is cold and still, not a synthwave poster.
- **Glassmorphism.** Frosted cards, blur panels, translucent decoration.
- **Buzzword copy.** Streamline / empower / supercharge / leverage / seamless / enterprise-grade. Say what it literally does.

## Design Principles

1. **Trust is the product.** Every section earns belief the way the app does: traceable claims, visible evidence, no inflated numbers. If a developer would scoff, the copy failed. Show the rule, the rating, the audit trail, the open repo, not adjectives.
2. **Show, don't sell.** Prove differentiation with real artifacts (a rule with its provenance commit, a safe/review/protected classification, an MCP tool call, a Homebrew command) rather than claiming it. The product's substance is the marketing.
3. **Gravity, not glow.** Attention is pulled inward by mass, contrast, and motion that obeys physics, never by illumination or decoration. Signature motion is restrained: one or two gravitational moments, full reduced-motion fallback.
4. **Terminal precision, brand scale.** Inherit the app's cold-void palette, monospace-for-data discipline, and border-not-shadow depth, but let the page breathe at landing-page scale: larger display type, dramatic negative space, scroll-paced storytelling.
5. **Respect the developer's time.** Dense where it counts, fast to load, honest CTA. A developer should be able to skim to the install command and the GitHub link in seconds.

## Accessibility & Inclusion

- WCAG 2.1 AA. Body text ≥4.5:1 against the void; large/display text ≥3:1. The cold palette must not push secondary text below contrast minimums.
- `prefers-reduced-motion: reduce` is mandatory, not optional. Every gravitational/scroll animation needs a crossfade or static fallback; reveals must enhance already-visible content, never gate it.
- Safety colors (safe green / review amber / protected red) carry meaning, so never rely on color alone, pair with label or icon for color-blind users.
- Full keyboard navigation, visible focus rings (2px Hawking Blue), semantic landmarks, meaningful link text, and real alt text on screenshots.
