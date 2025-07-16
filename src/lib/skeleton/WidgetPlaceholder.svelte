<script lang="ts">
  import { widgetPlaceholder, type WidgetPlaceholderTheme } from ".";
  import clsx from "clsx";
  import { type WidgetPlaceholderProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className }: WidgetPlaceholderProps = $props();

  const theme = getTheme("widgetPlaceholder");

  const { base, wrapper, vLine, hLine } = widgetPlaceholder({});
</script>

<div role="status" class={base({ class: clsx((theme as WidgetPlaceholderTheme)?.base, className) })}>
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
[WidgetPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1455)
## Props
@prop class: className
-->
