---
"flowbite-svelte": patch
---

- feat(sidebar, drawer): #1664 Fix content visibility and breakpoint conflicts

Resolves an issue where Sidebar content disappeared on mobile when nested within Drawer. The sidebar tv variant's isOpen: false setting was applying display: hidden, conflicting with Drawer's visibility control.

Changes:

theme.ts: Removed isOpen variant from sidebar tv definition.

Sidebar.svelte: Simplified rendering logic when disableBreakpoints is true, ensuring content always renders.

Usage: Ensures isOpen={!isDrawerHidden} is passed to Sidebar to sync with Drawer's state.

The Drawer now solely controls Sidebar's visibility, eliminating display conflicts.
