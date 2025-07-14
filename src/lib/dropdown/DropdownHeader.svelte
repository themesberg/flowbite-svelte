<script lang="ts">
  import { dropdownHeader } from ".";
  import { type DropdownHeaderProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();

  const theme = getTheme("dropdownHeader");
</script>

<div {...restProps} class={cn(dropdownHeader(), className, theme)}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L604)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
