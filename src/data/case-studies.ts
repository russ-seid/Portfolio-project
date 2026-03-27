import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'athlete-intelligence',
    title: 'Athlete Intelligence',
    description: 'A performance and injury-risk decision system inside the FiyrPod Coach app',
    href: '/case-studies/athlete-intelligence',
    cover: '/images/athlete-intelligence-cover.png',
    label: 'Case Study 01',
    meta: 'FiyrPod / Product Design',
    tagline:
      "The raw data exists in almost every program. The infrastructure to turn it into pre-session decisions doesn't. Athlete Intelligence is the layer in between.",
    heroVisual: {
      src: '/images/case-studies/athlete-intelligence/dashboard.png',
      alt: 'Athlete Intelligence team dashboard showing readiness, pain and soreness, force plate, and total load modules',
      label: 'Team dashboard / triage view',
      variant: 'desktop',
    },
    facts: [
      {
        label: 'Role',
        value: 'End-to-end product design',
      },
      {
        label: 'Timeline',
        value: '8 weeks',
      },
      {
        label: 'Team',
        value: '2 designers, CEO, CTO, 3 engineers',
      },
      {
        label: 'Outcome',
        value: '95%+ time reduction / 9 out of 10 satisfaction',
      },
    ],
    quote: {
      text: "I don't use it to make my decision. I use it to show my athletes I didn't just make it up. That's the part that changed everything. They actually listen now.",
      attribution: 'Performance Coach, Youth Soccer Organization',
    },
    sections: [
      {
        eyebrow: 'Overview',
        title: 'The missing layer between raw data and pre-session decisions',
        intro:
          'The problem was not data collection. The problem was synthesis. Coaches had signals everywhere and no system that could turn them into a call before training started.',
        paragraphs: [
          'FiyrPod was already capturing GPS load from wearables. Athletes were submitting daily wellness inputs. RPE scores were coming in after sessions. Force plate metrics existed too. The raw signals were there, but there was no layer that translated them into a readiness picture a coach could trust.',
          "In elite programs, a sports scientist handles that synthesis every morning. Most coaching staffs do not have that role. Instead they spend 60 to 90 minutes stitching together disconnected tools, spreadsheets, and intuition before they can even start the session.",
          'Athlete Intelligence became that missing infrastructure: a structured intelligence layer that applied evidence-based scoring across distinct signals and surfaced the output in a workflow a coach could understand in under five minutes.',
        ],
        callout: 'This product was not a better dashboard. It was a decision layer.',
      },
      {
        eyebrow: 'Problem',
        title: 'The data existed. The infrastructure did not.',
        paragraphs: [
          'Every morning was a manual assembly job. Coaches pulled GPS data from one platform, chased wellness updates from athletes, cross-referenced RPE in another tool, and then tried to normalize those signals into something actionable.',
          "That time cost was not a coaching failure. It was the tax of doing manually what a proper system should do automatically. Without a scoring framework, raw numbers were noise. Without a sports science layer, coaches carried the liability of every decision without a way to defend it.",
        ],
        bullets: [
          'Fragmented data sources meant there was no shared view of athlete readiness.',
          "No scoring framework meant coaches could not compare today's signal against an athlete's own baseline.",
          'No sports science layer meant interpretation fell to intuition, spreadsheets, and time-consuming manual work.',
        ],
        media: [
          {
            src: '/images/case-studies/athlete-intelligence/readiness-list.png',
            alt: 'Athlete Intelligence readiness list view ranked by athlete risk',
            label: 'Readiness list / ranked team view',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Ownership',
        title: "The most important decisions weren't made in Figma",
        intro:
          'I treat the model behind the interface as part of the design surface. If the number is wrong, the UI only makes the problem more visible.',
        paragraphs: [
          'I led research with coaches, worked closely with an embedded performance coach, defined MVP scope, and wrote the product brief engineering used to scope the build. I also designed the full workflow from team dashboard to athlete drill-downs and wrote the system copy across labels, tooltips, and empty states.',
          "The key work on this project was making complex product decisions legible: what the system should measure, how those signals should be weighted, what should be surfaced first, and what needed to stay hidden until the moment a coach needed to explain a decision.",
        ],
      },
      {
        eyebrow: 'Key Decisions',
        title: 'Five decisions that shaped the product',
        cards: [
          {
            title: '01. Triage workflow, not a dashboard',
            body: 'I structured the product around a ranked workflow instead of an information-dense overview. Coaches open the app, scan for red and orange, drill into the signal driving the flag, and make a defensible call.',
          },
          {
            title: '02. Remove data instead of adding it',
            body: 'I cut an already-built expanded row from the team view two weeks before launch. More data on the first screen meant slower decisions, which was the opposite of the product promise.',
          },
          {
            title: '03. Replace z-scores with a bounded Sten scale',
            body: 'The math could stay sophisticated while the output became readable. Converting to a 1 to 10 scale made thresholds legible and the score immediately actionable for coaches.',
          },
          {
            title: '04. Separate pain from soreness in the formula',
            body: 'The original preparedness formula treated both signals as equal. Rebuilding the model with separate denominators made the output clinically believable and restored trust in the score.',
          },
          {
            title: '05. Fix the input flow, not just the dashboard',
            body: 'When post-launch scores looked wrong, I traced the issue back to the athlete app. Requiring athletes to declare pain versus soreness before entering data removed the silent corruption at the source.',
          },
        ],
        mediaLayout: 'two-up',
        media: [
          {
            src: '/images/case-studies/athlete-intelligence/pain-soreness.png',
            alt: 'Athlete Intelligence athlete detail pain and soreness view',
            label: 'Athlete detail / pain and soreness',
            variant: 'desktop',
          },
          {
            src: '/images/case-studies/athlete-intelligence/total-load.png',
            alt: 'Athlete Intelligence total load trend and GPS session data view',
            label: 'Athlete detail / total load',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'What Shipped',
        title: 'Five scoring systems in one triage workflow',
        paragraphs: [
          'Each system measures one thing, from one data source, and produces one score a coach can act on. Readiness translates six self-reported wellness inputs into a daily readiness score. Pain and Soreness uses body-map selections and severity ratings to surface injury risk. Total Load normalizes GPS metrics against personal baseline. Force Plate flags biomechanical changes. RPE captures perceived exertion and session load.',
          'The complexity is in the model, not in the interface. The team list is ranked by risk rather than name, so the sort order itself becomes the workflow. Detailed views exist for explanation, not for daily browsing.',
        ],
        mediaLayout: 'three-up',
        media: [
          {
            src: '/images/case-studies/athlete-intelligence/readiness-detail.png',
            alt: 'Athlete Intelligence readiness detail screen with 30-day trend',
            label: 'Athlete detail / readiness',
            variant: 'desktop',
          },
          {
            src: '/images/case-studies/athlete-intelligence/athlete-overview.png',
            alt: 'Athlete Intelligence athlete overview showing readiness, RPE, total load, force plate, and pain and soreness summary',
            label: 'Athlete detail / overview',
            variant: 'desktop',
          },
          {
            src: '/images/case-studies/athlete-intelligence/force-plate.png',
            alt: 'Athlete Intelligence athlete detail force plate view with biomechanical flags',
            label: 'Athlete detail / force plate',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Impact',
        title: 'The product changed behavior, not just interface',
        paragraphs: [
          'At 30 days post-launch, coaches reported a 95%+ reduction in time spent on morning synthesis, moving from 60 to 90 minutes down to under 5. Eleven of fourteen coaches stopped maintaining their spreadsheet within the first week. Satisfaction averaged 9 out of 10 across 14 coaches.',
          'The most meaningful behavior change was not adoption of a new screen. Coaches stopped feeling the need to justify their process to themselves. That evidence later became part of enterprise partnership conversations.',
        ],
      },
      {
        eyebrow: 'Reflection',
        title: 'What I would change',
        paragraphs: [
          'I assumed coaches would use the drill-down views more often than they actually do. In practice, most daily sessions never leave the team readiness list. The detailed views matter when a coach needs to explain a decision to an athlete or management, not as a routine destination.',
          "If I revisited version one, I would rebuild onboarding so the first session feels immediately useful. The product should open with pre-populated demo data instead of a blank state that asks coaches to do setup work before value is visible.",
        ],
      },
    ],
    screenshots: [
      {
        src: '/images/case-studies/athlete-intelligence/mobile-dashboard.png',
        alt: 'Athlete Intelligence mobile dashboard view',
        label: 'Mobile dashboard',
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/athlete-intelligence/mobile-athlete-overview.png',
        alt: 'Athlete Intelligence mobile athlete overview',
        label: 'Mobile athlete overview',
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/athlete-intelligence/mobile-readiness-dialog.png',
        alt: 'Athlete Intelligence mobile readiness score dialog',
        label: 'Mobile readiness score dialog',
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/athlete-intelligence/readiness-dialog.png',
        alt: 'Athlete Intelligence desktop readiness dialog showing detailed daily submission values',
        label: 'Desktop readiness dialog',
        variant: 'desktop',
      },
    ],
  },
  {
    slug: 'video-highlights',
    title: 'Video Highlights with GPS Overlay',
    description: 'Designed and shipped a video-to-data feature that increased engagement and drove organic growth',
    href: '/case-studies/video-highlights',
    cover: '/images/video-highlights-cover.png',
    label: 'Case Study 02',
    meta: 'FiyrPod / Product Design',
    tagline:
      "Athletes don't share GPS data. They share video of themselves going fast. That insight determined every decision in this feature.",
    heroVisuals: [
      {
        src: '/images/case-studies/video-highlights/playback-mobile-fullscreen.png',
        alt: 'Video Highlights full-screen mobile playback with speed overlay',
        label: 'Full-screen playback',
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/video-highlights/attach-gps-mobile.png',
        alt: 'Video Highlights mobile flow for attaching a GPS session to a video',
        label: 'Attach GPS session',
        variant: 'mobile',
      },
    ],
    facts: [
      {
        label: 'Product',
        value: 'FiyrPod Coach App / GPS analytics',
      },
      {
        label: 'Core decision',
        value: 'Speed only in v1',
      },
      {
        label: 'Full arc',
        value: 'Designed, shipped in Coach app, then Athlete app',
      },
      {
        label: 'Outcome',
        value: 'Organic growth channel + top requested athlete feature',
      },
    ],
    quote: {
      text: 'So intuitive to use, it was easy even for me.',
      attribution: 'Coach, FiyrPod user',
    },
    sections: [
      {
        eyebrow: 'Overview',
        title: 'The data was there. No one could show it off.',
        intro:
          'The feature sat at the intersection of performance analytics and social behavior. The real opportunity was not just better review. It was building a product that could leave the platform.',
        paragraphs: [
          'FiyrPod already had rich GPS session data: speed peaks, acceleration bursts, and distance covered. Video of the same sessions existed too, but in a different place. Coaches were reviewing analytics in one screen and video in another, asking athletes to mentally connect the two.',
          'I realized early that analytics and shareability were not separate goals. The social layer was the growth engine. If athletes could export the exact moments their speed peaked, the product would stop being an internal tool and start becoming public proof of what FiyrPod could do.',
        ],
        callout:
          'The job was not adding video to analytics. It was turning analytics into something people actually wanted to share.',
      },
      {
        eyebrow: 'Problem',
        title: "Performance data that couldn't leave the platform",
        paragraphs: [
          "The product captured value internally, but it had no mechanism to amplify that value outside the app. Athletes and coaches had no smooth way to turn tracked performance into content they could actually post.",
          "I looked at what athletes were already sharing on Instagram from FiyrPod. More than 80 percent of posts were speed clips. Not readiness. Not load charts. Speed. That behavior made the product direction obvious before a single screen was designed.",
        ],
        bullets: [
          'GPS session data and video footage lived in separate systems and had to be matched manually.',
          'Playback had no contextual performance layer, so a key sprint looked no different from any other moment unless you cross-referenced charts manually.',
          'There was no export path designed to leave the platform cleanly.',
        ],
        media: [
          {
            src: '/images/case-studies/video-highlights/attach-gps-mobile.png',
            alt: 'Video Highlights mobile flow for attaching a GPS session to a video',
            label: 'Manual attachment flow / pre-auto-sync',
            variant: 'mobile',
          },
        ],
      },
      {
        eyebrow: 'Ownership',
        title: 'Product direction came from observed behavior, not feature volume',
        intro:
          'The hardest decisions in this feature were about what not to show. The team could have made it denser. I pushed to make it sharper.',
        paragraphs: [
          "I looked directly at what athletes were already sharing on Instagram from FiyrPod. That gave me the answer the product needed: athletes were using speed as the story. The feature had to be built around that behavior instead of around every metric the platform was capable of displaying.",
          'That same principle shaped the export path. A share flow should preserve momentum, not interrupt it. Every extra setting between seeing a great moment and posting it was a chance to kill the behavior the feature was supposed to unlock.',
        ],
        media: [
          {
            src: '/images/case-studies/video-highlights/playback-desktop.png',
            alt: 'Video Highlights desktop playback with top speed overlaid on video and synchronized chart',
            label: 'Coach app / synced playback + chart',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Key Decisions',
        title: 'Three decisions shaped the feature',
        cards: [
          {
            title: '01. Auto-sync by default',
            body: 'Manual session attachment created the primary source of user error. I pushed for auto-sync to be the default state, not an optional advanced feature, so the correct session would be attached before the user made a single decision.',
          },
          {
            title: '02. Speed only in v1',
            body: 'The team wanted multiple metrics in the overlay. I pushed to ship speed only, backed by proactive Instagram research showing that athletes overwhelmingly shared speed moments, not denser analytics.',
          },
          {
            title: '03. Export designed for social, not analysis',
            body: 'The original export flow had too much configuration and killed the impulse to share. The shipped version reduced export to a defaulted, one-confirmation path so sharing could happen before momentum died.',
          },
        ],
        mediaLayout: 'two-up',
        media: [
          {
            src: '/images/case-studies/video-highlights/attach-gps-mobile.png',
            alt: 'Video Highlights mobile GPS session attachment flow',
            label: 'Session sync / attachment state',
            variant: 'mobile',
          },
          {
            src: '/images/case-studies/video-highlights/playback-mobile-fullscreen.png',
            alt: 'Video Highlights mobile playback with a speed-only overlay',
            label: 'Speed-only overlay / shipped playback',
            variant: 'mobile',
          },
        ],
      },
      {
        eyebrow: 'Decision 01',
        title: 'Auto-sync as the default, not an option',
        paragraphs: [
          'The first version required users to manually attach a GPS session to a video and adjust alignment if the sync felt off. It did not feel off. It was often wrong. Incorrect session selection and timestamp mismatches created overlays that showed peak speeds at the wrong moments, which destroyed trust quickly.',
          "Engineers identified that video file metadata and GPS session start times could be matched automatically. My design decision was insisting that this become the default experience rather than an optional helper. The manual override stayed for edge cases, but 99 percent of users no longer had to encounter the alignment problem at all.",
        ],
      },
      {
        eyebrow: 'Decision 02',
        title: 'Speed only. Not everything.',
        paragraphs: [
          'The product already tracked far more than speed, and the natural temptation was to prove that richness in the overlay. I pushed in the opposite direction. Athletes were not looking for a portable analytics dashboard. They were looking for a brag-worthy moment.',
          "That decision was grounded in direct behavior. More than 80 percent of the athlete posts I reviewed were speed-focused. Shipping a single, highly legible metric on top of the video created a better share object than adding every available data point and making the export harder to read.",
        ],
        bullets: [
          'One metric kept the overlay readable under motion, compression, and small-screen viewing.',
          'Peak speed was highlighted automatically so athletes did not have to scrub manually to find their best moment.',
          'Additional metrics were deferred deliberately so later iterations could be based on actual sharing behavior.',
        ],
      },
      {
        eyebrow: 'Decision 03',
        title: 'The export button is a growth mechanism',
        paragraphs: [
          'The original export flow had five steps: select clip range, choose metrics, toggle branding, preview, then confirm. Testing showed a clear pattern. Users who reached preview exported successfully, but too many never got there because the configuration overhead killed the impulse to share.',
          'The shipped version treated defaults as product strategy. Clip range auto-selected around the peak speed moment. Branding stayed on. Speed remained the only visible metric. The default path became one confirmation instead of a reporting workflow.',
          'In internal testing, none of the three testers completed the original flow end to end. All three completed the shipped flow without abandoning it once. The options stayed available, but they were no longer the main path.',
        ],
        mediaLayout: 'two-up',
        media: [
          {
            src: '/images/case-studies/video-highlights/select-videos-mobile.png',
            alt: 'Video Highlights mobile multi-select upload grid',
            label: 'Video selection / upload entry',
            variant: 'mobile',
          },
          {
            src: '/images/case-studies/video-highlights/uploading-mobile.png',
            alt: 'Video Highlights mobile upload progress state',
            label: 'Upload progress / low-friction flow',
            variant: 'mobile',
          },
        ],
      },
      {
        eyebrow: 'Impact',
        title: 'A feature that marketed the product',
        paragraphs: [
          "After launch, the feature became one of FiyrPod's strongest organic distribution loops. Out of 22 recent Instagram posts, 15 featured speed-highlighted video exports from this feature. Average views per video reached 28K, with a peak video at 236K views.",
          'Auto-sync accuracy reached 99 percent, eliminating the main trust failure from the original flow. Satisfaction landed at 9 out of 10 across coaches and athletes, and the feature became the number one requested extension for the Athlete app.',
        ],
      },
      {
        eyebrow: 'What Happened Next',
        title: 'I shipped the Athlete app version through AI-directed development',
        paragraphs: [
          'After launch in the Coach app, athletes began asking for the same feature in the Athlete app. Instead of waiting on an engineering sprint, I shipped it myself using Claude Code and Cursor to direct AI-assisted development.',
          'The code was mostly AI-generated. The product decisions, prompts, review criteria, testing, and quality bar were mine. That work removed an engineering dependency for a feature users had already demonstrated they wanted.',
        ],
      },
      {
        eyebrow: 'Reflection',
        title: 'What I would build next',
        paragraphs: [
          "The speed-only constraint in version one was the right call, but now the product has behavior data from real exported videos. Which moments athletes choose to highlight, which sessions they share, and which speed thresholds they feature all create a much stronger basis for deciding what metric comes next.",
          "I would build the next version of metric selection from that behavioral signal, not from assumptions about what coaches or the team think athletes want to show off.",
        ],
      },
    ],
    screenshots: [
      {
        src: '/images/case-studies/video-highlights/empty-state-mobile.png',
        alt: 'Video Highlights mobile empty state',
        label: 'Mobile empty state',
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/video-highlights/playback-mobile-fullscreen.png',
        alt: 'Video Highlights full-screen mobile playback with speed overlay',
        label: 'Athlete app / full-screen playback',
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/video-highlights/attach-gps-mobile.png',
        alt: 'Video Highlights mobile attach GPS session flow',
        label: 'Manual attach flow / legacy state',
        variant: 'mobile',
      },
    ],
  },
  {
    slug: 'breakthru-crm',
    title: 'Breakthru CRM',
    description: 'Designed and shipped a self-serve Community Hub builder, replacing a manual dev-dependent process',
    href: '/case-studies/breakthru-crm',
    cover: '/images/breakthru-crm-cover.png',
    label: 'Case Study 03',
    meta: 'Breakthru / Product Design',
    tagline: 'A self-serve Community Hub builder that removed setup from engineering and put launch control in customer hands.',
    heroVisual: {
      src: '/images/case-studies/breakthru-crm/new-hub-empty.png',
      alt: 'Breakthru CRM Community Hubs entry state with new hub creation prompt',
      label: 'Community Hubs / self-serve starting point',
      variant: 'desktop',
    },
    facts: [
      {
        label: 'Role',
        value: 'Product Designer, end-to-end',
      },
      {
        label: 'Timeline',
        value: '3 months',
      },
      {
        label: 'Team',
        value: 'Solo designer, PM, 3 engineers',
      },
      {
        label: 'Outcome',
        value: '4 to 6 hours down to under 20 minutes',
      },
    ],
    sections: [
      {
        eyebrow: 'Context',
        title: 'A builder problem disguised as a services problem',
        intro:
          'Launching a Community Hub inside Breakthru CRM required developer intervention every single time. The setup worked, but it could not scale with customer growth.',
        paragraphs: [
          'Breakthru CRM served nonprofits and political organizations. Every new Community Hub required manual developer configuration, usually taking 4 to 6 hours per setup and repeating for each customer. That meant every launch depended on internal bandwidth instead of customer readiness.',
          'This was not just a usability issue. It was an operational scalability problem. Each new hub competed with core product work for engineering time, and campaign initiatives were delayed by setup bottlenecks that should have been part of the product.',
        ],
      },
      {
        eyebrow: 'Problem',
        title: 'Developer bottleneck, no autonomy, growth friction',
        paragraphs: [
          'Customers could not create or edit hubs independently. Engineering and support absorbed the repetitive work, while organizations waited for setup steps that followed the same patterns again and again.',
          'The opportunity was to turn a repeat service workflow into a self-serve product flow: something customers could launch themselves with enough guidance to feel confident, without handing them a blank system they did not know how to configure.',
        ],
        bullets: [
          'Manual configuration took 4 to 6 hours per hub.',
          "Organizations couldn't create or edit hubs independently.",
          'Campaign and community initiatives were slowed by setup dependency.',
        ],
      },
      {
        eyebrow: 'Research',
        title: 'Most customers wanted control, not total freedom',
        paragraphs: [
          'I ran six customer interviews focused on customization needs, paired that with support and engineering sessions to map the repetitive setup tasks, and audited SaaS builder tools like Wix, Squarespace, and Webflow to understand where guided flexibility worked best.',
          'The key pattern was clear: customers wanted branding control, but most actual setups reused the same few structural patterns. The builder did not need to start from infinite flexibility. It needed to make the common paths fast and safe.',
        ],
        callout:
          'About 80 percent of customers primarily wanted branding control, and most setups reused the same three configuration patterns.',
      },
      {
        eyebrow: 'Key Decisions',
        title: 'Three decisions shaped the builder',
        cards: [
          {
            title: '01. Templates over blank canvas',
            body: 'The PM initially pushed for maximum flexibility through a blank starting point. I argued for templates because most customers did not know where to begin and clustered into three common use cases: volunteer signup, event promotion, and fundraising.',
          },
          {
            title: '02. Real-time preview as confidence layer',
            body: 'Engineering proposed a save-and-preview model for speed. I pushed for immediate visual feedback because builder confidence depends on seeing changes reflected while configuring, not after committing them.',
          },
          {
            title: '03. Progressive disclosure for advanced settings',
            body: 'The builder exposed branding basics up front and hid advanced controls behind accordions. That kept the default flow approachable while preserving power for organizations with more specific setup needs.',
          },
        ],
        mediaLayout: 'two-up',
        media: [
          {
            src: '/images/case-studies/breakthru-crm/branding.png',
            alt: 'Breakthru CRM community hub builder branding configuration screen',
            label: 'Branding configuration',
            variant: 'desktop',
          },
          {
            src: '/images/case-studies/breakthru-crm/colors-preview.png',
            alt: 'Breakthru CRM community hub builder colors and preview screen',
            label: 'Design controls + preview',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Solution',
        title: 'Template entry into modular configuration and preview',
        paragraphs: [
          'The shipped builder flow moved from template entry into modular configuration across branding, features, and layout, then into preview and launch. It was designed around reusable components that matched the engineering architecture, which kept the product model aligned with implementation rather than becoming a purely visual layer.',
          'Template-first onboarding gave customers a place to start, while the builder itself exposed the decisions they actually cared about most: name, color, logo, layout, and feature toggles. Advanced options remained accessible, but they no longer dominated the primary path.',
        ],
        mediaLayout: 'two-up',
        media: [
          {
            src: '/images/case-studies/breakthru-crm/new-hub-empty.png',
            alt: 'Breakthru CRM community hubs empty state and new hub entry point',
            label: 'Builder entry point',
            variant: 'desktop',
          },
          {
            src: '/images/case-studies/breakthru-crm/missions.png',
            alt: 'Breakthru CRM configured community hub with mission modules',
            label: 'Configured hub / launched state',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Impact',
        title: 'A builder that became the standard launch path',
        paragraphs: [
          'Setup time dropped by roughly 95 percent, moving from 4 to 6 hours of developer-led work to under 20 minutes of self-serve setup. That removed 15 to 20 engineering hours of repetitive work every week and redirected that time back into core product development.',
          'Support tickets related to hub setup dropped by 70 percent, and the builder became the standard launch path for all new customer hubs. The value of the feature was not just speed. It changed who owned the work.',
        ],
      },
    ],
    screenshots: [
      {
        src: '/images/case-studies/breakthru-crm/branding.png',
        alt: 'Breakthru CRM branding editor',
        label: 'Branding editor',
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/breakthru-crm/colors-preview.png',
        alt: 'Breakthru CRM design and preview editor',
        label: 'Design controls and preview',
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/breakthru-crm/missions.png',
        alt: 'Breakthru CRM configured missions hub',
        label: 'Configured hub / missions view',
        variant: 'desktop',
      },
    ],
  },
  {
    slug: 'breakthru-hub',
    title: 'Breakthru Engagement Hub',
    description: "A gamification system for community activation inside Breakthru's customer hub",
    href: '/case-studies/breakthru-hub',
    cover: '/images/breakthru-hub-cover.png',
    label: 'Case Study 04',
    meta: 'Breakthru / Product Design',
    tagline: 'A modular engagement system designed to increase repeat participation, mission completion, and ongoing learning across customer communities.',
    facts: [
      {
        label: 'Role',
        value: 'Product Designer, end-to-end',
      },
      {
        label: 'Timeline',
        value: '10 weeks',
      },
      {
        label: 'Scope',
        value: 'Research, UX, UI, prototyping, testing',
      },
      {
        label: 'Outcome',
        value: '+45% task completion / +30% weekly engagement',
      },
    ],
    sections: [
      {
        eyebrow: 'Context',
        title: 'Strong onboarding, weak ongoing participation',
        intro:
          "Breakthru's community hub was effective at getting people in the door, but it struggled to keep them active over time.",
        paragraphs: [
          'The product already had onboarding strength, but repeat participation and learning completion were weak. The business goal was to increase weekly return behavior without relying on heavy engineering overhead or segment-specific redesign work for every customer type.',
          'That made the problem broader than interface polish. The system needed to create motivation, progress visibility, and repeatable engagement loops that could scale across different communities.',
        ],
      },
      {
        eyebrow: 'Problem',
        title: 'A motivation and system design problem, not a usability problem',
        paragraphs: [
          'Users activated initially, but mission completion rates stayed low and weekly return behavior dropped off quickly. The issue was not that people could not use the hub. The issue was that the product gave them too little reason to keep coming back.',
          'There was no compelling feedback loop for completing tasks, no visible sense of progress, and no engagement mechanic that could scale cleanly across different customer contexts.',
        ],
        bullets: [
          'No clear motivation to complete missions consistently.',
          'No visible progress system connecting small actions to larger outcomes.',
          'Engagement patterns did not scale across customer types.',
        ],
      },
      {
        eyebrow: 'Research',
        title: 'Engagement needed recognition, social pressure, and habit loops',
        paragraphs: [
          'I ran ten interviews across active and lapsed users, surveyed more than one hundred members across four customer groups, reviewed behavioral analytics to identify drop-off points, and looked closely at products like Duolingo, Habitica, and Peloton.',
          'The pattern was consistent. Seventy percent of respondents said they had no compelling reason to complete missions. Sixty percent did not understand how their actions contributed to anything larger. Forty-five percent wanted social elements like team challenges, and sixty-eight percent responded positively to recognition and rewards.',
        ],
        callout:
          'The opportunity was not one feature. It was a system that made progress, recognition, and return behavior legible.',
      },
      {
        eyebrow: 'Key Decisions',
        title: 'Three decisions shaped the engagement system',
        cards: [
          {
            title: '01. Leaderboards, not badges alone',
            body: 'The first concept leaned on badges because it was cleaner and lighter to build. Testing showed that badges alone created almost no motivation. Leaderboards introduced social pressure, so I kept them and added opt-out plus a “most improved” angle to reduce anxiety for low performers.',
          },
          {
            title: '02. Move daily trivia out of the homepage',
            body: 'The first prototype placed trivia prominently on the homepage. Users found it intrusive. I moved it into a dedicated Challenges tab so it became an opt-in habit loop rather than homepage clutter.',
          },
          {
            title: '03. Reward feedback had to feel alive',
            body: 'Static badge icons were too emotionally flat in testing. Switching to animated badge unlocks made reward moments feel noticeably more motivating and gave the system a stronger sense of progress.',
          },
        ],
        mediaLayout: 'two-up',
        media: [
          {
            alt: 'Placeholder for leaderboard and team challenge module',
            label: 'Placeholder / leaderboard + team challenge module',
            variant: 'desktop',
          },
          {
            alt: 'Placeholder for animated badge unlock feedback',
            label: 'Placeholder / animated badge unlock',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Solution',
        title: 'A modular framework for repeat participation',
        paragraphs: [
          'The final system combined progress trackers for daily and weekly missions, a social layer with leaderboards and team challenges, and lighter habit loops like daily trivia. Instead of solving one engagement moment at a time, the work created a reusable framework that could be configured across customer segments.',
          'The product strategy mattered as much as the UI. These modules were designed so they could scale without requiring engineering to rebuild the experience for every new community type. The goal was durable engagement with low operational overhead.',
        ],
        media: [
          {
            alt: 'Placeholder for modular engagement framework overview',
            label: 'Placeholder / modular engagement framework',
            variant: 'desktop',
          },
        ],
      },
      {
        eyebrow: 'Impact',
        title: 'A reusable activation model inside the platform',
        paragraphs: [
          'The engagement system increased task completion by 45 percent and weekly engagement by 30 percent. More importantly, it scaled across three customer types with minimal added engineering overhead.',
          'The framework became the standard model for community activation inside the platform, which meant the work shifted from being a single redesign to becoming the reusable pattern Breakthru could rely on moving forward.',
        ],
      },
    ],
    screenshots: [
      {
        src: '/images/breakthru-hub-cover.png',
        alt: 'Breakthru Engagement Hub case study cover',
        label: 'Engagement Hub / overview',
        variant: 'desktop',
      },
      {
        alt: 'Placeholder for social leaderboard state',
        label: 'Placeholder / social leaderboard state',
        variant: 'desktop',
      },
      {
        alt: 'Placeholder for challenge or trivia flow',
        label: 'Placeholder / challenge flow',
        variant: 'desktop',
      },
    ],
  },
];

export function getCaseStudies() {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
