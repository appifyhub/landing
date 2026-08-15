## Purpose

Defines a clear, durable catalog for AppifyHub projects so visitors can understand what each project is, whether it is active, and what they can do with it now.

## ADDED Requirements

### Requirement: Projects use independent type and lifecycle classifications
Every listed project SHALL have one project type and one lifecycle status so that subject matter and support expectations are communicated independently.

Project types SHALL be `Apps`, `Developer Tools`, `Libraries`, or `Infrastructure`. Lifecycle statuses SHALL be `Active`, `Maintained`, `Complete`, or `Archived`.

#### Scenario: Project is added to the catalog
- **WHEN** a project is published in the AppifyHub catalog
- **THEN** it SHALL be assigned exactly one project type
- **AND** it SHALL be assigned exactly one lifecycle status

### Requirement: Lifecycle labels set clear expectations
Lifecycle labels SHALL have stable meanings: `Active` for work receiving active attention, `Maintained` for supported work without active expansion, `Complete` for work that reached a useful or successful endpoint, and `Archived` for abandoned, incomplete, obsolete, or reference-only work.

#### Scenario: Visitor reviews a non-active project
- **WHEN** a visitor views a `Maintained`, `Complete`, or `Archived` project
- **THEN** its label and supporting copy SHALL NOT imply active feature development
- **AND** any remaining availability or support path SHALL be stated accurately

### Requirement: Every project entry provides actionable context
Each project entry SHALL identify what the project does, who it is for, its lifecycle status, the useful action currently available, and its canonical destination.

#### Scenario: Visitor evaluates a project
- **WHEN** a visitor reads a project entry
- **THEN** the visitor SHALL be able to distinguish whether to try, use, inspect, contribute to, or merely reference the project
- **AND** the primary action SHALL lead to the canonical available destination

### Requirement: Current work receives temporary prominence
Projects in `Active` MAY receive stronger homepage prominence, but the page structure and AppifyHub positioning SHALL NOT depend on any one project remaining active.

#### Scenario: Active project changes status
- **WHEN** the most prominent current project moves from `Active` to another lifecycle state
- **THEN** its status and placement SHALL be updateable without changing the AppifyHub positioning, core navigation, or project taxonomy

### Requirement: Project Bootstrap API is presented as complete
The Project Bootstrap API SHALL be classified as `Developer Tools` and `Complete` while it remains running and available but is not under active development.

#### Scenario: Visitor finds the Bootstrap API
- **WHEN** the Project Bootstrap API appears in the catalog
- **THEN** it SHALL be labeled `Complete`
- **AND** the copy SHALL distinguish continued availability from active feature development
- **AND** it SHALL NOT serve as the primary AppifyHub homepage narrative

#### Scenario: Bootstrap API is later sunset
- **WHEN** the running service is discontinued
- **THEN** its lifecycle status SHALL change to `Archived`
- **AND** any retained documentation, migration guidance, source archive, or replacement SHALL be linked accurately

### Requirement: Historical work remains discoverable without false support claims
Notable complete and archived projects SHALL remain discoverable when they provide useful software, reference value, or credible project history, but SHALL NOT be presented as equally supported current offerings.

#### Scenario: Historical project is featured
- **WHEN** a complete or archived project is included as selected history
- **THEN** its historical significance MAY be described
- **AND** its current lifecycle and support expectations SHALL remain visible

### Requirement: Visitors can browse the whole catalog
The project index SHALL allow visitors to understand or browse projects by type while keeping lifecycle status visible for every result.

#### Scenario: Visitor browses a project type
- **WHEN** a visitor views apps, developer tools, libraries, or infrastructure
- **THEN** matching projects SHALL remain distinguishable by lifecycle status
- **AND** active and historical projects SHALL not be presented with equal implied support
