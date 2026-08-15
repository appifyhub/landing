## Purpose

Keeps the website, outbound destinations, and repository documentation aligned with the same accurate AppifyHub scope and project statuses.

## ADDED Requirements

### Requirement: Page metadata reflects the current positioning
The landing and policy pages SHALL use titles, descriptions, and relevant metadata that accurately describe AppifyHub and the purpose of each page.

#### Scenario: Landing page is indexed or shared
- **WHEN** a search engine, browser, or sharing service reads the landing page metadata
- **THEN** it SHALL describe AppifyHub as a hub for open-source apps and the tools behind them
- **AND** it SHALL NOT center the Project Bootstrap API or repeat unsupported ecosystem claims

### Requirement: Outbound links are accurate and safe
Public outbound links SHALL use the canonical available destination, accurately describe what the visitor will find, and use safe new-tab behavior when opening a new browsing context.

#### Scenario: Outbound destination is audited
- **WHEN** an outbound project, store, documentation, social, or policy link is retained
- **THEN** its destination SHALL be reachable or intentionally archival
- **AND** its label SHALL match the destination's current role
- **AND** new-tab links SHALL prevent opener access

### Requirement: Project status claims are consistent across in-scope surfaces
Project lifecycle and support claims SHALL not conflict between the landing page and linked AppifyHub documentation in this repository.

#### Scenario: Project appears on multiple in-scope surfaces
- **WHEN** the same project is mentioned on more than one in-scope surface
- **THEN** its lifecycle status and support expectation SHALL be materially consistent

### Requirement: Landing repository README supports contributors
The landing repository README SHALL explain the repository's purpose, direct-edit static architecture, key files, local verification commands, and relationship to the published AppifyHub site.

#### Scenario: Contributor opens the repository README
- **WHEN** a contributor reads `README.md`
- **THEN** the contributor SHALL understand where the public site is hosted, where to edit HTML/CSS/JavaScript, how to run lint and unused-CSS reporting, and that no production build step exists
