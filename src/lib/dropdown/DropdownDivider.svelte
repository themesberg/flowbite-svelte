<script lang="ts">
  import { dropdownDivider } from ".";
  import { type DropdownDividerProps, cn } from "$lib";

  let { class: className, ...restProps }: DropdownDividerProps = $props();
</script>

<div {...restProps} class={cn(dropdownDivider(), className)}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L598)
## Props
@prop class: className
@prop ...restProps
-->
