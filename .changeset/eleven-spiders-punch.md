---
"flowbite-svelte": patch
---

Breaking Changes

- Several theme slot and prop names were renamed — update any custom theme/class mappings or component prop keys.

## Improvements

All components now include consistent data-scope/data-part attributes and clearer part names for more reliable CSS selection, styling and testing.
DOM parts reorganized to more semantic names improving styling consistency and testability.

- New

PaginationNav: added visiblePages prop to control how many page links are shown.

