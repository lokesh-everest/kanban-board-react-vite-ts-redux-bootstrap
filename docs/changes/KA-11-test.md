# KA-11 — Test: Say hi

## Summary

Added a friendly “Hi!” greeting to the Kanban Board header.

## What changed

- `src/App.tsx` now renders “Hi!” beneath the existing application title.
- `README.md` lists the greeting among the application features.

## Decisions

- Kept the greeting in the existing header so it is immediately visible without adding an interaction or changing the board workflow.
- Used a polite status role for the greeting so assistive technology can identify the message.
- The repository has no test files or test framework, and `package.json` has no test script. Avoided adding a test dependency/framework for this small static UI change; verified it through the production TypeScript/Vite build instead.

## How each criterion is met

- **Say hi:** the application header displays “Hi!” using the greeting paragraph in `src/App.tsx`. Verified by the production build (manual smoke check: open the application and confirm “Hi!” appears beneath the title).

## How to verify

1. Run `npm run dev`.
2. Open the local URL printed by Vite.
3. Confirm “Hi!” appears beneath the Kanban Board title.
4. Run `npm run build` to verify TypeScript compilation and the production bundle.

## Tests

- No automated test was added: the project has no existing test suite or test dependencies.
- `npm test` — unavailable; npm reports that the `test` script is missing.
- `npm run build` — passed (`tsc` and Vite production build). Vite emitted the existing large-chunk advisory (>500 kB).
- `npm run lint` — blocked because the project has no ESLint configuration; ESLint reports that it cannot find a configuration file. This was also the result before changes.
- `git diff --check` — passed.

## Docs updated

- `README.md` — documented the greeting feature.
- `docs/changes/KA-11-test.md` — recorded implementation and verification details.

## Open questions

- Should a test framework and ESLint configuration be established for the repository in a separate change?
