# Career Portfolio — local first slice

A single-page, evidence-first portfolio for internship recruiters and hiring managers. This folder is independent of the existing VitePress research site. No changes to the documentation, package scripts, or deployment workflow are required.

## Preview on a Mac

In Terminal:

```sh
cd "/Users/jasdeep/Documents/Codex/2026-11-11/new-chat/is218-career-portfolio-research/portfolio-site"
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/> in Chrome or Safari. Keep Terminal open; press Control+C to stop. If port 8000 is occupied, use 8001 in both the command and URL. Refresh after saving HTML or CSS. No npm install or build is needed. Python serves static files only; it is not an application backend.

## Technology and organization

- `index.html`: semantic navigation, introduction, three project cards, RPS case study, About, Skills, and an approved GitHub repository link.
- `assets/css/styles.css`: shared design tokens, layout, card styles, responsive breakpoints, and visible focus states. System fonts avoid remote font requests.
- `TESTING.md`: actual verification and remaining checks.

Plain HTML and CSS are sufficient for the useful workflow: introduction → project → case study → evidence. Native anchors work without JavaScript. No frameworks, application backend, accounts, database, analytics, forms, or external embeds are included. Flask and SQLite are described only as technologies used in showcased projects.

Relative asset paths let the page live beneath a folder prefix. This slice has no deployment configuration. The existing GitHub Actions workflow still publishes only the VitePress output; do not push or dispatch it as part of local review.

## Review 2 update

Use the presentation links at the top to inspect Option A (selected Evidence-First) and Option B (Case-Study Notebook mockup). Both use the same HTML content. Notebook mode is active at `#notebook`; navigating to a different section anchor restores Option A. Scroll to inspect the notebook.

The attached résumé is available under `assets/resume/`, with view/download links. About and Skills now include the supplied internship and minor. Professional links include the approved GitHub and LinkedIn profiles and both project repositories.

See `PORTFOLIO-RECORD.md` for the design comparison, evidence, changes, privacy decisions, owner feedback, and pending peer feedback. `TESTING.md` records actual verification. Contribution details, personal lessons, and Campus Help evidence still need owner review. The original résumé is preserved exactly, including its email and academic information. No publication is authorized.
