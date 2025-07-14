<script lang="ts">
  import { dropdownDivider } from ".";
  import { type DropdownDividerProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, ...restProps }: DropdownDividerProps = $props();

  const theme = getTheme("dropdownDivider");
</script>

<div {...restProps} class={cn(dropdownDivider(), className, theme)}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L602)
## Props
@prop class: className
@prop ...restProps
-->
