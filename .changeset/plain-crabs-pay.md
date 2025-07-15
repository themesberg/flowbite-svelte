---
"flowbite-svelte": patch
---

- fix(sidebar): Resolve dynamic resize responsiveness

Corrects an issue where the standalone Sidebar failed to show/hide responsively on dynamic screen size changes (e.g., dev tools). Modified Sidebar.svelte to ensure the element is always in the DOM and its display is controlled by Tailwind's responsive classes via tailwind-variants in theme.ts. 
