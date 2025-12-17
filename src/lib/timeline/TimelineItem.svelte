<script lang="ts">
  import { getContext, untrack } from "svelte";
  import { timelineItem, type TimelineVariants } from "./theme";
  import type { TimelineItemProps, DateFormat } from "$lib/types";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let {
    children,
    orientationSlot,
    title,
    date,
    dateFormat = "month-year",
    color = "primary",
    isLast = false,
    svgClass,
    liClass,
    defaultDivClass,
    divClass,
    timeClass,
    h3Class,
    connectorClass,
    datePrefix,
    class: className,
    classes,
    ...restProps
  }: TimelineItemProps = $props();

  warnThemeDeprecation(
    "TimelineItem",
    untrack(() => ({ svgClass, liClass, divClass, timeClass, h3Class, connectorClass })),
    {
      liClass: "class",
      svgClass: "svg",
      divClass: "div",
      timeClass: "time",
      h3Class: "h3",
      connectorClass: "connector"
    }
  );

  const styling = $derived({
    svg: svgClass,
    div: divClass,
    time: timeClass,
    h3: h3Class,
    connector: connectorClass
  });

  const theme = $derived(getTheme("timelineItem"));
  let order = getContext<TimelineVariants["order"]>("order");

  const { base, div, defaultDiv, time, h3, svg, connector } = $derived(timelineItem({ order, color, isLast }));

  const defaultDivCls = $derived(defaultDivClass ? defaultDivClass : defaultDiv());

  function formatDisplayDate(dateStr: string, format: DateFormat) {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    switch (format) {
      case "year":
        return date.toLocaleDateString(undefined, {
          year: "numeric"
        });
      case "month-year":
        return date.toLocaleDateString(undefined, {
          month: "long",
          year: "numeric"
        });
      case "full-date":
        return date.toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      default:
        return date.toLocaleDateString(undefined, {
          month: "long",
          year: "numeric"
        });
    }
  }
</script>

<li {...restProps} class={base({ class: clsx(theme?.base, className ?? liClass) })}>
  <!-- Individual connector line for vertical/activity layouts -->
  {#if !isLast && (order === "vertical" || order === "activity")}
    <div class={connector({ class: clsx(theme?.connector, styling.connector) })} aria-hidden="true"></div>
  {/if}

  {#if order !== "default"}
    {#if orientationSlot && (order === "vertical" || order === "horizontal")}
      {@render orientationSlot()}
    {:else}
      <div class={div({ class: clsx(theme?.div, styling.div) })}>
        <svg aria-hidden="true" class={svg({ class: clsx(theme?.svg, styling.svg) })} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    {/if}
  {:else if date}
    <div class={defaultDivCls} aria-hidden="true"></div>
    <time datetime={date} class={time({ class: clsx(theme?.time, styling.time) })}>
      {datePrefix}
      {formatDisplayDate(date, dateFormat)}
    </time>
  {/if}

  {#if title}
    <h3 class={h3({ class: clsx(theme?.h3, styling.h3) })}>
      {title}
    </h3>
  {/if}

  {#if order !== "default"}
    {#if date}
      <time datetime={date} class={time({ class: clsx(theme?.time, styling.time) })}>
        {datePrefix}
        {formatDisplayDate(date, dateFormat)}
      </time>
    {/if}
  {/if}

  {@render children()}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TimelineItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1960)
## Props
@prop children
@prop orientationSlot
@prop title
@prop date
@prop dateFormat = "month-year"
@prop color = "primary"
@prop isLast = false
@prop svgClass
@prop liClass
@prop defaultDivClass
@prop divClass
@prop timeClass
@prop h3Class
@prop connectorClass
@prop datePrefix
@prop class: className
@prop classes
@prop ...restProps
-->
