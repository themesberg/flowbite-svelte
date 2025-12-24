<script lang="ts">
  import { bottomNavHeaderItem } from "./theme";
  import clsx from "clsx";
  import type { BottomNavHeaderItemProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { itemName, active, class: className, ...restProps }: BottomNavHeaderItemProps = $props();

  // Theme context
  const theme = $derived(getTheme("bottomNavHeaderItem"));

  let base = $derived(bottomNavHeaderItem({ active, class: clsx(theme, className) }));
</script>

<button {...restProps} class={base}>
  {itemName}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L298)
## Props
@prop itemName
@prop active
@prop class: className
@prop ...restProps
-->
