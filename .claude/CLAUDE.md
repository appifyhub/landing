# Project Rules — AppifyHub Landing Page

> General code style and behavioral rules are in `~/.claude/CLAUDE.md`.

## Code Style

### JavaScript/TypeScript

In JavaScript and TypeScript, use types as much as possible: strict mode will be turned on! If in doubt, follow Java standard formatting. Finally, we also always want trailing commas in multi-line code blocks.

## Stack

No build tools — edit HTML, CSS, and JS files directly. No package.json, no npm, no compilation step.
jQuery and Bootstrap are loaded via CDN — never add a package manager or build system.

## Development Workflow

- Edit source files directly; open `index.html` in a browser to preview locally
- No linting tools configured — follow code style rules manually
- Commit and push to the main branch to deploy (GitHub Pages, www.appifyhub.com via CNAME)

## Project Structure

- `index.html`, `privacy.html`, `terms.html` — all pages
- `css/` — `layout.css`, `styles.css`, `aurora.css`, `policy.css`
- `js/` — `scripts.js` (navigation, animations), `cookieconsent-config.js` (ES6 module)
- `img/` — images and favicon assets
- `graphics/` — Affinity Designer/Photo source files; do not edit these as code

## Design System

Always use the CSS custom properties defined in `css/styles.css` — never hardcode color values or fonts:
- Colors: `--dark-green`, `--dark-slate-gray`, `--pine-green`, `--mint`, `--teal`, `--light`, `--dark`
- Typography: `--typeface-title` (Lexend), `--typeface-text` (Noto Sans), `--typeface-mono` (Cousine)
