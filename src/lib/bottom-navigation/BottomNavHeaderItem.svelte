<script lang="ts">
  import clsx from "clsx";
  import { bottomnavheaderitem } from ".";
  import type { BottomNavHeaderItemProps } from "$lib/types";

  let { itemName, active, class: className, ...restProps }: BottomNavHeaderItemProps = $props();
  let base = $derived(bottomnavheaderitem({ active, class: clsx(className) }));
</script>

<button {...restProps} class={base}>
  {itemName}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L301)
## Props
@prop itemName
@prop active
@prop class: className
@prop ...restProps
-->
