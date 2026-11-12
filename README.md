# Career & Portfolio Lab

A four-page VitePress site for NJIT IS218.

Expected public site after deployment: [Career & Portfolio Lab](https://jasdeepn24.github.io/is218-career-portfolio-research/).

In the repository, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**. The workflow runs on pushes to `main` and can also be started from the **Actions** tab.

Requires Node.js 22 or newer. Run from this folder:

```sh
npm ci
npm run docs:build
npm run docs:preview -- --port 4174
```

Open `/is218-career-portfolio-research/` on the local server. For editing with live reload: `npm run docs:dev -- --port 5174`.

Content is in `docs/`. The raw transcript, grades, and personal career reflection are excluded. `noindex` is a crawler preference, not access control; do not put private material into the site. No private reflection was generated or stored.
