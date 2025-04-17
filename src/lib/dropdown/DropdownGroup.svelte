<script lang="ts">
  import clsx from "clsx";
  import { type DropdownGroupProps, dropdownGroup } from ".";

  let { children, class: className, ...restProps }: DropdownGroupProps = $props();

  const ulCls = $derived(dropdownGroup({ class: clsx(className) }));
</script>

<ul {...restProps} class={ulCls}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
-->
