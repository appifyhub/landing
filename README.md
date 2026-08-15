# AppifyHub's landing page

This repository contains the source for the AppifyHub landing page published at [www.appifyhub.com](https://www.appifyhub.com).

## Project structure

The site uses vanilla HTML, CSS, and JavaScript. Files are edited directly; there is no production build step or generated output directory.

- `index.html` contains the landing page and project catalog.
- `privacy.html` and `terms.html` contain the policy pages.
- `css/` contains the shared, landing, atmospheric, and policy styles.
- `js/` contains the site interactions and cookie-consent configuration.
- `img/` contains the images used by the website.
- `graphics/` contains editable graphics, fonts, and other visual source files.

## Local verification

Install the development dependencies with `bun install`, then run:

```sh
bun run lint
bun run report:unused-css
```

The npm fallback uses the same commands with `npm run`.

## Deployment

GitHub Pages serves the repository contents directly using the domain configured in `CNAME`. Deployment does not compile, bundle, or rewrite the site.
