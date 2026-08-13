## Code Style

### HTML, CSS, and JavaScript

Use clear, idiomatic vanilla HTML, CSS, and JavaScript. Edit `index.html`, `privacy.html`, `terms.html`, `css/`, and `js/` directly. jQuery and Bootstrap are loaded by CDN; do not introduce a frontend framework, bundler, Sass pipeline, or generated output directory.

### Comments

- For new code, avoid comments unless the logic is genuinely complex or the block is long
- When editing existing code, prefer updating comments over deleting them
- Comments should start with a lowercase letter, except in documentation or where grammar requires it

---

## MANDATORY PROJECT RULES

### Stack

- Vanilla HTML, CSS, and JavaScript — no frontend framework and no build step
- Edit `index.html`, `privacy.html`, `terms.html`, `css/`, and `js/` directly
- jQuery, Bootstrap, Lucide, Slick, and supporting libraries are loaded from CDN or checked-in assets
- Use Node/Bun only for local tooling: linting, unused-CSS reports, version bumps, and PR helper scripts
- Do not add bundlers, Sass compilation, generated `dist/`, or framework conventions
- GitHub Pages deploys the repository contents directly for `www.appifyhub.com` via `CNAME`

### Environment Management

- Use `bun` as the primary package manager and task runner
- Keep `package-lock.json` in sync as the npm fallback lockfile
- Prefer `bun run <script>` for local commands; `npm run <script>` should work as the backup path
- Do not add a build or postinstall step; package tooling must not rewrite the static site output

### Development Workflow

- `bun run lint` — run HTML, CSS, and JavaScript lint checks in parallel
- `bun run lint:html` — lint `*.html` with HTMLHint
- `bun run lint:css` — lint `css/**/*.css` with Stylelint
- `bun run lint:js` — lint `js/**/*.js` with ESLint
- `bun run report:unused-css` — report rejected CSS selectors with PurgeCSS; review before deleting anything
- `bun run bump {major|minor|patch}` — bump `package.json` and sync Bun/npm lockfiles
- `bun run create_pr` — create or link the GitHub pull request using the existing branch flow
- For behavior changes, verify the edited page in a browser and check the console for runtime errors
- For visual changes, inspect the relevant viewport and keep the existing responsive behavior intact

### Project Structure

- `index.html` — main landing page
- `privacy.html`, `terms.html` — policy pages
- `css/` — stylesheets: `layout.css`, `styles.css`, `aurora.css`, `policy.css`
- `js/scripts.js` — jQuery-driven navigation, scrolling, carousel, and animation behavior
- `js/cookieconsent-config.js` — cookie consent ES module
- `img/` — image and favicon assets used by the site
- `graphics/` — Affinity Designer/Photo sources and typefaces; do not edit these as code
- `scripts/` — Bun TypeScript helper scripts for release/version workflow
- `CNAME` — GitHub Pages custom domain

### Design System

Always use the CSS custom properties defined in `css/styles.css`; do not hardcode new brand colors or fonts unless intentionally expanding the design system:

- Colors: `--dark-green`, `--dark-slate-gray`, `--pine-green`, `--mint`, `--teal`, `--light`, `--dark`, plus the existing dimmed/highlight aliases
- Typography: `--typeface-title` (Lexend), `--typeface-text` (Noto Sans), `--typeface-mono` (Cousine)

### RTK - Rust Token Killer

- Use RTK for shell-command output reduction when running commands directly
- Use `rtk gain`, `rtk gain --history`, `rtk discover`, and `rtk proxy <cmd>` directly for RTK meta operations
- Prefer `rtk <cmd>` for shell commands with potentially large output when the environment does not rewrite commands automatically


---

# Component Guidelines

## HTML, CSS, and JavaScript sections

### Naming and structure

- Use generic, reusable class and function names when behavior or styling is shared
- Keep section-specific names only when the section is genuinely unique to the landing page
- Avoid introducing React-style component props, interfaces, TypeScript-only patterns, or framework conventions in this direct-edit project
- Keep HTML structure, CSS selectors, and JS behavior aligned by naming the same concept consistently
- Before renaming a class, anchor, or ID, search all HTML, CSS, and JS files for every matching reference

### Copy and content

- User-facing copy lives directly in HTML or JavaScript in this project
- Keep repeated labels and calls to action consistent across the page
- Do not introduce placeholder copy or generic SaaS filler
- Preserve existing product terms and AppifyHub brand language unless the task explicitly asks for copy changes

### When changing existing page sections

1. Update the relevant HTML section in `index.html`, `privacy.html`, or `terms.html`
2. Update matching styles in `css/`
3. Update JavaScript in `js/scripts.js` or `js/cookieconsent-config.js` only when behavior changes
4. Run `bun run lint` after code changes
5. Verify the page in a browser; linting does not prove browser behavior or visual correctness
