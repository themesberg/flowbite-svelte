<script lang="ts">
  import { widgetPlaceholder } from "./theme";
  import clsx from "clsx";
  import type { WidgetPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { class: className, classes }: WidgetPlaceholderProps = $props();

  const theme = $derived(getTheme("widgetPlaceholder"));

  const { base, chartContainer, chartBar, labelLine } = widgetPlaceholder({});
</script>

<div role="status" data-scope="widget-placeholder" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="label-line" class={labelLine({ class: clsx("mb-2.5 h-2.5 w-32", theme?.labelLine, classes?.labelLine) })}></div>
  <div data-part="label-line" class={labelLine({ class: clsx("mb-10 h-2 w-48", theme?.labelLine, classes?.labelLine) })}></div>
  <div data-part="chart-container" class={chartContainer({ class: clsx(theme?.chartContainer, classes?.chartContainer) })}>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-72", theme?.chartBar, classes?.chartBar) })}></div>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-56", theme?.chartBar, classes?.chartBar) })}></div>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-72", theme?.chartBar, classes?.chartBar) })}></div>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-64", theme?.chartBar, classes?.chartBar) })}></div>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-80", theme?.chartBar, classes?.chartBar) })}></div>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-72", theme?.chartBar, classes?.chartBar) })}></div>
    <div data-part="chart-bar" class={chartBar({ class: clsx("h-80", theme?.chartBar, classes?.chartBar) })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[WidgetPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1426)
## Props
@prop class: className
@prop classes
-->
