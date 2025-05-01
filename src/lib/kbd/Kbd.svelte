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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[KbdProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L831)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
