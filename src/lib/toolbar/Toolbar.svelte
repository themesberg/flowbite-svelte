<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { toolbar, type ToolbarTheme } from "./";
  import type { ToolbarProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, end, color, embedded, class: className, ...restProps }: ToolbarProps = $props();

  const theme = getTheme("toolbar");

  const separators = writable(false);
  setContext("toolbar", separators);

  let frameColor = $derived(embedded ? "default" : color);

  let { base, content } = $derived(
    toolbar({
      color: frameColor,
      embedded,
      separators: $separators
    })
  );

  // let separatorsClass: string = twMerge($separators && 'sm:divide-x rtl:divide-x-reverse');

  // let divClass: string = twMerge('flex justify-between items-center', !embedded && 'py-2 px-3', className);
</script>

<div {...restProps} class={base({ class: clsx((theme as ToolbarTheme)?.base, className) })}>
  <div class={content({ class: clsx((theme as ToolbarTheme)?.content) })}>
    {@render children?.()}
  </div>
  {#if end}
    {@render end()}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToolbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1103)
## Props
@prop children
@prop end
@prop color
@prop embedded
@prop class: className
@prop ...restProps
-->
