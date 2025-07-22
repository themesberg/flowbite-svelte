<script lang="ts">
  import { kbd } from ".";
  import clsx from "clsx";
  import { type KbdProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: KbdProps = $props();

  const theme = getTheme("kbd");

  const kbdCls = kbd({ class: clsx(theme, className) });
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L995)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
