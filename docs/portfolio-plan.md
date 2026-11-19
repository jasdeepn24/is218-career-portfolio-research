# Portfolio Plan

A proposal for a future portfolio. The current four-page site is the research notebook, not the finished portfolio.

## Target reader

An internship recruiter or technical hiring manager evaluating a BIS student for business-facing software, automation, or data work. The reader needs to understand the student's contribution, inspect evidence, and distinguish finished work from plans quickly.

## Two simple design ideas

1. **Evidence-first project list:** A short introduction followed by three restrained project cards for RPS, Campus Help, and highway research. Each has a status, problem, contribution, and evidence link. Use a single accent color, readable typography, and generous spacing.
2. **Compact case-study notebook:** A text-first project index leading to short case studies organized as problem → decisions → evidence → limitations → next step. Use a narrow reading column and simple headings; no animation is necessary.

**Approved design:** an evidence-first project list with simple cards and short case studies, because recruiters and hiring managers need to scan status and evidence quickly. Keep the full notebook layout as an alternative, not an additional feature requirement.

## Public examples

- **Melody — Wizard Zines.** Checked November 11, 2026. This portfolio page links to the live work up front, then gives each contribution its own section. For my RPS case study, I could lead with the repository link and use short sections to explain my contribution and what I tested. [Original portfolio page](https://melody.dev/work/wizard-zines/)
- **Studio 24 — A progressive web app supporting humanitarian relief.** Checked November 11, 2026. The case study moves from the user problem and constraints to discovery, implementation choices, results, and testing. For Campus Help, I could use the problem, constraints, and decision sections now and add results after testing. [Original case study](https://www.studio24.net/work/progressive-web-app/)

## Skills to portfolio evidence

Each artifact and check below is proposed.

| Employer requirement | Current evidence | Learning gap | Proposed artifact and check |
| --- | --- | --- | --- |
| Coinbase · Deliver tested software for a stakeholder workflow and validate AI output | IS 218 RPS Python and tests; IT 310 Campus Help marketplace planning | API integration, workflow validation, and human review | Campus Help triage prototype with synthetic requests. Test normal, incomplete, and ambiguous inputs and verify that uncertain cases go to human review. |
| Citi · Build and evaluate reliable AI software in a banking context | MGMT 216 Excel forecasting and regression; RPS tests; completed FIN 218 coursework | Retrieval, repeatable evaluation, and production controls | Small public-data banking FAQ prototype with source citations. Check it against held-out questions and log unsupported answers. |
| NBA · Integrate data and AI into internal systems and monitor performance | MGMT 216 analytics coursework and highway research decision notes | SQL data pipelines and model monitoring | Synthetic support-ticket pipeline with a quality report. Re-run it and check that duplicate and missing records are flagged consistently. |

## Brand voice and character

**Three voice words:** Clear · Curious · Reliable.

**Brand character:** A thoughtful student builder who connects business needs to technical decisions, explains what was checked, and is candid about unfinished work. Avoid titles that imply senior expertise.

## Two ethical persuasion choices

- **Earn confidence through traceable evidence.** Link code and documented checks, disclose AI assistance and the student's contribution when applicable, and visibly label planned work. Do not invent metrics, testimonials, employer endorsements, or proficiency ratings.
- **Respect reader choice and privacy.** Use descriptive links and accessible layouts without urgency tricks, intrusive tracking, or preselected consent. Offer only an approved professional contact channel; never publish the transcript or personal career reflection.

## User stories and acceptance checks

These are future implementation requirements; they are not claims that a portfolio has already been built.

| User story | Acceptance checks |
| --- | --- |
| As a recruiter, I want to understand the student's focus quickly so I can assess relevance. | The opening identifies BIS student status and intended internship areas; no senior title or unsupported expertise appears. |
| As a technical reviewer, I want evidence behind a project claim. | Every showcased project states contribution and status; RPS links to its repository and representative tests; claimed results have supporting records. |
| As a reader, I want to distinguish completed work from plans. | RPS completion is attributed appropriately; Campus Help and highway research show planning labels beside their titles; no playable-game claim appears without a verified build. |
| As a keyboard or mobile reader, I want to navigate without barriers. | All links work with a keyboard and visible focus; headings are ordered; text remains readable at 200% zoom and a 375px viewport; images, if added, have useful alt text. |
| As the portfolio owner, I want to share useful evidence without exposing private material. | A prepublication review confirms that built pages and assets contain no transcript, grades, private reflection, secrets, or unapproved contact details. |

## Minimum future content

Prepare an accurate introduction, evidence-backed skills, one short RPS case study, one Campus Help planning summary, and one highway research summary. Include contributions, a reviewed résumé, GitHub, LinkedIn, and an approved professional contact channel. Add only supported evidence, describe limitations, and obtain explicit authorization before publishing. Personal career reflection remains outside the site and its build inputs.

## 1. Agile scope and delivery plan

**Planning update: November 18, 2026.** Build a small portfolio for internship recruiters and hiring managers using the five stories and acceptance checks above. Reuse the [career evidence](./career-comparison.md#coursework-and-project-evidence) and [employer research](./job-research.md); the learning prototypes above are future ideas, not portfolio implementation tasks. No backend, database, authentication, Next.js, or new project functionality is in scope.

Use short iterations: choose a small task, implement it, check its acceptance criteria, request feedback, and reprioritize. Milestones are completion gates, not promised dates.

| Priority / milestone | Tasks in build order | Depends on | Responsibility |
| --- | --- | --- | --- |
| P0 · M1: approved content | Verify introduction, skills, contributions, project statuses and evidence; draft short summaries; review résumé and profile/contact links for privacy. | Existing research; owner decisions below | Jasdeep: content owner and developer |
| P0 · M2: usable structure | Create semantic page sections, navigation, project cards and case-study anchors; add reviewed content and descriptive links. | M1 | Jasdeep: implementation |
| P0 · M3: readable presentation | Apply shared styles, visible focus, mobile layout and readable typography; add JavaScript only for an agreed behavior. | M2 | Jasdeep: implementation and checks |
| P0 · M4: review-ready portfolio | Run the checks below; obtain peer feedback, fix blockers, and recheck affected stories. | M3; available reviewer | Jasdeep: verification; peer: reader feedback |
| P1 · M5: approved release | Confirm Definition of Done and publication approval, then configure GitHub Pages and smoke-check deployed paths. | M4 and explicit owner approval | Jasdeep: release decision and deployment |

Optional polish stays below acceptance failures in the backlog. This documentation update implements none of these portfolio milestones and does not authorize publication.

## 2. Technical architecture and tradeoffs

The future portfolio uses static HTML/CSS, with JavaScript only when needed. The current VitePress research site remains a separate documentation tool.

```text
Recruiter / hiring manager browser
              | HTTPS request
              v
        GitHub Pages (static files)
              |
              +-- index.html: reusable navigation and content sections
              |      +-- project cards --> short case-study sections
              |      +-- résumé / GitHub / LinkedIn / approved contact links
              +-- assets/css/styles.css: shared layout and card styles
              +-- assets/images/ and approved résumé PDF
              +-- assets/js/main.js: only if a behavior requires it
```

| Choice | Alternative and tradeoff |
| --- | --- |
| Plain HTML/CSS; no runtime dependencies | Keeping VitePress for the portfolio would reuse the notebook tooling but impose a documentation layout and build step. Plain files suit this small presentation site. |
| One page with short case-study sections | Separate case-study pages allow more detail but duplicate navigation. Split only when content length justifies it. |
| GitHub Pages | A managed application host adds configuration without helping static content. Pages needs correct repository-relative asset paths and cannot process a contact form; use approved links instead. |
| Shared styles and semantic markup | A component framework or template system could reduce repetition at larger scale but adds tooling now. No speculative patterns or dependencies. |

## 3. Code organization and principles

Proposed portfolio files: `index.html`, `assets/css/styles.css`, approved images/résumé under `assets/`, and `assets/js/main.js` only if needed. Keep this future implementation separate from `docs/`; decide its repository before creating files.

- **Single Responsibility:** HTML describes content, CSS controls presentation, and any small JavaScript function handles one behavior. Keep project evidence separate from interaction logic.
- **DRY:** reuse one navigation, consistent section/card markup, shared CSS classes and color/spacing variables. Do not duplicate a case study's full text on its card. Consider templates only if repeated pages become hard to maintain.
- **KISS:** prefer native links and semantic elements. Other SOLID principles address abstractions or object relationships this site does not need; do not invent classes to demonstrate them. Factories, repositories, dependency injection and state-management patterns have no current problem to solve here.

## 4. Proportionate testing

| Level | Local checks | CI boundary |
| --- | --- | --- |
| Unit | No unit suite for static prose or CSS. If JavaScript gains meaningful logic, test its normal and failure cases with Node's built-in test runner. | Run those tests only if such logic/tests exist. No coverage target for markup. |
| Integration / static | Check internal pages, fragments, assets and résumé paths, including the GitHub Pages repository prefix. Review external evidence/profile links manually. | Future portfolio CI should check local targets and required assets; avoid fragile external-network checks on every change. |
| E2E / acceptance | On the served site, follow intro → project → evidence and résumé/contact paths. Check keyboard order/focus, heading order, contrast, alt text, 200% zoom and a 375px viewport. Smoke-check in one Chromium browser and Firefox or Safari. Verify claims/status and inspect public assets for private data. | Manual visual, privacy and evidence review remains required. Add browser automation only if repeated interactive regressions justify it. |

Record date, page/browser or command, actual result and unresolved defects at M4. After a fix, repeat the affected checks; run the full acceptance pass before an approved release. Automated accessibility checks can supplement keyboard/visual review, not establish accessibility alone.

## 5. Quality tools, commands and timing

No new formatting/linting dependencies are justified for this planning edit. Keep consistent Markdown tables/headings; for the future portfolio use consistent indentation, semantic HTML and shared CSS. Use an editor's existing formatter; add a pinned formatter or JavaScript linter only when inconsistent edits or meaningful JavaScript warrant it.

| Context | Command / check | When |
| --- | --- | --- |
| Current documentation | `npm ci` | Fresh checkout or lockfile change; use the existing lockfile. |
| Current documentation | `npm run docs:dev` | While editing; inspect page structure and navigation. |
| Current documentation | `npm run docs:build` | After edits and before review; VitePress checks page links. Check fragment/asset targets separately. |
| Current documentation | `npm run docs:preview -- --port 4174` | Inspect the built site at `/is218-career-portfolio-research/` when visual review is needed. |
| Both repositories | `git diff --check` plus diff/content review | Before review: whitespace, accuracy, status labels and privacy. |
| Future portfolio only | `python3 -m http.server 8000` from its root | Local manual acceptance checks after HTML/CSS changes. No bundler required. |
| Future portfolio, conditional | `node --test` | After adding/changing meaningful JavaScript logic and its tests; also in future CI. |
| Future portfolio | HTML validation, browser accessibility inspection, internal link/asset checks | After structural changes and before release; add a small local-target checker to CI when implementation paths exist. |

The existing GitHub Actions workflow installs dependencies, builds VitePress and deploys on pushes to `main` or manual dispatch. It is not a standalone pull-request validation workflow. Future portfolio CI should validate before deployment, with any release kept behind the owner's publication decision. Do not push or dispatch deployment as part of this planning task.

## 6. Definition of Done, feedback and open questions

**Definition of Done for the future portfolio:** all five story acceptance checks pass; required content and approved links are present; project status and contributions match evidence; local links/assets resolve under the intended Pages path; accessibility/mobile/browser checks pass; no private or unapproved material appears in public files; peer feedback is resolved or explicitly deferred with a reason; actual verification results are recorded. Publication additionally requires owner approval and a successful deployed-path smoke check.

**Peer feedback:** no peer-review record was found in the current repository. At M4, ask a peer to identify the student's focus, locate a contribution and its evidence, and distinguish completed from planned work. Record the date, feedback and resulting change (or reason for deferral); obtain consent before identifying the reviewer publicly. Preserve any supplied review evidence rather than inventing approval.

**Open questions before implementation/release:**

- Which repository and GitHub Pages URL will host the portfolio, separate from this research notebook?
- Which résumé version, LinkedIn URL and professional contact channel are approved for public use?
- Which representative RPS test and contribution evidence can be verified, and are Campus Help/highway statuses still accurate at implementation time?
- Who can provide peer feedback, and what course deadline should determine iteration dates?
