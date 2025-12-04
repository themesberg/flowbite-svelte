<script lang="ts">
  import { buttonGroup } from "./theme";
  import clsx from "clsx";
  import type { ButtonGroupProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import { setButtonGroupContext } from "$lib/context";

  let { children, size = "md", disabled, class: className, ...restProps }: ButtonGroupProps = $props();

  const theme = getTheme("buttonGroup");

  let groupClass = $derived(buttonGroup({ size, class: clsx(theme, className) }));
  $effect(() => {
    setButtonGroupContext({ size, disabled });
  });
</script>

<div {...restProps} class={groupClass} role="group">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L333)
## Props
@prop children
@prop size = "md"
@prop disabled
@prop class: className
@prop ...restProps
-->
