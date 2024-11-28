<script lang="ts">
  import { type DropdownUlProps as Props, dropdownul } from ".";

  let { children, class: className, ...restProps }: Props = $props();

  const ulCls = $derived(dropdownul({ class: className }));
</script>

<ul {...restProps} class={ulCls}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
-->
