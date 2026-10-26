---
"flowbite-svelte": patch
---

BREAKING: remove the legacy `forms/tags` Tags component. The `flowbite-svelte/Tags.svelte` export now points to the `extend/tags` component, which uses `styling` instead of `classes` and `closeButtonProps` instead of the per-item class props.
