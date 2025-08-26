<script lang="ts">
  import { getTheme } from "$lib/theme/themeUtils";
  import type { DrawerHandleProps } from "$lib/types";
  import clsx from "clsx";
  import { drawerhandle } from "./theme";
  import { getContext } from "svelte";

  let { children, placement, "aria-label": ariaLabel, class: className, classes, ...restProps }: DrawerHandleProps = $props();

  const ctx = getContext<{ placement: DrawerHandleProps["placement"] } | undefined>("drawer");

  const theme = getTheme("drawerhandle");
  let { base, handle } = $derived(drawerhandle({ placement: placement ?? ctx?.placement ?? "left" }));
</script>

<button type="button" aria-label={ariaLabel} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {@render children?.()}
  <span class={handle({ class: clsx(theme?.handle, classes?.handle) })}></span>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerHandleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L580)
## Props
@prop children
@prop placement
@prop "aria-label": ariaLabel
@prop class: className
@prop classes
@prop ...restProps
-->
