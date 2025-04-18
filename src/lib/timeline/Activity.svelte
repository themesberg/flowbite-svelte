<script lang="ts">
  import clsx from "clsx";
  import { activity } from ".";
  import type { ActivityProps } from "$lib/types";

  let { children, class: className, ...restProps }: ActivityProps = $props();
  const base = activity({ class: clsx(className) });
</script>

<ol {...restProps} class={base}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[ActivityProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L1412)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
