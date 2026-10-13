# Contributing to foureyes

- **Pre-alpha.** foureyes isn't accepting code contributions yet. Issues and questions are welcome.
- **Decisions.** Every architectural decision is recorded before code depends on it, and a recorded decision is binding. To challenge one, open an issue. [`docs/decisions/README.md`](docs/decisions/README.md) explains how decisions are numbered, recorded and replaced.
- **Running the checks locally.** Use Node 24 or later (see `.nvmrc`). Run `npm ci`, then:
  - `npm run lint`
  - `npm run format:check`
  - `npm run typecheck`
  - `npm test`

  `npm run format` rewrites files with Prettier.
- **License.** Contributions are licensed under [Apache-2.0](LICENSE), per Section 5 of the license.
