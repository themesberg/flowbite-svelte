<script lang="ts">
  import { bottomNavHeaderItem } from ".";
  import { type BottomNavHeaderItemProps, cn } from "$lib";
import { getTheme } from "$lib/theme/themeUtils";

  let { itemName, active, class: className, ...restProps }: BottomNavHeaderItemProps = $props();

  // Theme context
  const theme = getTheme("bottomNavHeaderItem");

  let base = $derived(bottomNavHeaderItem({ active }));
</script>

<button {...restProps} class={cn(base, className, theme)}>
  {itemName}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L308)
## Props
@prop itemName
@prop active
@prop class: className
@prop ...restProps
-->
