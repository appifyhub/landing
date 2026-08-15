# Milestone 1 Baseline

## Capture plan

The visual baseline must cover `index.html`, `privacy.html`, and `terms.html` at 390 × 844, 768 × 1024, and 1440 × 900. The landing-page capture must also include the responsive navigation open state and the Bootstrap API carousel. Equivalent captures are required after cleanup.

No in-app browser connection was available on 2026-08-14. The project owner approved proceeding from the recorded source baseline and will manually inspect the cleaned pages before approving Milestone 1.

## Source inventory

### Local files and ownership before cleanup

- `css/layout.css` — 903 lines; grid, navbar, display, spacing, and responsive rules mixed with unused Bootstrap-derived navigation families.
- `css/styles.css` — 1,284 lines; design tokens, base elements, buttons, dropdowns, copied component families, utilities, page components, and interaction states.
- `css/aurora.css` — 129 lines; five aurora layers and the `fly` and `flyPlus` keyframes. It has no reduced-motion override.
- `css/policy.css` — 31 lines; policy document spacing and typography, plus a shared `.container` override.
- `js/scripts.js` — shared global initializer for Lucide, Bootstrap collapse events, animated anchor scrolling, smart navigation, scroll-to-top, and Slick.
- `js/cookieconsent-config.js` — CookieConsent module configuration and the `cc--darkmode` runtime class.

### Runtime and third-party state

- Local runtime classes: `opened`, `mobile-menu-open`, `scrolling`, `up`, and `active`.
- Bootstrap runtime classes/attributes: `collapse`, `collapsing`, `show`, `dropdown`, `dropdown-menu`, `data-toggle`, `data-target`, and `aria-expanded`.
- Slick runtime classes are covered by `slick-*`.
- CookieConsent runtime classes are covered by `cc-*`, `cc--*`, `cm__*`, and `pm__*`.
- Landing dependencies: Google Fonts, Font Awesome CSS, Slick CSS/theme, CookieConsent CSS/module, jQuery 3.2.1, Bootstrap 4 JavaScript, Lucide UMD, Slick JavaScript, `scripts.js`, and analytics declarations managed by CookieConsent.
- Policy-page dependencies: Google Fonts, CookieConsent CSS/module, jQuery 3.2.1, Bootstrap 4 JavaScript, Feather, `scripts.js`, and analytics declarations. The jQuery, Bootstrap, Feather, and landing initializer dependencies are cleanup candidates.
- The current PurgeCSS safelist includes CookieConsent, Slick, Font Awesome, navbar, dropdown, badge, collapse, and local runtime-state patterns. Font Awesome is not used by current HTML; policy back arrows use Feather while landing icons use Lucide.

### Inline presentation

- `index.html`: Bootstrap API lead paragraph has `margin-top: 3rem`.
- `privacy.html` and `terms.html`: back-arrow icons have `margin-bottom: -0.3rem` plus inline width and height attributes.

### Known semantics and runtime defects

- The hero's “Explore our projects” action is a `<button>` with an `href`, so the shared anchor-scrolling code cannot read a valid target from it.
- Policy pages call the landing initializer without Lucide or Slick and use Feather markup without calling `feather.replace()`, creating dependency and icon inconsistencies.
- Navigation and dropdown focus styles explicitly remove outlines.
- Policy pages have no explicit main landmark, and their date metadata uses heading elements.
- Every current `target="_blank"` link lacks an explicit `rel="noopener noreferrer"`.
- Local Privacy and Terms links open new tabs even though they are same-site navigation.

## Public outbound-link inventory

These user-facing destinations require live status and canonical-destination verification in Milestone 2 before catalog copy is published:

### Apps and stores

- `https://agent.appifyhub.com`
- `https://github.com/appifyhub/timecrypt`
- `https://play.google.com/store/apps/details?id=com.vaptim.wallpapers`
- `https://play.google.com/store/apps/details?id=me.angrybyte.contactsgenerator`
- `https://picword-vapteam.en.download.it`
- `https://store.appifyhub.com`

### Tools, libraries, and organization destinations

- `https://github.com/appifyhub`
- `https://github.com/appifyhub/monolith`
- `https://github.com/appifyhub/monolith/blob/main/sdk`
- `https://github.com/appifyhub/monolith/tree/main/docker`
- `https://github.com/appifyhub/monolith/issues/new?template=feature_request.md`
- `https://github.com/appifyhub/monolith/discussions`
- `https://api.cloud.appifyhub.com/docs/index.html`
- `https://github.com/appifyhub/code-stats`
- `https://github.com/appifyhub/contacts-generator-android`
- `https://github.com/appifyhub/circular-slider-android`
- `https://github.com/appifyhub/actual-number-picker`
- `https://github.com/appifyhub/goose`
- `https://github.com/appifyhub/silly-android`
- `https://github.com/appifyhub/blinking-image-view`

### Policy references to re-verify during factual legal review

- Google, OpenAI, Anthropic, xAI, Hugging Face, Replicate, RapidAPI, and Gumroad policy destinations.
- European Commission, Swiss FDPIC, CookieYes, and legacy Macromedia/Flash guidance destinations.

Stylesheet, font, script, and analytics-provider URLs are dependency inventory rather than catalog destinations; they must be checked when the owning dependency is retained or removed.

## Cleanup comparison for owner review

The content, section order, palette, typefaces, aurora treatment, responsive breakpoint, dropdown structure, and Bootstrap API carousel remain unchanged. The local CSS footprint was reduced from 2,347 to 1,258 lines by removing verified-unused selectors and consolidating ownership.

Expected visible or behavioral differences are limited to correctness and accessibility fixes:

- Keyboard focus now has a visible teal outline instead of being suppressed on navigation and dropdown items.
- “Show me more” now scrolls to the features section because it is a valid link rather than a button carrying an invalid `href`.
- Dropdown triggers and the scroll-to-top control now expose correct button semantics.
- The scroll-to-top glyph and policy-page back glyph use Lucide rather than Font Awesome or Feather; their meaning and approximate size are preserved.
- Carousel images now expose descriptive alternative text without changing their visible presentation.
- Privacy and Terms remain same-tab local navigation; external new-tab destinations now isolate their opener.
- Reduced-motion users receive static auroras, no decorative button animation, immediate scrolling, and no carousel autoplay.

Automated verification completed:

- `bun run lint` passes for all three HTML pages and all local CSS and JavaScript.
- `bun run report:unused-css` reports zero candidates in every local stylesheet.
- `git diff --check` passes.
- All three pages return HTTP 200 from the local static server.
- Every referenced local asset resolves.

Manual owner inspection remains required for landing navigation and dropdowns at compact and desktop widths, the carousel, scroll-to-top, cookie preferences, policy-page layout, keyboard focus, reduced motion, and the browser console.
