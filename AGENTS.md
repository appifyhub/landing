## Code Style

### JavaScript/TypeScript

In JavaScript and TypeScript, use types as much as possible: strict mode will be turned on! If in doubt, follow Java standard formatting. Finally, we also always want trailing commas in multi-line code blocks.

---

## MANDATORY PROJECT RULES

### Stack

- No build tools — edit HTML, CSS, and JS files directly
- No package.json, no npm, no compilation or bundling step
- jQuery and Bootstrap loaded via CDN — never add a package manager or build system
- GitHub Pages deployment: commit and push to deploy (www.appifyhub.com via CNAME)

### Development Workflow

- Edit source files directly; open `index.html` in a browser to preview locally
- No linting tools configured — follow code style rules manually
- Commit and push to the main branch to trigger GitHub Pages deployment

### Project Structure

- `index.html`, `privacy.html`, `terms.html` — all pages
- `css/` — stylesheets: `layout.css`, `styles.css`, `aurora.css`, `policy.css`
- `js/` — `scripts.js` (navigation, animations), `cookieconsent-config.js` (ES6 module)
- `img/` — images and favicon assets
- `graphics/` — Affinity Designer/Photo source files; do not edit these as code

### Design System

Always use the CSS custom properties defined in `css/styles.css` — never hardcode color values or fonts:
- Colors: `--dark-green`, `--dark-slate-gray`, `--pine-green`, `--mint`, `--teal`, `--light`, `--dark`
- Typography: `--typeface-title` (Lexend), `--typeface-text` (Noto Sans), `--typeface-mono` (Cousine)
