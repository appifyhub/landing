---
trigger: model_decision
description: Use when creating or editing landing page HTML, CSS, or JavaScript sections
globs: *.html,*.css,*.js
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
