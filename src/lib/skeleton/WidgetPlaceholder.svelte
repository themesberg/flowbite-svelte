<script lang="ts">
  import { widgetPlaceholder } from ".";
  import clsx from "clsx";
  import { type WidgetPlaceholderProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, classes }: WidgetPlaceholderProps = $props();

  const theme = getTheme("widgetPlaceholder");

  const { base, wrapper, vLine, hLine } = widgetPlaceholder({});
</script>

<div role="status" class={base({ class: clsx(theme?.base, className) })}>
  <div class={hLine({ class: clsx("mb-2.5 h-2.5 w-32", classes?.hLine) })}></div>
  <div class={hLine({ class: clsx("mb-10 h-2 w-48", classes?.hLine) })}></div>
  <div class={wrapper()}>
    <div class={vLine({ class: clsx("h-72", classes?.vLine) })}></div>
    <div class={vLine({ class: clsx("h-56", classes?.vLine) })}></div>
    <div class={vLine({ class: clsx("h-72", classes?.vLine) })}></div>
    <div class={vLine({ class: clsx("h-64", classes?.vLine) })}></div>
    <div class={vLine({ class: clsx("h-80", classes?.vLine) })}></div>
    <div class={vLine({ class: clsx("h-72", classes?.vLine) })}></div>
    <div class={vLine({ class: clsx("h-80", classes?.vLine) })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[WidgetPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1436)
## Props
@prop class: className
@prop classes
-->
