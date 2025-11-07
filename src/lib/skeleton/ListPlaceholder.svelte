<script lang="ts">
  import clsx from "clsx";
  import { listPlaceholder } from "./theme";
  import type { ListPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { itemNumber = 5, size = "md", rounded, class: className, classes, ...restProps }: ListPlaceholderProps = $props();

  const theme = getTheme("listPlaceholder");

  const { base, item, content, title, subTitle, extra } = $derived(listPlaceholder({ size, rounded }));

  let items = $derived([...Array(itemNumber).keys()]);
</script>

<div role="status" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {#each items as _, i}
    <div
      class={item({
        class: clsx(i > 0 ? "pt-4" : "", theme?.item, classes?.item)
      })}
    >
      <div
        class={content({
          class: clsx(theme?.content, classes?.content)
        })}
      >
        <div
          class={title({
            class: clsx(theme?.title, classes?.title)
          })}
        ></div>
        <div
          class={subTitle({
            class: clsx(theme?.subTitle, classes?.subTitle)
          })}
        ></div>
      </div>
      <div
        class={extra({
          class: clsx(theme?.extra, classes?.extra)
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
[ListPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1477)
## Props
@prop itemNumber = 5
@prop size = "md"
@prop rounded
@prop class: className
@prop classes
@prop ...restProps
-->
