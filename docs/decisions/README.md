# Decisions

Every architectural decision in foureyes is recorded here, one file per decision, before any code depends on it. A decision is binding once its file exists. Agents read this folder before starting any task.

## How IDs work
- `D<phase>.<n>` is a decision. The phase number shows when it is due: 0 define, 1 benchmark, 2 core loop, 3 adapters and cross-vendor review, 4 launch, 5 community.
- `T<phase>.<n>` is a task. Its brief lives in [`docs/tasks/`](../tasks/), and its cross-vendor review lives in [`reviews/`](../../reviews/).
- Files are named `<ID>-<short-name>.md`.
- A decision is never edited after it's made. To change one, write a new record that replaces it, and set the old one's status to `Superseded by <ID>`.
- An agent that thinks a decision is wrong stops and writes a proposal in [`docs/proposals/`](../proposals/). It never works around the decision.

## Log
| ID | Decision | Status |
|---|---|---|
| [D0.1](D0.1-promise-and-non-goals.md) | One-sentence promise and three non-goals | Decided |
| [D0.2](D0.2-project-name.md) | Project name | Decided |
| [D0.3](D0.3-license.md) | License | Decided |
| D0.4 | First language for benchmark tasks | Open |
| D0.5 | Harness language and runtime | Open |
| D1.1 | Task format: folder layout, metadata, visible vs hidden tests | Open |
| D1.2 | The 15 benchmark task specs | Open |
| D1.3 | Isolation for benchmark runs: containers, network, limits | Open |
| D1.4 | Where hidden tests, held-out tasks and reference solutions live | Open |
| D1.5 | Results schema, runs per task, and baseline settings | Open |
| D1.6 | Mutation-testing tool and score threshold | Open |
| D2.1 | Stage model and run-state format | Open |
| D2.2 | Gate interface: inputs, exit codes, finding format | Open |
| D2.3 | Triage policy schema and default rules | Open |
| D2.4 | Fix-loop cap and stall thresholds | Open |
| D2.5 | Evidence report format | Open |
| D3.1 | Adapter interface | Open |
| D3.2 | Reviewer contract: what it sees, finding format, path into triage | Open |
| D3.3 | Which model OpenCode runs in the benchmark | Open |
| D4.1 | Public claims and the README story | Open |
| D4.2 | Launch date and channels | Open |
| D5.1 | Contribution lanes and what won't be accepted | Open |
| D5.2 | Re-run cadence and leaderboard rules | Open |

## Template
```
# <ID>: <title>
Status: Decided | Date: <YYYY-MM-DD>
## Context
## Options considered
## Decision
## Consequences: what this commits us to and what it rules out
## Revisit if
```
