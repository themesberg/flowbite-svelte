<script lang="ts">
  import { kbd } from "./theme";
  import clsx from "clsx";
  import type { KbdProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: KbdProps = $props();

  const kbdCls = $derived(kbd({ class: clsx(getTheme("kbd"), className) }));
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1110)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
