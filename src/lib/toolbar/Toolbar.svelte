<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { toolbar } from "./";
  import type { ToolbarProps } from "$lib/types";
  import clsx from "clsx";

  let { children, end, color, embedded, class: className, ...restProps }: ToolbarProps = $props();

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

<div {...restProps} class={base({ class: clsx(className) })}>
  <div class={content()}>
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
[ToolbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1063)
## Props
@prop children
@prop end
@prop color
@prop embedded
@prop class: className
@prop ...restProps
-->
