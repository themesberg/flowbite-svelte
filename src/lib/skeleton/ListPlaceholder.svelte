<script lang="ts">
  import clsx from "clsx";
  import { listPlaceholder, type ListPlaceholderTheme } from ".";
  import type { ListPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { itemNumber = 5, size = "md", rounded, class: className, ...restProps }: ListPlaceholderProps = $props();

  const theme = getTheme("listPlaceholder");

  const { base, item, itemContent, itemTitle, itemSubtitle, itemExtra } = $derived(listPlaceholder({ size, rounded }));

  let items = $derived([...Array(itemNumber).keys()]);
</script>

<div role="status" {...restProps} class={base({ class: clsx(className, (theme as ListPlaceholderTheme)?.base) })}>
  {#each items as _, i}
    <div
      class={item({
        class: clsx(i > 0 ? "pt-4" : "", (theme as ListPlaceholderTheme)?.item)
      })}
    >
      <div
        class={itemContent({
          class: clsx((theme as ListPlaceholderTheme)?.itemContent)
        })}
      >
        <div
          class={itemTitle({
            class: clsx((theme as ListPlaceholderTheme)?.itemTitle)
          })}
        ></div>
        <div
          class={itemSubtitle({
            class: clsx((theme as ListPlaceholderTheme)?.itemSubtitle)
          })}
        ></div>
      </div>
      <div
        class={itemExtra({
          class: clsx((theme as ListPlaceholderTheme)?.itemExtra)
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
[ListPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1423)
## Props
@prop itemNumber = 5
@prop size = "md"
@prop rounded
@prop class: className
@prop ...restProps
-->
