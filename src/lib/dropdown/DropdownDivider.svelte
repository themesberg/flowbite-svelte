<script lang="ts">
  import clsx from "clsx";
  import { dropdownDivider } from "./";
  import type { DropdownDividerProps } from "$lib/types";

  let { class: divClass, ...restProps }: DropdownDividerProps = $props();
  const base = dropdownDivider({ class: clsx(divClass) });
</script>

<div {...restProps} class={base}></div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L563)
## Props
@prop class: divClass
@prop ...restProps
-->
