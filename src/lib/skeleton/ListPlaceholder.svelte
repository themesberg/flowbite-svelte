<script lang="ts">
  import clsx from "clsx";
  import { listPlaceholder } from "./theme";
  import type { ListPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { itemNumber = 5, size = "md", rounded, class: className, classes, ...restProps }: ListPlaceholderProps = $props();

  const theme = $derived(getTheme("listPlaceholder"));

  const { base, listItem, itemContent, primaryLine, secondaryLine, valueLine } = $derived(listPlaceholder({ size, rounded }));

  let items = $derived([...Array(itemNumber).keys()]);
</script>

<div role="status" {...restProps} data-scope="list-placeholder" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#each items as _, i (i)}
    <div
      data-part="list-item"
      class={listItem({
        class: clsx(i > 0 ? "pt-4" : "", theme?.listItem, classes?.listItem)
      })}
    >
      <div
        data-part="item-content"
        class={itemContent({
          class: clsx(theme?.itemContent, classes?.itemContent)
        })}
      >
        <div
          data-part="primary-line"
          class={primaryLine({
            class: clsx(theme?.primaryLine, classes?.primaryLine)
          })}
        ></div>
        <div
          data-part="secondary-line"
          class={secondaryLine({
            class: clsx(theme?.secondaryLine, classes?.secondaryLine)
          })}
        ></div>
      </div>
      <div
        data-part="value-line"
        class={valueLine({
          class: clsx(theme?.valueLine, classes?.valueLine)
        })}
      ></div>
    </div>
  {/each}
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1406)
## Props
@prop itemNumber = 5
@prop size = "md"
@prop rounded
@prop class: className
@prop classes
@prop ...restProps
-->
