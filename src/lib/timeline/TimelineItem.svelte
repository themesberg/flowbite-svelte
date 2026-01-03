<script lang="ts">
  import { getContext } from "svelte";
  import { timelineItem, type TimelineVariants } from "./theme";
  import type { TimelineItemProps, DateFormat } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, orientationSlot, title, date, dateFormat = "month-year", color = "primary", isLast = false, datePrefix, class: className, classes, ...restProps }: TimelineItemProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("timelineItem"));
  let order = getContext<TimelineVariants["order"]>("order");

  const { base, indicator, dot, time, title: _title, icon, connector } = $derived(timelineItem({ order, color, isLast }));

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

<li {...restProps} class={base({ class: clsx(theme?.base, className) })} data-scope="timeline-item" data-part="base">
  <!-- Individual connector line for vertical/activity layouts -->
  {#if !isLast && (order === "vertical" || order === "activity")}
    <div class={connector({ class: clsx(theme?.connector, styling?.connector) })} aria-hidden="true" data-part="connector"></div>
  {/if}

  {#if order !== "default"}
    {#if orientationSlot && (order === "vertical" || order === "horizontal")}
      {@render orientationSlot()}
    {:else}
      <div class={indicator({ class: clsx(theme?.indicator, styling?.indicator) })} data-part="indicator">
        <svg aria-hidden="true" class={icon({ class: clsx(theme?.icon, styling?.icon) })} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-part="icon">
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    {/if}
  {:else if date}
    <div class={dot({ class: clsx(theme?.dot, styling?.dot) })} aria-hidden="true" data-part="dot"></div>
    <time datetime={date} class={time({ class: clsx(theme?.time, styling?.time) })} data-part="time">
      {datePrefix}
      {formatDisplayDate(date, dateFormat)}
    </time>
  {/if}

  {#if title}
    <h3 class={_title({ class: clsx(theme?.title, styling?.title) })} data-part="title">
      {title}
    </h3>
  {/if}

  {#if order !== "default"}
    {#if date}
      <time datetime={date} class={time({ class: clsx(theme?.time, styling?.time) })} data-part="time">
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
[TimelineItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1792)
## Props
@prop children
@prop orientationSlot
@prop title
@prop date
@prop dateFormat = "month-year"
@prop color = "primary"
@prop isLast = false
@prop datePrefix
@prop class: className
@prop classes
@prop ...restProps
-->
