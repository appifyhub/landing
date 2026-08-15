## Purpose

Defines AppifyHub's neutral public identity, homepage hierarchy, navigation, and visual continuity without tying the hub to a company posture, a personal profile, or one permanent flagship.

## ADDED Requirements

### Requirement: AppifyHub has a project-independent positioning
The site SHALL position AppifyHub as a hub for open-source apps and the tools behind them, rather than as the Project Bootstrap API, The Agent, a company, a studio, or a formal community.

#### Scenario: Visitor encounters the homepage introduction
- **WHEN** a visitor reads the hero and introductory content
- **THEN** the visitor SHALL understand that AppifyHub collects open-source apps, developer tools, libraries, and infrastructure
- **AND** no individual project SHALL be described as the permanent identity of AppifyHub

### Requirement: Public copy uses a neutral project-led voice
AppifyHub-level copy SHALL avoid a fictional organizational `we` and SHALL NOT lead with a personal `I`. Individual authors and collaborators MAY be credited where relevant to a project.

#### Scenario: AppifyHub-level copy is written
- **WHEN** navigation, hero, section, FAQ, footer, or metadata copy refers to AppifyHub
- **THEN** the language SHALL remain neutral and project-led
- **AND** it SHALL NOT imply a larger organization or standing community

#### Scenario: Collaboration credit is relevant
- **WHEN** a project's authorship or collaboration materially helps visitors understand or credit the work
- **THEN** the relevant people MAY be credited within that project's context without turning the homepage into a personal profile

### Requirement: Homepage hierarchy explains the hub before individual projects
The homepage SHALL present a hub introduction, current work, the kinds of work collected, a project index, selected history, scope/contact information, and legal links in a coherent hierarchy.

#### Scenario: First-time homepage visit
- **WHEN** a visitor scans the homepage from top to bottom
- **THEN** the visitor SHALL first understand AppifyHub's purpose
- **AND** then discover current work and the broader catalog
- **AND** finally find historical, contact, and legal context

### Requirement: Primary routes remain durable
The primary homepage actions and top-level navigation SHALL lead to stable hub-level destinations rather than making a current product a permanent navigation category.

#### Scenario: Visitor uses primary navigation
- **WHEN** a visitor uses the main navigation or hero actions
- **THEN** durable routes such as current work, all projects, about, and GitHub SHALL remain available
- **AND** a current product MAY receive a prominent contextual action without becoming a permanent top-level identity

### Requirement: Claims remain specific and supportable
AppifyHub-level copy SHALL NOT claim that every project is production-ready, actively supported, community-driven, or otherwise uniform when project states differ.

#### Scenario: Portfolio-level claim is displayed
- **WHEN** the site makes a claim across multiple projects
- **THEN** the claim SHALL be true for every project in that scope
- **OR** the copy SHALL narrow the claim to the projects for which it is true

### Requirement: Brand naming is consistent
The public brand name SHALL be written as `AppifyHub` except where a legal entity name or verbatim third-party reference requires another form.

#### Scenario: Brand name appears on a public surface
- **WHEN** the brand name appears in page copy, metadata, navigation, footer, repository documentation, or organization profile content
- **THEN** it SHALL use `AppifyHub` consistently unless legal accuracy requires otherwise

### Requirement: The existing visual identity evolves rather than resets
The redesigned content hierarchy SHALL retain the recognizable dark green palette, existing typefaces, atmospheric depth, and overall AppifyHub character while refining layout, components, and motion to serve the new content.

#### Scenario: Rebranded page is compared with the current site
- **WHEN** the final homepage is reviewed against the pre-change site
- **THEN** it SHALL be recognizable as an evolution of AppifyHub
- **AND** hierarchy and components MAY change substantially without introducing an unrelated replacement design system

### Requirement: Motion supports hierarchy and access
Visible motion in the evolved design SHALL reinforce hierarchy or interaction and SHALL not obscure content, compete with project information, or override reduced-motion preferences.

#### Scenario: Motion is included in the evolved design
- **WHEN** an ambient or interactive animation is retained or introduced
- **THEN** its purpose SHALL be identifiable from the content or interaction it supports
- **AND** an accessible reduced-motion state SHALL exist
