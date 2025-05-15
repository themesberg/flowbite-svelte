<script lang="ts">
  import clsx from "clsx";
  import { listPlaceholder } from ".";
  import type { ListPlaceholderProps } from "$lib/types";

  let { itemNumber = 5, size = "md", rounded, class: className, ...restProps }: ListPlaceholderProps = $props();

  const { base, item, itemContent, itemTitle, itemSubtitle, itemExtra } = $derived(listPlaceholder({ size, rounded }));

  let items = $derived([...Array(itemNumber).keys()]);
</script>

<div role="status" {...restProps} class={base({ class: clsx(className) })}>
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each items as _, i}
    <div class={item({ class: i > 0 ? "pt-4" : "" })}>
      <div class={itemContent()}>
        <div class={itemTitle()}></div>
        <div class={itemSubtitle()}></div>
      </div>
      <div class={itemExtra()}></div>
    </div>
  {/each}
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1354)
## Props
@prop itemNumber = 5
@prop size = "md"
@prop rounded
@prop class: className
@prop ...restProps
-->
