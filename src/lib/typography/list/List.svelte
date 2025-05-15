<script lang="ts">
  import { setContext } from "svelte";
  import { list } from "./index";
  import type { ListProps } from "$lib/types";
  import clsx from "clsx";

  let { children, tag = "ul", isContenteditable = false, position = "inside", ctxClass, class: className, ...restProps }: ListProps = $props();

  let contextClass = $state(ctxClass || "");

  setContext("ctxClass", () => contextClass);

  $effect(() => {
    contextClass = ctxClass || "";
  });

  let classList = $derived(list({ position, tag, class: clsx(className) }));
</script>

<svelte:element this={tag} {...restProps} class={classList} contenteditable={isContenteditable}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1776)
## Props
@prop children
@prop tag = "ul"
@prop isContenteditable = false
@prop position = "inside"
@prop ctxClass
@prop class: className
@prop ...restProps
-->
