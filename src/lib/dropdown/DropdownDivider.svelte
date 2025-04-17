<script lang="ts">
  import clsx from "clsx";
  import { type DropdownDividerProps, dropdownDivider } from "./";

  let { class: divClass, ...restProps }: DropdownDividerProps = $props();
  const base = dropdownDivider({ class: clsx(divClass) });
</script>

<div {...restProps} class={base}></div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: class: string;
-->
