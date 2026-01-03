<script lang="ts">
  import { kbd } from "./theme";
  import clsx from "clsx";
  import type { KbdProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, ...restProps }: KbdProps = $props();

  const theme = $derived(getTheme("kbd"));

  const kbdCls = $derived(kbd({ class: clsx(theme, className) }));
</script>

<kbd data-scope="kbd" data-part="base" {...restProps} class={kbdCls}>
  {@render children()}
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1019)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
