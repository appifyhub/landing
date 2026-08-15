## Purpose

Establishes a verified, accessible, and maintainable static-site baseline that preserves the current AppifyHub experience before any visible content or brand evolution begins.

## ADDED Requirements

### Requirement: Cleanup preserves the approved visual baseline
The site SHALL preserve the current visual design, content, responsive layout, and user interactions during the cleanup milestone except for explicitly documented correctness, accessibility, or runtime defect fixes.

#### Scenario: Cleanup comparison before approval
- **WHEN** the cleanup milestone is presented for review
- **THEN** before-and-after browser captures SHALL demonstrate that the existing palette, typography, atmosphere, section hierarchy, and responsive behavior remain recognizably unchanged
- **AND** every intentional visible difference SHALL be identified as a defect fix

### Requirement: Rebranding is blocked until cleanup approval
Content, information-architecture, and visible brand changes SHALL NOT begin until the cleaned implementation has passed its technical checks and received explicit project-owner approval.

#### Scenario: Technical checks pass without owner approval
- **WHEN** lint, runtime, accessibility, responsive, and visual-comparison checks pass
- **AND** explicit project-owner approval has not been recorded
- **THEN** the cleanup milestone SHALL remain incomplete
- **AND** later content and brand tasks SHALL remain blocked

#### Scenario: Owner approves the cleanup baseline
- **WHEN** the project owner reviews the cleaned pages and browser comparison and grants approval
- **THEN** the cleanup milestone SHALL be complete
- **AND** implementation MAY proceed to the content milestone

### Requirement: All pages provide valid and accessible interaction semantics
The site SHALL use valid interactive elements, semantic page landmarks, logical heading structure, keyboard-operable controls, visible focus states, and descriptive accessible names across the landing and policy pages.

#### Scenario: Keyboard-only navigation
- **WHEN** a visitor navigates any page using only a keyboard
- **THEN** every interactive control SHALL be reachable and operable in a logical order
- **AND** the currently focused control SHALL be visibly identifiable

#### Scenario: Link and control semantics
- **WHEN** a visitor or assistive technology encounters an action
- **THEN** navigation actions SHALL use links, button actions SHALL use buttons, and labels SHALL describe the action or destination

### Requirement: Shared scripts and dependencies are page-safe
Every page SHALL load without uncaught console errors, and page-specific behavior or third-party dependencies SHALL execute only where their required markup and libraries exist.

#### Scenario: Policy page load
- **WHEN** `privacy.html` or `terms.html` loads
- **THEN** landing-page-only icon, navigation, scrolling, and carousel behavior SHALL NOT produce runtime errors

#### Scenario: Landing page load
- **WHEN** `index.html` loads with its declared dependencies available
- **THEN** navigation, scrolling, icons, carousel behavior, and cookie preferences SHALL initialize successfully

### Requirement: Motion respects user preferences
The site SHALL preserve content and interaction meaning when the visitor requests reduced motion, while disabling or substantially reducing non-essential ambient animation, autoplay, and smooth scrolling.

#### Scenario: Reduced motion is requested
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** aurora and decorative button animation SHALL stop or become static
- **AND** carousel autoplay and animated scrolling SHALL be disabled or reduced to an immediate state change
- **AND** all content and controls SHALL remain available

### Requirement: Responsive behavior remains supported
The site SHALL remain readable and operable at representative mobile, tablet, and desktop viewport widths without horizontal content loss or inaccessible navigation.

#### Scenario: Representative viewport verification
- **WHEN** each page is reviewed at mobile, tablet, and desktop widths
- **THEN** text SHALL wrap legibly, controls SHALL remain reachable, navigation SHALL remain usable, and layouts SHALL not introduce unintended horizontal scrolling

### Requirement: The site remains directly deployable
The production site SHALL remain usable when served directly from the repository without a compile, bundle, postinstall, or generated-output step.

#### Scenario: Static hosting deployment
- **WHEN** the repository contents are served by GitHub Pages or an equivalent static server
- **THEN** the landing page, policy pages, local styles, local scripts, and assets SHALL work without generated files

