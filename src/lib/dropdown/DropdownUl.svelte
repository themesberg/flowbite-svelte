<script lang="ts">
  import { type DropdownUlProps as Props, dropdownul } from '.';

  let { children, class: className, ...restProps }: Props = $props();

  const ulCls = $derived(dropdownul({ class: className }));
</script>

<ul class={ulCls} {...restProps}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
