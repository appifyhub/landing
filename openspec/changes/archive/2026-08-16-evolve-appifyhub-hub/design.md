## Context

See `proposal.md` for motivation and `specs/` for the behavioral contract.

The site is deployed directly from the repository through GitHub Pages. It consists of three hand-authored HTML pages, four local stylesheets, two local JavaScript files, image assets, and CDN-loaded libraries. There is no build step and none may be introduced.

The current implementation combines a locally copied subset of Bootstrap-like layout and component rules with bespoke AppifyHub styling. `layout.css` and `styles.css` contain duplicated and conflicting selectors, broad unused component fragments, and legacy vendor prefixes. `scripts.js` combines global initialization with landing-only navigation, scroll, and carousel behavior, while policy pages load it without the landing dependencies it assumes. The current lint configuration passes but deliberately disables several rules that would expose this structural debt.

The visible design is liked and must be treated as the baseline: dark green and black palette, Lexend/Noto Sans/Cousine typography, aurora atmosphere, angled section transitions, and restrained luminous accents. The content hierarchy and project presentation may change substantially after cleanup approval.

This repository's README is a placeholder.

## Goals / Non-Goals

**Goals:**

- Deliver the full change in explicit stages, with cleanup approval blocking visible rebranding.
- Make each stylesheet and script have a clear, narrow ownership boundary.
- Preserve direct static deployment and the current visual identity.
- Make project type and lifecycle status first-class, independent information.
- Let current work receive prominence without becoming AppifyHub's permanent identity.
- Make the site, metadata, and repository README tell the same truthful story.
- Provide repeatable lint, browser, responsive, accessibility, motion, and link verification.

**Non-Goals:**

- Introducing a framework, bundler, template engine, Sass pipeline, CMS, generated site, build output, or postinstall transformation.
- Automatically sourcing the catalog from GitHub or creating a data abstraction for a single static page.
- Redesigning The Agent or other project-specific websites.
- Deciding to shut down the Project Bootstrap API; this change labels its current state as complete.
- Rewriting or auditing legal rights, obligations, product references, providers, or data flows in the policy pages.
- Mutating GitHub organization metadata or creating/updating a remote organization profile.

## Decisions

### 1. One OpenSpec change, delivered through gated milestones

The work will remain one complete change so positioning, requirements, design, and final public alignment do not drift across disconnected proposals. Tasks will nevertheless be grouped into cleanup, content architecture, visual evolution, and public alignment. A hard approval checkpoint ends cleanup; no later milestone starts before approval.

Alternative considered: separate cleanup and rebrand changes. This would isolate diffs but would also separate the technical decisions from the content they are preparing for, despite the user explicitly requesting a full proposal. The approval gate provides the needed isolation inside one change.

### 2. Preserve the direct-edit static architecture

HTML content remains in `index.html`, `privacy.html`, and `terms.html`. Project entries remain authored in HTML because there is one consumer and no dynamic data source. JavaScript is used only for real interaction, not for rendering static catalog content.

Alternative considered: a template system or JavaScript project-data file. Both would reduce some textual repetition but introduce a build or runtime abstraction that is not justified for three static pages.

### 3. Consolidate CSS by responsibility, not by page section

The existing stylesheet set remains, with explicit ownership:

- `layout.css`: box sizing, containers, grid primitives, spacing/display utilities, and responsive layout behavior actually used by the pages.
- `styles.css`: design tokens, base typography/elements, navigation, buttons, shared components, project registry, footer, and interaction states.
- `aurora.css`: aurora presentation, animation, and reduced-motion state.
- `policy.css`: policy-document layout and only the overrides unique to the policy pages.

The cleanup will remove exact duplicate blocks, resolve cascade conflicts, and delete unused copied component families only after selector usage and dynamic runtime states are checked. Existing utility-like class names may remain when they are genuinely shared; new rebrand sections will receive semantic, reusable names rather than another copied framework layer.

Alternative considered: more files per component or section. At the current scale, that would fragment a small static site and make ownership harder rather than clearer.

### 4. Keep one guarded site initializer through cleanup, then remove obsolete libraries

`scripts.js` will use one initialization path and guard each feature by both markup and dependency availability. Policy pages will no longer load jQuery, Bootstrap, or Slick merely because the landing script assumes them. Lucide will become the single icon system.

During cleanup, the current dropdowns and Slick carousel remain so the baseline can be compared. After approval, the new durable navigation and removal of the Bootstrap showcase eliminate the dropdown and carousel requirements. At that point jQuery, Bootstrap JavaScript, Slick, and Font Awesome can be removed if no verified behavior still depends on them. Cookie consent remains an independent ES module.

Alternative considered: immediately rewriting all interactions in vanilla JavaScript during cleanup. That increases baseline risk and spends effort on the carousel and dropdown structure that the approved content architecture removes in the next milestone.

### 5. Use a static project registry as the signature content component

The main distinctive component will be a project registry rather than a generic grid of identical marketing cards. Each entry presents project name, concise purpose, type, lifecycle status, available action, and canonical destination. Current work can use more space, while maintained, complete, and archived work remains compact and explicit.

This component uses the existing visual language: strong Lexend titles, Cousine utility/status treatment, dark green surfaces, luminous accents, and atmospheric depth. The aurora remains a recognizable framing device but no longer carries the entire visual identity. Type and status encode real information; numbering and decorative network diagrams will not be introduced without a truthful content relationship.

Alternative considered: a product-card grid. Equal cards would imply equal importance and support, repeating the current strategic problem.

### 6. Use stable hub-level navigation and contextual product actions

Top-level navigation targets stable concepts such as `Active`, `All`, `About`, and `GitHub`. The Agent may receive the strongest current-work action inside the page but not a permanent global navigation category. The homepage sequence follows the presentation spec and remains useful when current projects change status.

Alternative considered: keeping project-category dropdowns. They behave like a repository directory, give historical projects excessive prominence, and rely on heavier interaction code.

### 7. Treat project status as curated editorial data

Project type and lifecycle will be assigned during a link and repository audit and stored directly in the project entry copy. This avoids false precision from commit dates alone: a finished project can be complete even without recent commits, and a live service can be complete without being actively expanded.

The Project Bootstrap API starts as `Developer Tools` plus `Complete`. The Agent starts as `Active` for this change but can move without changing the site structure.

Alternative considered: deriving status automatically from GitHub activity. Commit recency cannot distinguish stable completion, maintenance, or abandonment and would misrepresent the portfolio.

### 8. Evolve the current design system instead of replacing it

Existing color and typography custom properties remain the source of truth. The new hierarchy can adjust scale, spacing, component composition, and motion, but new brand colors or typefaces will not be introduced unless a demonstrated content need cannot be met by the existing system. Visual QA will compare recognizable continuity as well as correctness.

Alternative considered: a wholesale rebrand. It is not requested and would discard a visual identity the owner already values.

## Risks / Trade-offs

- [A full change can produce a large diff] → Keep milestone boundaries explicit, verify each stage independently, and block later work until the cleanup baseline is approved.
- [CSS pruning can remove runtime-only states] → Keep a reviewed safelist for cookie consent, navigation, and any retained third-party widgets; exercise interactive states in the browser before deletion.
- [Lint success can be mistaken for visual correctness] → Require browser captures, responsive checks, keyboard checks, reduced-motion checks, and console inspection in addition to lint.
- [Visual continuity is partly subjective] → Capture the existing site at agreed representative viewports before cleanup and compare again at cleanup and final design review.
- [Project status can become stale] → Keep lifecycle status visible beside every project so changes remain straightforward to review in the catalog itself.
- [A canonical destination may be unavailable or obsolete] → Verify links during implementation and either replace, explicitly label as archival, or remove them.
- [Remote GitHub edits are harder to review and undo than local files] → Present exact proposed values, require explicit approval, record previous values, and apply the smallest possible mutation.
- [Removing jQuery/Bootstrap/Slick after cleanup can introduce new navigation regressions] → Remove them only after the replacement interactions are browser-verified and no retained markup depends on them.

## Migration Plan

1. Capture the current pages and interaction behavior at representative mobile, tablet, and desktop viewports; record current console output and dependency usage.
2. Complete structural HTML/CSS/JavaScript cleanup without rebranding, then run lint, meaningful unused-CSS analysis, link checks, keyboard checks, reduced-motion checks, console inspection, and before/after browser comparison.
3. Stop and obtain explicit project-owner approval of the cleanup baseline. If approval is withheld, revise only the cleanup until accepted.
4. Audit projects and outbound destinations, assign type and lifecycle, and replace the homepage content hierarchy and copy while retaining the approved visual foundation.
5. Evolve components and visual hierarchy around the project registry, then remove dependencies made obsolete by the new content and navigation.
6. Align metadata and the landing repository README; complete final cross-page browser and accessibility verification.
There is no data migration. Local rollback is a revert of the affected static files or the relevant milestone commit.
