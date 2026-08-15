## 1. Capture the Current Baseline

- [x] 1.1 Record the pre-cleanup source baseline for `index.html`, `privacy.html`, and `terms.html`; the project owner will perform the visual inspection because no browser connection was available.
- [x] 1.2 Record the pre-cleanup interaction, focus, reduced-motion, dependency, and known runtime state from the source; defer rendered interaction and console confirmation to owner inspection.
- [x] 1.3 Inventory local selectors, dynamic runtime classes, inline styles, JavaScript feature dependencies, CDN assets, and the PurgeCSS safelist before removing code.
- [x] 1.4 Record the current public outbound-link inventory and identify which links will need live verification during the content milestone.

## 2. Clean Up HTML Without Rebranding

- [x] 2.1 Correct invalid interactive markup, landmarks, heading structure, accessible names, image alternatives, and link semantics across all three pages without changing the current content hierarchy.
- [x] 2.2 Add consistent safe new-tab behavior to retained external links and preserve same-tab behavior for local navigation.
- [x] 2.3 Move inline presentation declarations into the stylesheet that owns the affected component or policy layout.
- [x] 2.4 Standardize the current icon markup on Lucide-compatible icons while preserving the rendered intent of the landing and policy controls.

## 3. Consolidate the Existing CSS Baseline

- [x] 3.1 Reduce `layout.css` to the grid, container, spacing, display, and responsive primitives actually used by the three pages and current runtime states.
- [x] 3.2 Resolve duplicated and conflicting rules in `styles.css`, remove unused copied component families after manual review, and keep shared tokens and components behaviorally unchanged.
- [x] 3.3 Restrict `policy.css` to policy-document-only presentation and remove rules that duplicate shared base or layout behavior.
- [x] 3.4 Keep `aurora.css` responsible for the existing atmospheric effect and add a static reduced-motion state.
- [x] 3.5 Strengthen Stylelint duplicate-selector and duplicate-property coverage where the cleaned cascade no longer requires exceptions, then fix every newly reported issue in scope.
- [x] 3.6 Update the PurgeCSS configuration so runtime-only classes are intentionally safelisted and the unused-CSS report exposes real review candidates.

## 4. Make Scripts and Dependencies Page-Safe

- [x] 4.1 Replace nested or deprecated document-ready and event-binding patterns in `scripts.js` with one initialization path that guards each feature by required markup and dependency availability.
- [x] 4.2 Make navigation, scrolling, scroll-to-top, icons, and carousel initialization safe on pages that do not contain those features.
- [x] 4.3 Respect reduced-motion preferences in scripted scrolling and carousel autoplay while keeping all controls usable.
- [x] 4.4 Remove jQuery, Bootstrap JavaScript, Slick, and other landing-only dependencies from policy pages, keeping only the dependencies each page uses.
- [x] 4.5 Remove Feather and Font Awesome after their remaining icons have verified Lucide replacements; keep jQuery, Bootstrap JavaScript, and Slick on the landing page through cleanup approval.

## 5. Verify and Approve Milestone 1

- [x] 5.1 Run `bun run lint` and `bun run report:unused-css`, review the complete output, and resolve all in-scope findings without deleting runtime-required styles.
- [x] 5.2 Verify the cleaned site through project-owner browser inspection after automated browser access was unavailable.
- [x] 5.3 Review the cleanup against the baseline and accept the documented correctness and accessibility differences.
- [x] 5.4 Present the cleaned site and comparison for project-owner review, then stop implementation until explicit approval is received.
- [x] 5.5 Record Milestone 1 complete only after explicit project-owner approval; do not begin Section 6 before this task is complete.

## 6. Audit and Classify the Project Catalog

- [x] 6.1 Re-verify every public project, repository, store listing, hosted service, documentation page, and archive destination linked or considered for the new catalog.
- [x] 6.2 Assign each retained project exactly one type (`Apps`, `Developer Tools`, `Libraries`, or `Infrastructure`) and one lifecycle (`Active`, `Maintained`, `Complete`, or `Archived`).
- [x] 6.3 Classify The Agent as current work and the Project Bootstrap API as `Developer Tools` plus `Complete`, with copy that distinguishes availability from active development.
- [x] 6.4 Identify the canonical action for each project—try, use, inspect, contribute, or reference—and remove or explicitly label obsolete destinations.
- [x] 6.5 Present ambiguous lifecycle or support classifications for project-owner confirmation before publishing the catalog copy.

## 7. Implement the New Content Architecture

- [x] 7.1 Replace the hero copy and actions with the neutral hub positioning and durable routes to current work and the full project catalog.
- [x] 7.2 Replace the project dropdown navigation with stable `Active`, `All`, `About`, and `GitHub` routes and an accessible responsive menu.
- [x] 7.3 Build the `Active` section so The Agent can lead while active without becoming AppifyHub's permanent identity.
- [x] 7.4 Add the project-type explanation and full project registry with purpose, audience, type, lifecycle, current action, and canonical destination for each entry.
- [x] 7.5 Add selected history that preserves meaningful older work and evidence of reach without implying current support.
- [x] 7.6 Replace the generic ecosystem FAQ, community claims, and Bootstrap-led sections with accurate project-led scope, contact, contribution, and support guidance.
- [x] 7.7 Update the footer and all AppifyHub-level copy to use consistent `AppifyHub` naming and a neutral voice without a fictional `we` or leading personal `I`.

## 8. Evolve the Visual Presentation

- [x] 8.1 Refine the approved typography scale, spacing rhythm, and section hierarchy using the existing color and typeface custom properties.
- [x] 8.2 Implement the project registry as the signature component, using clear type, lifecycle, action, and hierarchy treatments instead of equal generic cards.
- [x] 8.3 Evolve navigation, current-work, selected-history, about, and footer components within the existing dark green, atmospheric AppifyHub design language.
- [x] 8.4 Retain and refine only motion that supports hierarchy or interaction, with equivalent static and reduced-motion states.
- [x] 8.5 Verify the evolved components at mobile, tablet, and desktop widths and correct wrapping, alignment, density, contrast, and focus regressions.
- [x] 8.6 Remove the obsolete Bootstrap showcase carousel and project-dropdown code, then remove jQuery, Bootstrap JavaScript, Slick, and any orphaned styles or assets only after browser verification confirms they are unused.

## 9. Align Metadata, Policies, and Repository Documentation

- [x] 9.1 Update landing and policy page titles, descriptions, and relevant metadata to match the approved AppifyHub positioning and each page's purpose.
- [x] 9.2 Retain the current policy content without further audit by project-owner direction.
- [x] 9.3 Make no policy-page changes by project-owner direction.
- [x] 9.4 Expand `README.md` with the site's purpose, published URL, direct-edit architecture, key files, Bun/npm verification commands, and no-build GitHub Pages deployment model.
- [x] 9.5 Skip the project-status maintenance rule by project-owner direction.

## 10. GitHub Organization

- [x] 10.1 Skip GitHub organization metadata and profile changes by project-owner direction.

## 11. Complete Final Verification

- [x] 11.1 Run `bun run lint` and `bun run report:unused-css` and resolve every in-scope error or reviewed candidate.
- [x] 11.2 Verify all three pages at mobile, tablet, and desktop widths with keyboard navigation, visible focus, reduced motion, cookie preferences, and a clean browser console.
- [x] 11.3 Recheck all retained outbound links, canonical actions, lifecycle labels, support expectations, and safe new-tab behavior.
- [x] 11.4 Compare the final site with the approved cleanup baseline and confirm it remains recognizably AppifyHub while satisfying the new hierarchy and catalog requirements.
- [x] 11.5 Present the completed local and approved public-surface changes for final project-owner review.
