<script lang="ts">
  import clsx from "clsx";
  import { kbd } from ".";
  import type { KbdProps } from "$lib/types";

  let { children, class: className, ...restProps }: KbdProps = $props();
  const kbdCls = kbd({ class: clsx(className) });
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L949)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
