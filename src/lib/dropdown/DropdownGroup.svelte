<script lang="ts">
  import { dropdownGroup } from ".";
  import { type DropdownGroupProps, cn } from "$lib";

  let { children, class: className, ...restProps }: DropdownGroupProps = $props();
</script>

<ul {...restProps} class={cn(dropdownGroup(), className)}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L615)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
