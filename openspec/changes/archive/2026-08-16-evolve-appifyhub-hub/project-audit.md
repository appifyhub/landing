# Project Catalog Audit

Verified on 2026-08-14 using the public sites, store listings, GitHub repository metadata, and repository READMEs.

The GitHub organization API returned 16 public repositories: nine archived and seven non-archived. Every repository is accounted for below. Private repositories were not inspected and are not relevant to the public catalog.

## Recommended catalog

| Project | Type | Lifecycle | Primary action | Canonical destination | Evidence and treatment |
| --- | --- | --- | --- | --- | --- |
| The Agent | Apps | Active | Check it out | `https://agent.appifyhub.com` | Live product and actively updated backend, web, and landing repositories. Present as current work, not as AppifyHub's permanent identity. |
| Material Wallpapers: Infinite | Apps | Complete | Use | Google Play listing | Still installable with 100K+ downloads; last store update was February 2017. Treat as finished and available, with no active-development implication. |
| Lorem Contacts | Apps | Complete | View source | `https://github.com/appifyhub/contacts-generator-android` | Reached 1K+ Google Play installs before concluding. The archived source is now the primary catalog destination. |
| Timecrypt | Apps | Complete | View source | `https://github.com/appifyhub/timecrypt` | The project concluded with a clear successor in Bitwarden Send. Its archived source is the primary historical destination. |
| Picword | Apps | Complete | View listing | Third-party Download.it listing | Publicly released and concluded. The external listing is the only known remaining destination and should be labeled accordingly. |
| Bootstrap API | Developer Tools | Complete | Check SDKs | `https://github.com/appifyhub/monolith/tree/main/sdk` | SDKs and source remain available; the hosted service is still running, but active feature work is not claimed. |
| Code Stats | Developer Tools | Archived | View source | `https://github.com/appifyhub/code-stats` | Repository is archived. Retain only as project history/reference. |
| Actual Number Picker | Libraries | Archived | View source | GitHub repository | Repository is archived and installation guidance depends on legacy Android/JCenter conventions. |
| Circular Slider | Libraries | Archived | View source | GitHub repository | Repository is archived and targets legacy Android tooling. |
| Silly Android | Libraries | Archived | View source | GitHub repository | Repository is archived and references discontinued distribution/build services. |
| Blinking Image View | Libraries | Archived | View source | GitHub repository | Repository is archived and references legacy Android/JCenter conventions. |
| Goose: Link Previews | Libraries | Archived | View source | GitHub repository | Archived fork of the original Goose extractor. |
| Terraform | Infrastructure | Maintained | Inspect | `https://github.com/appifyhub/terraform` | Public, non-archived infrastructure foundation updated in 2026; explicitly a starting point rather than production-ready configuration. |
| Helm | Infrastructure | Maintained | Use | `https://charts.appifyhub.com` | Public, non-archived Helm repository updated in 2026 and used by current services; documentation explicitly limits production expectations. |

## Aggregation and exclusions

- The Agent's backend, web app, and landing repositories are one public project entry, with source links available contextually.
- Lorem Contacts and `contacts-generator-android` are one project entry; the archived repository is the primary destination and the Play listing remains historical evidence of reach.
- The `landing` repository is the implementation of this site, not a catalog project.
- The archived `graphics` repository is omitted because its README says the resources moved into the landing repository.
- Picword remains in the registry as a complete app; its action is explicitly an external historical listing rather than an AppifyHub-controlled destination.
- Status and general infrastructure pages are supporting destinations, not catalog projects.

## Complete public-repository disposition

### Archived repositories

- `actual-number-picker` — catalog as archived Android library.
- `blinking-image-view` — catalog as archived Android library.
- `circular-slider-android` — catalog as archived Android library.
- `code-stats` — catalog as archived developer tool.
- `contacts-generator-android` — represented by the Lorem Contacts app entry.
- `goose` — catalog as archived fork/library.
- `graphics` — omit because its README says the content moved to `landing`.
- `silly-android` — catalog as archived Android library.
- `timecrypt` — represented by the complete Timecrypt app entry; README identifies Bitwarden Send as its successor.

### Non-archived repositories

- `agent-backend`, `agent-landing`, and `agent-web` — represented by one current The Agent entry.
- `charts` — represented by the maintained Helm infrastructure entry.
- `landing` — this website, not a catalog entry.
- `monolith` — represented by the complete Project Bootstrap API entry.
- `terraform` — represented by the maintained Terraform infrastructure entry.

## Link findings

- The old Timecrypt homepage redirects to Bitwarden Send; the archived GitHub repository is the accurate historical destination.
- The Picword third-party listing returned HTTP 403 to automated checks and no AppifyHub-controlled destination was found.
- The Bootstrap SDK and Docker directories exist. GitHub redirects the current SDK `blob` URL to its canonical `tree` URL.
- The Monolith feature-request template is `feature_request.yaml`; the current landing-page URL names the obsolete `.md` file.
- The Agent landing page, web app, Bootstrap docs, Helm docs, status page, and both Google Play listings returned HTTP 200.

## Owner decisions

The project owner approved this catalog on 2026-08-14, including `Complete` for Material Wallpapers, Lorem Contacts, Timecrypt, and Picword; `Infrastructure` plus `Maintained` for Terraform and Helm; and omission of only the landing and moved Graphics repositories.
