<script lang="ts">
  import { list } from "./theme";
  import type { ListProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { setListContext } from "$lib/context";

  let { children, tag = "ul", isContenteditable = false, position = "inside", ctxClass, class: className, ...restProps }: ListProps = $props();

  const theme = $derived(getTheme("list"));

  let contextClass = $derived(ctxClass || "");

  // Create context object
  const ctx = {
    get ctxClass() {
      return contextClass;
    }
  };

  // Set context during initialization
  setListContext(ctx);

  $effect(() => {
    contextClass = ctxClass || "";
  });

  let classList = $derived(list({ position, tag, class: clsx(theme, className) }));
</script>

<svelte:element this={tag} data-scope="list" {...restProps} class={classList} contenteditable={isContenteditable}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1928)
## Props
@prop children
@prop tag = "ul"
@prop isContenteditable = false
@prop position = "inside"
@prop ctxClass
@prop class: className
@prop ...restProps
-->
