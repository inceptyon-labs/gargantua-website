---
name: Gargantua Website
description: Brand-register marketing site for Gargantua, the gravitational macOS cleaner. Inherits the app's cold-void design system at landing-page scale.
colors:
  void: "#14161A"
  void-deep: "#0F1115"
  surface-1: "#191B1F"
  surface-2: "#202228"
  surface-3: "#272A30"
  surface-4: "#2E3138"
  ink: "#EDF0F3"
  ink-2: "#9BA4B0"
  ink-3: "#67707E"
  ink-4: "#464A53"
  border: "#FFFFFF12"
  border-soft: "#FFFFFF0A"
  border-em: "#FFFFFF21"
  accent: "#2582F4"
  accent-bright: "#4D9BFF"
  safe: "#3B9B68"
  review: "#EDA01D"
  protected: "#C62F2F"
typography:
  hero:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
  body-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0"
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0"
  mono-data:
    fontFamily: "'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
  mono-path:
    fontFamily: "'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "24px"
  space-6: "32px"
  space-7: "48px"
  space-8: "64px"
  space-9: "96px"
  space-10: "128px"
motion:
  ease-out-quint: "cubic-bezier(0.22, 1, 0.36, 1)"
  ease-out-expo: "cubic-bezier(0.16, 1, 0.3, 1)"
  duration-fast: "180ms"
  duration-base: "320ms"
  duration-slow: "640ms"
---

<!-- markdownlint-disable-next-line MD025 -->
# Design System: Gargantua Website

## 1. Overview

**Creative North Star: "The app's world, told as a scroll."**

This is the brand-register marketing site for Gargantua. It inherits the app's design system (`DESIGN.md` in the app repo: the "Event Horizon Console") wholesale, then lets it breathe at landing-page scale. The page is a cold void with warm trust signals, exactly like the app, but where the app is dense and compact, the site is spacious and paced. Larger display type, dramatic negative space, and scroll-paced storytelling carry the narrative; terminal precision and border-not-shadow depth keep it honest.

The job: convert a skeptical developer into a Homebrew install. Every section proves a differentiator with a real artifact (a rule with provenance, a safe/review/protected classification, an MCP tool call, the install command) rather than claiming it with adjectives.

**Hard rejections** (these are what the product is against, so the site must never become them): CleanMyMac X marketing gloss, oversized lifestyle hero photography, fear copy, generic SaaS landing templates, the hero-metric template, identical icon-card grids, tracked-uppercase eyebrows on every section, 01/02/03 numbered scaffolding, glassmorphism, neon-on-dark AI aesthetic, purple-blue gradients, glowing outlines, gradient text.

## 2. Colors

Same palette as the app. The void carries the surface; accent and safety colors appear only when they mean action or risk.

- **Void / Void Deep**: page canvas. `void-deep` (#0F1115) is for the darkest bands and the hero backdrop where the accretion-disk effect lives; `void` (#14161A) is the default section ground.
- **Surface 1–4**: panels, rows, cards, raised controls. Depth ladder by tone, never by shadow.
- **Hawking Blue (accent #2582F4)**: the sole interactive accent. Primary CTAs, links, focus rings, active states. `accent-bright` (#4D9BFF) only for the hero accretion-disk light source and link hover. Its rarity is the trust signal. Never decorative.
- **Terminal Green (safe) / Accretion Amber (review) / Red Ember (protected)**: classification only. They appear on the page exactly where the app would show them, in the safety-tier demonstrations, never as section accents or decoration.
- **Ink ramp**: `ink` for headlines and primary copy, `ink-2` for body and secondary, `ink-3` for metadata and captions, `ink-4` for the quietest labels. Verify body copy hits ≥4.5:1 on its surface; `ink-2` on `void` passes, `ink-3` is large-text/caption only.
- **Borders**: structural, white-alpha. `border` for section/panel edges, `border-soft` for internal dividers, `border-em` for active or hovered outlines.

### Named Rules

- **The Void Holds Still.** Backgrounds stay in the neutral stack. No purple gradients, no beige warmth, no neon glow, no glass tint. Warmth on this site comes only from the safety signals and the single accretion-disk light moment, never from the body background.
- **Blue Means Click.** Hawking Blue means interaction or focus. The hero's blue glow is the one sanctioned non-interactive use (it is the accretion disk, the brand's literal light source).
- **Classification Color Is Earned.** Green/amber/red only appear inside trust-layer demonstrations with real safety meaning.

## 3. Typography

System sans (SF Pro) for everything UI and prose; SF Mono for paths, commands, sizes, and any filesystem-literal data. The type system disappears into the task until a path or a number needs precision.

### Hierarchy

- **Hero** (700, clamp to ~84px, -0.03em, balance): the one-line value statement at the top of the page. Ceiling stays ≤ ~5.25rem; tight tracking but ≥ -0.03em so letters never touch.
- **Display** (700, clamp to ~52px, -0.02em): section openers.
- **Headline** (600, clamp to ~28px): subsection and feature titles.
- **Title** (600, 17px): card and panel names.
- **Body Large** (400, 18px, 1.55): lead paragraphs under section openers. Cap at 65–75ch.
- **Body** (400, 15px, 1.55): supporting prose and row context. Cap at 65–75ch.
- **Label** (500, 14px): buttons, nav, chips.
- **Caption** (400, 12px): metadata, footnotes, quiet status.
- **Mono Data** (400, 13px, tabular): sizes, percentages, counts, version strings.
- **Mono Path** (400, 12px): filesystem paths and shell commands; middle-truncate paths when needed.

### Named Rules

- **Path Precision.** Paths, sizes, and shell commands are always monospace. Never set a file path or a `brew` command in the body font.
- **No Tracked-Uppercase Eyebrows.** Do not stack a tiny all-caps tracked kicker over every section. Hierarchy comes from scale and weight. A monospace section marker (e.g. a quiet `// safety model` in `ink-3`) is permitted sparingly as a brand voice device, not as scaffolding on every band.
- **Balance the Big Type.** `text-wrap: balance` on hero/display headings, `text-wrap: pretty` on long prose.

## 4. Elevation & Depth

Tonal layering and borders, never shadows ("in space there are no point-light sources"). Depth on the page is built by moving bands from `void-deep` to `void` to `surface-1`, and by one-pixel borders where an edge must be trusted. The single licensed "light" is the hero accretion disk; it is a radial gradient/glow that reads as gravitational lensing, not as a drop shadow or a neon bloom.

### Named Rules

- **No Point Light.** No `box-shadow` as elevation anywhere. Cards and panels separate by tone and border.
- **Border Is Evidence.** Full borders confirm structure. No side-stripe accent borders (banned), no left-border callouts.

## 5. Layout

- **Container.** Max content width ~1120px, generous gutters. Hero and full-bleed bands may break to viewport width with inner content constrained.
- **Rhythm.** Vertical section spacing varies deliberately (space-9/space-10 between major bands, tighter within). No uniform metronome.
- **Grids.** Flexbox for 1D rows, Grid for 2D. Feature comparisons use a real table (the README's typical-cleaner-vs-Gargantua table is a model). Avoid identical card grids; when proof needs repetition, vary weight and let one item lead.
- **Cards.** Used only as the genuinely best affordance (e.g. a single framed rule-card or terminal panel). Never nested. Never cards-inside-cards.
- **Z-index scale.** Semantic: sticky-nav → modal-backdrop → modal → toast → tooltip. No 999/9999.
- **Responsive.** Test hero and display copy at every breakpoint; if a long word overflows on tablet/mobile, reduce the clamp max or rewrite. The viewport is part of the design.

## 6. Motion

Signature but restrained. One or two gravitational moments carry the brand; everything else is quiet.

- **Hero accretion disk.** A slow, continuous radial light/lensing effect behind the hero headline. CSS/Canvas, GPU-friendly (transform/opacity/filter), never janky. This is the page's wow moment and it is singular.
- **Gravitational reveals.** Section content eases in on scroll with `ease-out-expo`/`ease-out-quint`, slight upward translate + fade, staggered within a list where it fits the content. Reveals enhance already-visible content; never gate visibility on a class so a headless render ships blank.
- **No bounce, no elastic.** Exponential ease-out only. No spring overshoot.
- **Reduced motion is mandatory.** Every animation needs a `@media (prefers-reduced-motion: reduce)` path: the accretion disk freezes to a static gradient, reveals become instant or a plain crossfade. Test it.
- **Don't animate layout.** Transform and opacity (plus filter/clip-path/mask where they materially improve an effect), not width/height/top/left.

## 7. Components

- **Buttons.** Compact rounded rect (4px). Primary = Hawking Blue fill, white text, label type, 10–12px × 20–24px padding (slightly larger than the app for landing scale). Secondary = `surface-3` fill or transparent with `border-em` stroke. Focus = 2px Hawking Blue stroke. Hover lifts one tone step, no layout animation. Labels are verb + object ("Install with Homebrew", "View source", not "Get started").
- **Install command block.** A `surface-1` terminal panel with `border`, a copy button, `mono-path` for `brew tap inceptyon-labs/tap` / `brew install --cask gargantua`. This is the primary conversion surface; make copying frictionless.
- **Trust-tier demo.** A real scan-row or finding rendered on-page: item name (label), path (mono-path, middle-truncated), size (mono-data), and a safe/review/protected tier with 12% safety tint + an icon + a text label. This is "show, don't tell" made literal.
- **Comparison table.** Full table, `border-soft` row dividers, no zebra-stripe gimmickry; Gargantua column subtly emphasized with `border-em`, never a colored stripe.
- **Pricing.** Two paths presented honestly: "Build from source — free forever" (AGPL, `swift build`, fully unlocked) and "One-time license" (unlocks destructive-action execution; no subscription, no trial nag). No fake three-tier ladder, no "most popular" badge theater.
- **Nav.** Sticky top bar, `void`/`void-deep` ground with `border-soft` bottom edge on scroll. Right-justified 40px brand mark (matches the app's header convention). Primary CTA persists in the nav.
- **Footer.** Quiet. GitHub (app + rules repos), license, MCP docs, Inceptyon Labs. `ink-3` text, `border` top edge.

## 8. Do's and Don'ts

### Do

- Inherit the app palette and discipline exactly; the site and app must feel like one world.
- Prove every differentiator with a real artifact (rule provenance, safety tier, MCP call, install command).
- Reserve Hawking Blue for interaction and the single hero light source.
- Keep paths, sizes, and shell commands in monospace.
- Make the Homebrew command the easiest thing on the page to copy.
- Give the gravitational motion a full reduced-motion fallback and test it.

### Don't

- Don't drift into CleanMyMac gloss, lifestyle hero photography, fear copy, or speedometer gauges.
- Don't use the hero-metric template, identical icon-card grids, tracked-uppercase eyebrows on every section, or 01/02/03 numbered scaffolding.
- Don't introduce glassmorphism, purple-blue gradients, glowing outlines, gradient text, or bokeh.
- Don't use shadows for elevation or side-stripe borders for accent.
- Don't use safety colors decoratively; green/amber/red mean classification only.
- Don't let secondary text fall below 4.5:1 for the sake of cold elegance.
