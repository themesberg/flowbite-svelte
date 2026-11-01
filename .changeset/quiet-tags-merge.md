---
"flowbite-svelte": patch
---

BREAKING: remove the legacy `forms/tags` Tags component. The `flowbite-svelte/Tags.svelte` export now points to the `extend/tags` component, which takes a `classes` object and `closeButtonProps` instead of the per-item class props (`itemClass`, `spanClass`, `closeClass`, `inputClass`, `closeBtnSize`). See the v2 migration guide.
