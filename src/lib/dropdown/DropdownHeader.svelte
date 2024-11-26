<script lang="ts">
  import { type DropdownHeaderProps as Props, dropdownHeader } from ".";

  let { children, class: className, ...restProps }: Props = $props();
  let headerClass = $derived(dropdownHeader({ class: className }));
</script>

<div {...restProps} class={headerClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:class: string;
-->
