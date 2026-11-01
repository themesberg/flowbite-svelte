# Project structure migration plan

Source: structure review on branch `version-2` (2026-10-26). Structure only, no bug fixes.

Each phase is one PR and can be reverted on its own. Every phase must end with `pnpm check`, `pnpm test:unit`, `pnpm test:e2e` and `pnpm build` green, plus `publint` on the packaged output.

## Findings summary

1. Library (`src/lib`, 378 files) and website (`src/routes`, 2,902 files) share one `src/`, one `tsconfig`, one `package.json`.
2. Generated output lives in `routes/` (`admin-dashboard/utils/highlight` 1,136 files, `routes/llm`, `og-manifest.json`) and in `lib/generated/nav.json`.
3. CORRECTED in Phase 0: same-named helpers (`CodeWrapper`, `CompoAttributesViewer`, `CompoCard`, `CompoDescription`) exist in `routes/utils`, `routes/blocks/utils`, `routes/admin-dashboard/utils`, but only `CompoDescription` is an identical copy. The rest differ in props, imports and data shape, so they are different components sharing names.
4. ~~Two parallel doc trees~~ CORRECTION: `routes/docs-examples/*` (859 files) mirrors `routes/docs/*.md` on purpose. Examples were extracted from the markdown into standalone files so they can be tested alone, and the `.md` imports them dynamically. The mirror is kept to ease maintenance. Remaining risk is only drift between the two trees (orphaned or missing example files), which a consistency check can catch.
5. Component data JSON split across `routes/component-data` (187) and `routes/blocks/component-data` (58).
6. CORRECTED in Phase 0: `lib/forms/tags` is NOT dead. `package.json` exports `./Tags.svelte` from `dist/forms/tags`, and the docs page uses `dirName = "forms/tags"`. `extend/tags` is a second copy, exported from `lib/index.ts`. Two public Tags components need a decision.
7. Tests in three places: `src/tests` (766 files, hand-mirrored from `lib`), `e2e/`, loose `src/demo.spec.ts`. Naming drift: `tests/button` vs `lib/buttons`, `.test.ts` vs `.spec.ts`.
8. About 20 scratch/analysis/script files at repo root.
9. Smaller: `static/themes` vs `lib/theme-selector/themes`, test fixtures served as routes (`theme-test`, `snapshots`, `docs/examples/snapshot-example`), `src/images` vs `static/images`, `routes/vite-env.d.ts`, `routes/landing` and `routes/layouts` are components not routes, tracked `test-results/.last-run.json`.

## Phase 0: Safety net (no moves)
- Run a baseline of `check`, unit, e2e and `build`; record results.
- Snapshot the `dist/` file list (`find dist -type f | sort > baseline.txt`). Later phases must not change the public export surface unintentionally.
- Verify open assumptions:
  - `grep -r "forms/tags"` across `src`, `e2e`, `scripts`, docs.
  - Diff the copies of `CompoCard` and `CompoAttributesViewer` to find the canonical one.
- Exit: baseline recorded, assumptions confirmed or dropped.

## Phase 1: Root cleanup (low risk)
- Move scripts (`convert-imports.mjs`, `find-*.mjs`, `convertThemes.js`, `include-files.js`, `clear-cache.sh`) to `scripts/`. Delete one-off ones after checking `git log` and that nothing in `package.json`, CI or `vercel.json` calls them.
- Move analysis notes (`POPOVER_*`, `TEST_*`, `TIMER_*`, `reactive-context.md`, `md-to-lim.txt`, `design-system-guide.md`) to `docs/internal/`. `v2-migration-guide.md` lives in the repo root and so does `workflow.md` (both moved there 2026-11-01, developer-facing).
- Add `test-results/` to `.gitignore` and `git rm --cached` it. Move `src/routes/vite-env.d.ts` to `src/`.
- Check: `grep -rn` each moved script name in `package.json`, `.github/`, `vercel.json`.
- Rollback: plain revert.

## Phase 2: Dedupe (small code change)
- Delete `lib/forms/tags` if Phase 0 confirmed it is unused.
- Create one shared docs-ui folder `src/docs-ui/`. Reconcile the copies of `CodeWrapper`, `CompoAttributesViewer`, `CompoCard`, `CompoDescription` into one, accounting for the divergences found in Phase 0. Replace copies with imports via a `$docs-ui` alias in `svelte.config.js` and `tsconfig`.
- Check: pages using each variant (docs, blocks, admin-dashboard) still render; e2e covers this.
- Risk: a page may rely on its local variant's behaviour. One consumer folder per commit.

## Phase 3: Move generated output out of `routes/`
- Move to `src/generated/` or generate at build time:
  - `admin-dashboard/utils/highlight` (1,136 files)
  - `routes/llm`
  - `routes/og-manifest.json`
  - `routes/component-data` and `blocks/component-data`
- Update generator scripts (`svelte-lib-helpers`, `svelte-doc-llm`, `generate-nav`) and their output paths.
- Move `lib/generated/nav.json` out of the library so it is not packaged.
- Decide per item: commit the output, or ignore and generate on `build` (open question 1).
- Check: `/llm`, `/sitemap.xml`, `e2e/og-check.test.ts`.
- Risk: medium; several tools hard-code these paths.

## Phase 4: Tests
- Pick one convention: colocated `*.test.ts` next to each component (recommended), or at minimum identical folder names to `lib`.
- Rename `tests/button` to `tests/buttons`, remove or relocate `tests/toggle-example`, move `src/demo.spec.ts`.
- Normalize `e2e/` on one suffix (`.spec.ts`).
- Batch by category; keep vitest `include` globs in `vite.config.ts` updated.
- Check: total test count equal before and after (`vitest --reporter=json | jq '.numTotalTests'`).

## Phase 5: Docs tidy-up (revised: keep the docs / docs-examples mirror)
- Do NOT colocate examples with markdown. The mirror is intentional (standalone-testable examples, `.md` imports them).
- Add a mirror consistency check script (in `scripts/`, run in CI): every example imported by a `.md` exists, every file in `docs-examples` is imported by some `.md`, and the folder structure matches 1:1.
- Fix any orphans or mismatches the check reports.
- Move `docs/examples` snapshot pages, `routes/theme-test`, `routes/snapshots` into a dev-only route group or `e2e/fixtures`.
- Move non-route components (`routes/landing`, `routes/layouts`) to `src/docs-ui/`.
- Resolve the `docs/mcp` vs `llm/mcp` overlap.
- Risk: low to medium. No example files move; route URLs must stay stable.
- Checks: before/after route list comparison from the build output, e2e suite (`e2e/examples.spec.ts`).

## Phase 6: Workspace split (optional, largest)
- Create `packages/flowbite-svelte` (library) and `apps/docs` (site, including admin-dashboard, blocks, builder).
- Each gets its own `package.json`, `tsconfig`, `svelte.config.js`. Site consumes the library via `workspace:*` instead of `$lib`.
- Move changesets, publish scripts and Vercel config to match.
- Only after Phases 1-5, which make it mostly mechanical.
- Risk: high. Publishing, CI, Vercel root directory, every `$lib` import in the docs.

## Order, size and dependencies

| Phase | Size | Depends on | Value |
|---|---|---|---|
| 0 | tiny | none | safety |
| 1 | small | 0 | high, easy |
| 2 | small | 0 | high |
| 3 | medium | 0 | high |
| 4 | medium | none | medium |
| 5 | small-medium (revised) | 2 | medium |
| 6 | large | 1-5 | high long-term |

Phases 1 and 2 can run in parallel. Suggest stopping after Phase 3 and re-evaluating before 5 and 6.

## Open questions
1. Commit generated output (current behaviour) or generate on `build`? Changes Phase 3 from path moves to pipeline changes.
2. Do external sites or Algolia links depend on current doc URLs? Determines how careful Phase 5 must be.
3. Is the workspace split (Phase 6) wanted, or out of scope for `version-2`?

## Not verified at review time
- (Both earlier assumptions were checked in Phase 0 and corrected above.)
