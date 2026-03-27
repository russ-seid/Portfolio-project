# Russ Seidametov — Portfolio

## What This Is

A clean, minimal Next.js portfolio for Russ Seidametov, a Product Designer specializing in sports tech and data-heavy products. Features a landing page and four case study pages showcasing work at Fiyrpod and Breakthru. Built for speed-to-launch in v1, architected to support rich animations and interactions in v2.

## Core Value

A potential employer or client opens the site, immediately understands who Russ is and what he does, and can explore his work without friction.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Landing page with hero text, about section, and 4 case study cards
- [ ] Case study page: Athlete Intelligence (text + screenshots)
- [ ] Case study page: Video Highlights with GPS Overlay (text or screenshots TBD)
- [ ] Case study page: Breakthru CRM (text + screenshots)
- [ ] Case study page: Breakthru Hub (screenshots only for v1)
- [ ] Clean, minimal visual design — no animations or interactions in v1
- [ ] Responsive layout (mobile + desktop)
- [ ] Component structure ready for animation/interaction layer in v2

### Out of Scope

- Animations and interactions — deferred to v2 (days away, intentional)
- CMS or content management — static content is fine for v1
- Blog, contact form, or other pages — not needed for this portfolio

## Context

- **Previous site**: Built in Framer. Moving to Next.js/React for more control and easier v2 extensibility.
- **Hero copy (ready)**: "Russ Seidametov. I turn complexity into clarity."
- **About copy (ready)**: Currently at Fiyrpod designing athlete tracking tools. Previously at Breakthru (B2C → B2B transition). Drawn to 0→1 problems in sports tech, health, and data-heavy products.
- **Case study titles and descriptions**: All 4 written (from previous Framer landing page).
- **Case study content state**:
  - 2 case studies have full text copy
  - 1 of those 2 also has app screenshots
  - 1 case study has app screenshots but no text (ship with visuals only for v1)
  - 1 case study has text (assumed) — content mapping to be confirmed during phase planning
- **v2 plan**: Polish pass with animations and interactions, planned within days of v1 launch.

## Constraints

- **Tech Stack**: Next.js / React — chosen for extensibility into v2 animation work
- **Timeline**: Ship v1 as fast as possible — simplicity over completeness
- **Content**: Case study text to be provided by user at phase planning time; screenshots to be provided as assets

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js over Framer | More control, easier to extend with animations in v2 | — Pending |
| Full page per case study | Better URL structure, cleaner navigation, scalable | — Pending |
| No animations in v1 | Speed to launch is the priority; v2 will add interactions | — Pending |
| Screenshots-only for Breakthru Hub | No text copy available; ship with visuals rather than block | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-26 after initialization*
