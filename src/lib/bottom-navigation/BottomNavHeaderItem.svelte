<script lang="ts">
  import { bottomnavheaderitem } from ".";
  import { type BottomNavHeaderItemProps, cn } from "$lib";

  let { itemName, active, class: className, ...restProps }: BottomNavHeaderItemProps = $props();
  let base = $derived(bottomnavheaderitem({ active }));
</script>

<button {...restProps} class={cn(base, className)}>
  {itemName}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L309)
## Props
@prop itemName
@prop active
@prop class: className
@prop ...restProps
-->
