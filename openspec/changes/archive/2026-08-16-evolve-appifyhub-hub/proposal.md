## Why

The landing site currently presents the Project Bootstrap API as its deepest product story, describes a mixed active and archived portfolio as one uniformly supported community ecosystem, and carries duplicated frontend code that makes the next content change unnecessarily risky. AppifyHub needs a durable, clear identity as a hub for open-source apps and the tools behind them, supported by a clean static-site foundation that can evolve as individual projects become active, complete, or archived.

## What Changes

- Clean up the existing HTML, CSS, and JavaScript before visible rebranding: remove duplication and conflicts, correct invalid or inaccessible markup, isolate page-specific behavior and dependencies, and retain the current rendered design and behavior.
- Make project-owner review and approval of the cleanup and browser comparison a hard gate before content or visual changes begin.
- Reposition AppifyHub as a neutral, project-led hub for open-source apps and the tools behind them, without presenting it as a company, studio, formal community, personal profile, or permanent flagship-product brand.
- Organize projects independently by type (`Apps`, `Developer Tools`, `Libraries`, `Infrastructure`) and lifecycle (`Active`, `Maintained`, `Complete`, `Archived`).
- Present The Agent prominently only while it is active, and present the still-running Project Bootstrap API as `Complete` rather than as the main service or an actively developed product.
- Replace the current repository-directory navigation and Bootstrap-led homepage narrative with a clear hub introduction, current work, project types, project index, selected history, scope/contact, and legal information.
- Evolve the existing dark green visual language, typography, atmosphere, and recognizable character around the new hierarchy rather than replacing the design system.
- Audit outbound destinations and remove unsupported claims; ensure project status, support expectations, actions, and canonical links are accurate.
- Align page metadata with the approved positioning.
- Replace this repository's placeholder README with accurate project and verification guidance.
- Preserve the direct-edit, build-free vanilla HTML/CSS/JavaScript architecture and GitHub Pages deployment model.

## Capabilities

### New Capabilities

- `site-quality-baseline`: Defines the preserved visual baseline, semantic and accessible interaction behavior, dependency boundaries, responsive and reduced-motion behavior, runtime quality, verification, and approval gate required before rebranding.
- `project-catalog`: Defines project types, lifecycle states, project-entry information, current-work prominence, historical presentation, and the status of the Project Bootstrap API.
- `appifyhub-presentation`: Defines the neutral AppifyHub positioning, content hierarchy, navigation, voice, and evolution of the existing visual identity.
- `public-surface-alignment`: Defines consistent metadata, repository documentation, outbound destinations, and status claims across the public surfaces in scope.

### Modified Capabilities

None. This repository has no existing OpenSpec capability specifications.

## Impact

- Affects `index.html`, `privacy.html`, `terms.html`, `css/`, `js/`, `README.md`, and supporting lint/unused-CSS configuration where required.
- Removes or consolidates unused and duplicated local styles and page-inappropriate script dependencies; CDN dependencies may be removed only when no longer used.
- Changes homepage information architecture, navigation labels, user-facing copy, project prominence, project status labels, metadata, and some outbound links.
- Preserves the existing static stack: no framework, bundler, Sass pipeline, generated output directory, build step, or postinstall rewrite.
- Requires browser verification across the three pages and representative mobile, tablet, and desktop viewports, with explicit approval before moving beyond the cleanup milestone.
