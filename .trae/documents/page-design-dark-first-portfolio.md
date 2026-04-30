# Page Design (Desktop-first)

## Global Styles (All Pages)
- **Theme**: Dark-first with optional light toggle (optional UI; default dark).
- **Design tokens**
  - Background: `#0B0F14` (base), `#0F1620` (surface)
  - Text: `#E6EDF3` (primary), `#9FB0C0` (muted)
  - Accent: `#7C5CFF` (primary), `#22C55E` (success)
  - Border: `rgba(255,255,255,0.08)`
  - Radius: 12px cards, 999px pills
  - Shadow: subtle soft shadow on elevated cards (dark-friendly)
- **Typography**: 16px base; scale: 14/16/18/24/32/48; headings tight tracking.
- **Buttons**: primary filled accent + hover brighten; secondary outline; focus ring visible.
- **Links**: underline-on-hover; visited color unchanged for consistency.
- **Motion (Framer Motion)**
  - Use subtle section reveal (opacity + y) with stagger for lists.
  - Reduce motion when `prefers-reduced-motion` is set.

## Page: Home (Portfolio Landing)
### Meta Information
- Title: “Frontend Developer — High-converting, fast web experiences”
- Description: “Conversion-focused frontend development: landing pages, UI engineering, performance.”
- Open Graph: title/description + social preview image.

### Layout
- Desktop-first 12-column grid (CSS Grid) within max-width container (e.g., 1120–1200px).
- Sections stacked vertically with generous spacing; responsive collapse to single-column on mobile.
- Sticky header on desktop; mobile header uses a slide-down/overlay menu.

### Page Structure (sections in order)
1. **Header / Nav**
   - Left: wordmark/logo.
   - Center/right: section links (Work, Services, Process, About, Contact).
   - Rightmost: primary CTA button.
2. **Hero**
   - Left: headline, subheadline, 2 CTAs.
   - Right: optional portrait/abstract graphic.
   - Micro proof row (e.g., “performance • accessibility • conversion”).
3. **Social Proof**
   - Testimonials carousel/grid (desktop grid, mobile swipe).
   - Optional logo strip.
4. **Services / Value Props**
   - 3–4 cards; each card: title, outcome bullets, “best for” tag.
5. **Featured Work**
   - Card grid with project title, short result metric, tags, thumbnail.
   - Each card animates on hover (lift + glow) and links to `/projects/[slug]`.
6. **Process**
   - Horizontal stepper on desktop; vertical timeline on mobile.
7. **Skills / Tech Stack**
   - Chip list grouped by category (UI, state, testing, tooling).
8. **About**
   - Two-column: story + strengths; highlight credibility points.
9. **FAQ**
   - Accordion with smooth height animation.
10. **Contact**
   - Left: pitch + response-time promise.
   - Right: form (name/email/message) with inline validation + submit loading state.
11. **Footer**
   - Social links, email, minimal copyright.

## Page: Project Case Study (`/projects/[slug]`)
### Meta Information
- Title: “{Project Name} — Case Study”
- Description: “Problem → approach → solution → measurable outcomes.”
- Open Graph: per-project image and summary.

### Layout
- Hero section with title + role + tech tags.
- Content uses a readable text column (e.g., 720–800px) plus full-bleed media blocks.

### Sections & Components
- **Case Study Hero**: headline, brief, metrics pills.
- **Gallery**: responsive image/video blocks; click-to-expand modal (optional).
- **Narrative Blocks**: Problem, Constraints, Approach, Solution, Results, Learnings.
- **CTA Block**: prominent “Let’s discuss your project” linking back to Home contact.
- **Prev/Next**: lightweight navigation to other projects (optional if multiple).

## Page: Thank You (`/thank-you`)
### Meta Information
- Title: “Message sent — Thank you”
- Description: “Confirmation and what happens next.”

### Layout & Content
- Centered card on dark surface.
- **Confirmation state**: success headline, short expectation (“I’ll reply within X”).
- **Next actions**: buttons to “Back to Home” and “View Work”.
- Motion: small success reveal; no distracting loops.
