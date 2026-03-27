# Roadmap: Russ Seidametov Portfolio

## Overview

Four phases take this project from a blank repo to a live, publicly accessible portfolio. Phase 1 establishes the technical foundation. Phase 2 delivers the landing page after a UI design contract is produced. Phase 3 delivers all four case study pages after a second UI design contract covers the page template. Phase 4 confirms full deployment, responsiveness, and cross-browser fidelity. At the end of Phase 4 a potential employer or client can open the site, immediately understand who Russ is, and explore his work without friction.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - Next.js project scaffolded, Tailwind + TypeScript configured, deployable to Vercel (completed 2026-03-27)
- [ ] **Phase 2: Landing Page** - UI design contract produced then full landing page implemented (hero, about, case study cards, nav, footer)
- [ ] **Phase 3: Case Study Pages** - UI design contract produced then all four case study pages implemented
- [ ] **Phase 4: Deploy & Polish** - Final Vercel deployment verified, responsive QA passed, cross-browser check complete

## Phase Details

### Phase 1: Foundation
**Goal**: The project can be cloned, run locally, and deployed to Vercel with no content yet
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02
**Success Criteria** (what must be TRUE):
  1. Running `npm run dev` starts the local dev server with no errors
  2. A push to the main branch triggers a successful Vercel deployment
  3. TypeScript compiles clean and Tailwind styles are applied
**Plans**: 1 plan

Plans:
- [x] 01-01-PLAN.md — Initialize Next.js project at `portfolio/` with TypeScript, Tailwind CSS, extensible folder structure, and Vercel deployment

### Phase 2: Landing Page
**Goal**: Users can land on the site, read who Russ is, and navigate to any case study
**Depends on**: Phase 1
**Requirements**: NAV-01, LAND-01, LAND-02, LAND-03, LAND-04, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04
**Success Criteria** (what must be TRUE):
  1. Hero section displays "Russ Seidametov. I turn complexity into clarity." and current role tagline
  2. About section communicates Russ's background, current company, and areas of interest
  3. Four case study cards are visible with title, description, and a working link to each case study page
  4. Footer shows contact and social links that open correctly
  5. Site-wide navigation is visible and functional on landing page
  6. Layout is usable and correct on mobile and desktop viewport sizes
**Plans**: TBD

Note: Run `/gsd:ui-phase` BEFORE planning or executing implementation plans for this phase. The resulting UI-SPEC.md is the design contract that implementation must satisfy.

Plans:
- [ ] 02-01: Run /gsd:ui-phase to produce UI-SPEC.md for the landing page
- [ ] 02-02: Implement landing page — nav, hero, about, case study cards, footer
**UI hint**: yes

### Phase 3: Case Study Pages
**Goal**: Users can open any of the four case study pages and explore Russ's work in full detail
**Depends on**: Phase 2
**Requirements**: CS-01, CS-02, CS-03, CS-04, CS-05, CS-06, CS-07
**Success Criteria** (what must be TRUE):
  1. Dedicated URL exists and loads for each of the four case studies (Athlete Intelligence, Video Highlights with GPS Overlay, Breakthru CRM, Breakthru Hub)
  2. Each page displays a title and description where copy is available; Breakthru Hub displays screenshots only per v1 constraint
  3. App screenshots render correctly on each case study page
  4. Each case study page has back navigation that returns the user to the landing page
  5. Site-wide nav remains visible and functional on all case study pages
**Plans**: TBD

Note: Run `/gsd:ui-phase` BEFORE planning or executing implementation plans for this phase. The resulting UI-SPEC.md is the design contract for the case study page template.

Plans:
- [ ] 03-01: Run /gsd:ui-phase to produce UI-SPEC.md for the case study page template
- [ ] 03-02: Implement all four case study pages using the shared template
**UI hint**: yes

### Phase 4: Deploy & Polish
**Goal**: The live Vercel URL is the final product — fully responsive, cross-browser clean, ready to share
**Depends on**: Phase 3
**Requirements**: FOUND-02 (final verification)
**Success Criteria** (what must be TRUE):
  1. The production Vercel URL loads the portfolio with no build errors or broken routes
  2. Landing page and all case study pages render correctly at mobile (375px), tablet (768px), and desktop (1280px) widths
  3. The site renders correctly in Chrome, Safari, and Firefox
  4. No broken images, broken links, or console errors on any page
**Plans**: TBD

Plans:
- [ ] 04-01: Final deployment verification, responsive QA across viewports, cross-browser check, fix any issues found

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 1/1 | Complete   | 2026-03-27 |
| 2. Landing Page | 0/2 | Not started | - |
| 3. Case Study Pages | 0/2 | Not started | - |
| 4. Deploy & Polish | 0/1 | Not started | - |

---
*Roadmap created: 2026-03-26*
