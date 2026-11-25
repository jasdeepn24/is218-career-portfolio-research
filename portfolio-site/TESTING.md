# First-slice verification

The first section is the original implementation record. The Review 2 update below supersedes its missing-résumé/profile and Highway owner-report limitations; it also supersedes its old privacy inventory.

Date: November 23, 2026 (America/New_York).
Branch: `codex/portfolio-first-slice`.
Base: fetched `origin/main`, `58d7610` (latest main when work started).
Scope: local static portfolio only. No commit, push, merge, or deployment.

## Actual checks

| Check | Method and actual result |
| --- | --- |
| Local HTTP | `curl --fail` against the served homepage and `assets/css/styles.css` returned HTTP 200 for both. Localhost access required the permitted sandbox escalation. |
| Desktop rendering | Chrome, 1470 × 709 CSS-pixel viewport: reviewed introduction, layout, and case study. Shared stylesheet loaded; text and buttons rendered without clipping in the reviewed views. |
| Mobile | Chrome viewport override at 375 × 812: reviewed the introduction/navigation and project-card layout. Cards stack; text wraps. DOM geometry check across all main descendants found no right-edge overflow; document scroll width and viewport width both measured 375px. This is browser emulation, not a physical-phone test. |
| Useful recruiter workflow | Chrome keyboard: Tab reveals the skip link; Enter moves to main; Tab reaches Explore my projects; Enter reaches Projects; Tab/Enter opens the RPS case study; Tab/Enter opens the correct public GitHub repository. Passed. |
| Keyboard order and focus | Traversed all 18 links in DOM order using Tab. Every link had a solid computed focus outline. Visually checked the skip link and repository button focus rings. No keyboard trap. Back to top also returned to the introduction. |
| Second browser | Safari: loaded the local page, inspected its accessibility tree and a screenshot of the introduction. Rendering smoke check passed. Full keyboard/mobile testing was performed in Chrome only. |
| Heading structure and markup | Python standard-library HTMLParser check: balanced explicit tags, unique IDs, one H1, all local fragments and assets resolved, no scripts/iframes/forms. Browser accessibility tree showed H1 → H2 → H3 structure and named navigation/sections. This was a focused structural check, not full standards-validator certification. |
| Contrast | Calculated WCAG relative luminance ratios for all four text colors against white, surface, and tint backgrounds. Lowest ratio: 5.57:1. White button text on the green accent: 7.17:1. All tested text pairs exceed 4.5:1. |
| Folder-prefix compatibility | Checked relative stylesheet resolution both at a root URL and beneath `/is218-career-portfolio-research/portfolio-site/`; local asset exists. No deployed-path smoke test was performed. |
| RPS evidence | GitHub connector retrieved README, SPEC, app.py, game.py, tests/test_game.py, tests/e2e/test_round.py, and workflow configuration at `f7dbcd0684b0cbcff0a998ef6dd17bac866ae027`. Reviewed actual contents: nine rule cases, request test, and round/replay browser test. |
| RPS CI | GitHub API reported run `41541972475` completed with conclusion `success` for the reviewed SHA, dated November 2, 2026. The portfolio links directly to it. No RPS tests were rerun in this task; historic SPEC counts are not presented as new results. |
| Highway evidence link | Opened the actual portfolio link in Chrome. Research site loaded and described Stage 1 backend verification, while stating the playable game and complete journey remain unfinished. The portfolio explicitly labels newer local-play/accounts/scores claims as owner-reported; the research link is not presented as a playable demo. |
| Privacy | Inspected the entire new HTML/CSS and file inventory. No transcript, grades, private reflection, email, phone number, secrets, résumé, tracking, remote fonts, or embedded third-party content. External links use only the documented RPS repository/evidence and Highway research destinations. No missing-profile placeholder links. |
| Research-site isolation | `git diff --exit-code origin/main -- . ':!portfolio-site'` passed. Existing documentation, VitePress configuration, package files, and workflow are unchanged. No VitePress rebuild was needed for these isolated static files. |

## Limitations and pending review

- **200% browser zoom remains unverified.** The attempted browser shortcuts did not establish a confirmed 200% state; this is not recorded as a pass. Before release, use the browser's zoom menu to set 200%, traverse the page, check text/clipping/navigation, and restore the previous zoom.
- No full HTML validator, automated accessibility audit, screen-reader session, physical-device test, or independent peer review was completed. Structural, contrast, keyboard, and visual checks above are bounded evidence, not accessibility certification.
- Exact individual implementation contributions and personal lessons require owner confirmation. Campus Help has no approved public evidence link. Highway Game local functionality was not executed here.
- Optional LinkedIn, résumé, and profile/contact details remain absent until approved.
- Public deployment is outside this task. The final hosting path must be smoke-tested after separate approval.

## Repeat the useful workflow

Start the server using `README.md`. In Chrome, begin at the top, use Tab to reveal Skip to main content, then Enter. Tab/Enter through Explore my projects → Read the RPS case study → View the RPS repository. Confirm each destination and visible focus. Review the test links against the displayed claims. Repeat the page review at 375px width and confirmed 200% zoom. Check that Campus Help still says in development and Highway Game does not imply a public playable release.


## Review 2 update — actual checks, November 23, 2026

- Chrome desktop at 1470 × 709: inspected the updated introduction and both presentation options. Notebook column measured 760px; Option A restored correctly. Screenshots saved during verification.
- Chrome at 375 × 812: Option A and Option B each measured viewport width 375px and document scroll width 375px; no horizontal overflow. Visually inspected the updated mobile introduction. This is emulation, not a physical device.
- Keyboard: traversed all 30 visible Option A links with Tab; each had a solid computed outline. Option selectors worked with native links. Existing skip-link behavior and focus styling retained; no new controls or scripts.
- Résumé: clicked Download résumé (PDF) in Chrome; a download completed to the Mac Downloads folder. Local source/copy byte comparison passed. SHA256: `92f8a40ad65982e001bfbd36321f732ae25ff0a15a481a350f9c0b2c2218de6f`. PDF rendered and visually inspected; exact supplied version retained.
- Python HTMLParser: nesting, unique IDs, every internal anchor, and local asset existence passed. Both options use the same DOM and CSS; there is no duplicated case-study source.
- HTTP: homepage, stylesheet, and résumé each returned 200 at localhost:8011. Every distinct GitHub profile/repository/source/CI/PR link returned 200. LinkedIn returned 999 (automated-request block), so destination availability remains unverified; supplied URL is preserved exactly.
- Highway evidence: connector confirmed PR #4 is merged, merge SHA `083fb3b45c0b62054029626fe67983a0f535ca4b`; inspected its body and pinned game-app README. Recorded project tests are attributed to those records, not rerun or claimed as portfolio test results.
- Privacy/content: reviewed new page and résumé. Exact supplied PDF includes approved email/profile information and GPA/Dean’s List; no additional phone/address, transcript, private reflection, secrets, or internal employer files added. Public page does not copy GPA or academic honors. Current owner instruction to preserve this attachment supersedes the original no-résumé/no-grade inventory for this PDF only.
- Existing contrast colors are unchanged; original calculated contrast results still apply. No new color pairs, remote assets, dependencies, or JavaScript.

Still unverified: confirmed 200% browser zoom, screen-reader behavior, physical phone, full standards validator, and peer feedback. The updated page was checked in Chrome; Safari results above apply to the earlier slice only. Notebook is a presentation mockup: section-anchor navigation restores Option A. No production deployment/path check, and no game test suites executed in this task.

- November 25, 2026: Owner manually checked the local portfolio in Chrome at 200% zoom. No visible layout issues were reported.
