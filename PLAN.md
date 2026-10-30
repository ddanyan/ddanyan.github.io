# Implementation plan - 2026-10-30
Written after archive, visual review and curation; before site code.

Use dependency-free HTML/CSS and a small navigation script. Pages: homepage; projects/index.html; three source-backed case studies in projects/; about.html; research.html. Header links About, Projects, Research, Resume status and Contact. Contact section discloses missing channel; no dead links. Hero pairs precise positioning with an original conceptual WPT line diagram. Three cards ordered WPT, dry ice, wearable. Cases use challenge - role - approach - implementation - verification - trade-offs. Measured/team and individual contribution boundaries appear beside results.

Design: specified near-white/ink/cool-accent tokens, 1160px content grid, 55/45 hero, fluid 42-72px name, generous spacing, hairline cards, no stock imagery or remote dependencies. At small widths stack hero/cards and expose accessible expandable navigation; with JS unavailable keep links visible. Use original SVG diagrams explicitly labeled conceptual, never as test evidence.

Files: assets/styles.css, assets/nav.js, assets/*.svg; plain .html pages; documentation at version_1 root; private review/ excluded from deployment. Relative paths support project repositories. No build needed. Deployment instructions will use explicit file allowlist for repo root or /docs; no deployment actions performed.

Review separately for recruiter clarity, technical attribution, content density, image honesty, and CTA usefulness; revise before tests. Validate links/anchors, all four viewport widths via available Chrome headless, overflow, keyboard/focus/menu, reduced motion, text contrast, nested direct navigation and simulated /portfolio/ subpath. Capture and inspect actual renders. Record tests accurately and provide manual steps for anything unavailable.

Risks: no source visual publication clearance, no contact/resume, unreleased research; no full-slide rendering tools. Need owner release review before public deployment. Keep source files unchanged. Append outcomes to root LOG.md only.

## Simplification revision plan
After retained source review and updated selection: consolidate homepage profile/contact/education, then resume placeholder, then experience with restrained authentic company logos. Keep Projects and Research as the other primary destinations. Projects become full-width horizontal photo/story rows. Research receives apparatus photos and an uncropped simulation illustration. Retain case-study narrative layout, replacing diagrams with photo pairs. Keep about.html as a compatibility page with consolidated content and Home navigation. Add fixed vertical scroll rail on every page: page-position ring, actual section-start dots, one pulse on crossing, keyboard anchor navigation, reduced-motion support, thin mobile gutter. Native scrolling remains untouched. Test all pages at four widths, links, menu, rail placement/crossing/resize/reduced motion and no-JS fallback. No publishing.

## Resume integration
Resume update: copy the user-supplied PDF into assets/documents/, replace the unavailable state on Home and legacy About with view/download anchors, retain relative URLs, verify HTTP access at a simulated repository prefix, update the publishing allowlist. No deployment.
