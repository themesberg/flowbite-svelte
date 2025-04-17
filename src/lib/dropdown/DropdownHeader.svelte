<script lang="ts">
  import clsx from "clsx";
  import { type DropdownHeaderProps, dropdownHeader } from ".";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();
  let headerClass = $derived(dropdownHeader({ class: clsx(className) }));
</script>

<div {...restProps} class={headerClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
-->
