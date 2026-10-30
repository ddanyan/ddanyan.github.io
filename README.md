# Daniel Yang - portfolio version 1
Seven static HTML pages with three primary destinations (Home, Projects, Research), system CSS, a small navigation/scroll script, optimized hardware photos and company logos. about.html preserves the old direct URL with the consolidated Home content. No dependencies, server backend, external assets, analytics or build step. Not deployed. Selected user-requested photo derivatives are in assets/photos/. Complete source decks and review sheets remain excluded. Contact, education and location now use the details supplied by the user.

## Local preview
From the Portfolio workspace, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory version_1
```

Open http://127.0.0.1:8000/index.html. Stop with Ctrl+C. This local preview also exposes private review documentation to the local machine; bind only to localhost. Opening index.html directly works for basic viewing.

## Prepare a clean publishing directory yourself
Resolve CONTENT_TODO.md first, including owner release review. Review ASSET_SELECTION.md for held imagery. Never upload the experience archive, source_photos, review/, browser profile or the whole workspace. Public Pages publishing can make every file in the selected folder accessible.

Create a separate, empty website repository outside this workspace. Copy ONLY:

- index.html, about.html, research.html
- projects/index.html, projects/wpt.html, projects/dry-ice.html, projects/wearable.html
- assets/styles.css, assets/nav.js, assets/favicon.svg
- assets/documents/daniel-yang-resume.pdf (required for both resume links)
- assets/photos/wpt-coil.webp, wpt-platform.webp, dry-prototype.webp, dry-controls.webp, wearable-assembled.webp, wearable-open.webp, coil-simulation.webp (all seven inside assets/photos/)
- assets/logos/boeing.svg, honda.svg, ge.svg (inside assets/logos/)
- assets/BRAND_SOURCES.md for logo-source records; about.html only if you want the legacy URL retained

Retain directory structure and filename case. Add an empty .nojekyll file at the publishing root. There is no need to upload the Markdown review/curation files. Inspect the staged file list before committing. All commit/push/upload steps below are for you; the agent has performed none.

## Recommended manual GitHub Pages deployment: repository root
1. Create your chosen public repository on GitHub (public repositories support Pages on GitHub Free). A normal project repository gives a URL shaped like https://USERNAME.github.io/REPOSITORY/. A repository named USERNAME.github.io gives the account-root site instead. These are examples, not observed live URLs.
2. Place the allowlisted files above at the root of that repository, plus .nojekyll. Commit and push them yourself, or use GitHub's Add file > Upload files interface while preserving projects/ and assets/ directories.
3. In the repository, open Settings > Pages. Under Build and deployment, set Source to Deploy from a branch.
4. Select your branch (typically main) and /(root), then Save.
5. Check the Pages deployment workflow in Actions. When successful, use the URL shown in Settings > Pages. No live URL has been established during this task.

## Alternative: /docs
In your separate website repository, put the same allowlisted contents inside docs/ with docs/index.html and docs/.nojekyll. Commit/push yourself. Under Settings > Pages, choose Deploy from a branch, your branch, and /docs; Save. The URL remains the repository site URL, not a /docs URL. Do not select the root of a repository that contains the private source archive.

## Alternative: GitHub Actions
Branch publishing supports root or /docs, not an arbitrary version_1 folder. Actions is optional and unnecessary here. If you retain a source directory in a separate sanitized repository, select Settings > Pages > Source: GitHub Actions, choose GitHub's Static HTML workflow, and configure its artifact to contain only the allowlisted files, with index.html at artifact root. Do not upload the entire version_1 directory because it includes private review artifacts. No workflow is installed or enabled by this implementation.

Publishing settings checked against [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) on 2026-10-30.

## Validation executed
- Chrome headless via local DevTools protocol: seven pages at widths 375, 768, 1280 and 1600 (28 layout checks), no horizontal overflow, broken images, missing image alt attributes or duplicate main landmarks; one h1 per page.
- 96 internal href/src references and fragment targets fetched successfully using simulated /portfolio/ project prefix; each nested .html page opened directly. No SPA or rewrite dependency.
- Actual keyboard Tab reached visibly focused skip link; Enter opened mobile menu; Escape closed it and returned focus. Navigation stayed visible without JS. Reduced-motion CSS observed.
- Browser console/exception capture: no recorded errors in final run.
- Custom static checks: balanced authored HTML tags, unique ids, ordered heading levels; SVG XML parsing including logos, plus photo dimensions and empty EXIF. JS syntax check uses node --check assets/nav.js.
- Color calculations: text/focus color pairs exceed 4.5:1; decorative hairlines are not interactive controls.
- Revision screenshots reviewed for home at 375/1280, project index at 375/1280, research at 1280 and experience section at 375/1280. Screenshots generated for home at all four widths and dry-ice case at 1280. Other pages received browser layout checks, not a claim of complete visual inspection at every scroll position.

Artifacts: review/validation.json, home-*.png, dry-ice-1280.png. Reproduce browser check from workspace with Node 24 and locally installed Chrome: node version_1/review/validate.mjs. This starts localhost port 8137 and Chrome debugging port 9227, saves only local artifacts and exits. Static check: python version_1/review/static_check.py. Tests exclude the generated browser-profile HTML. Contact sheets contain uncleared material: PRIVATE, never upload.

Not executed: screen-reader audit, real touch-device testing, formal HTML validator/axe audit, full slide rendering/video inspection, real GitHub deployment or production refresh. No formal WCAG conformance claim.

## Manual post-deployment smoke check
Open home and each case URL directly and refresh. Confirm styles/diagrams/favicon load under your repository prefix. At all four widths check cards and navigation, Tab through links and menu, activate with Enter, close menu with Escape, zoom to 200%, and inspect text/labels and footer. Check reduced-motion behavior and screen-reader landmark/heading/link announcements. Open DevTools Console and Network for errors. Check the resume/contact once supplied. Confirm /review/ and all original source paths are absent from the published artifact. Add canonical/social URLs only after the actual public URL is known.

## Photo-led revision validation
28/28 page/viewport layout checks and 28/28 rail checks pass. Section-dot counts match rendered sections, rail stays in the viewport, bubble reaches 100% at bottom, active section updates, and crossing emits the pulse animation. Reduced-motion emulation disables animation; rail links are native keyboard anchors. No scroll/touch events are prevented. The rail progressively enhances the page and is absent without JS; all content and normal navigation remain available. Screenshots/JSON in review/ are local only. Static checks now cover all seven SVGs and seven optimized WebP assets. User requested company logos; provenance is in assets/BRAND_SOURCES.md. Supplied photos are used locally at the user's request; no upload or deployment was performed.

## Resume update
The supplied experience_archive/resume15.pdf is copied unchanged to assets/documents/daniel-yang-resume.pdf. Home and the legacy about page offer View resume (PDF) and Download resume. Include the PDF in the publishing allowlist; the source archive stays private. The file is accessible locally; no deployment has been performed.
