<script lang="ts">
  import { widgetPlaceholder } from "./index";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { type WidgetPlaceholderProps } from "$lib";

  let { class: className }: WidgetPlaceholderProps = $props();
  const { base, wrapper, vLine, hLine } = widgetPlaceholder({});
</script>

<div role="status" class={twMerge(base(), clsx(className))}>
  <div class={hLine({ class: "mb-2.5 h-2.5 w-32" })}></div>
  <div class={hLine({ class: "mb-10 h-2 w-48" })}></div>
  <div class={wrapper()}>
    <div class={vLine({ class: "h-72" })}></div>
    <div class={vLine({ class: "h-56" })}></div>
    <div class={vLine({ class: "h-72" })}></div>
    <div class={vLine({ class: "h-64" })}></div>
    <div class={vLine({ class: "h-80" })}></div>
    <div class={vLine({ class: "h-72" })}></div>
    <div class={vLine({ class: "h-80" })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[WidgetPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1434)
## Props
@prop class: className
-->
