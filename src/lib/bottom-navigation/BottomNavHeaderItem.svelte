<script lang="ts">
  import clsx from "clsx";
  import { type BottomNavHeaderItemProps as Props, bottomnavheaderitem } from ".";
  let { itemName, active, class: className, ...restProps }: Props = $props();
  let base = $derived(bottomnavheaderitem({ active, class: clsx(className) }));
</script>

<button {...restProps} class={base}>
  {itemName}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: itemName: any;
@props:active: any;
@props:class: string;
-->
