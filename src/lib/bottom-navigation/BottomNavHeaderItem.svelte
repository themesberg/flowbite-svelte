<script lang="ts">
  import { type BottomNavHeaderItemProps as Props, bottomnavheaderitem } from '.';
  let { itemName, active, class: className, ...restProps }: Props = $props();
  let base = $derived(bottomnavheaderitem({ active, className }));
</script>

<button class={base} {...restProps}>
  {itemName}
</button>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: itemName: any;
@props:active: any;
@props:class: any;
-->
