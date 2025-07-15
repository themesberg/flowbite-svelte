<script lang="ts">
  import { getContext } from "svelte";
  import { timelineItem, type TimelineItemTheme } from ".";
  import type { TimelineItemProps, TimelineVariants, DateFormat } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, orientationSlot, title, date, dateFormat = "month-year", svgClass, liClass, divClass, timeClass, h3Class, ...restProps }: TimelineItemProps = $props();

  const theme = getTheme("timelineItem");

  let order = getContext<TimelineVariants["order"]>("order");

  const { li, div, time, h3, svg } = $derived(timelineItem({ order }));

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

<li {...restProps} class={cn(li({ class: liClass }), (theme as TimelineItemTheme)?.li)}>
  {#if order !== "default"}
    {#if orientationSlot && (order === "vertical" || order === "horizontal")}
      {@render orientationSlot()}
    {:else}
      <div class={cn(div({ class: divClass }), (theme as TimelineItemTheme)?.div)}>
        <svg aria-hidden="true" class={cn(svg({ class: svgClass }), (theme as TimelineItemTheme)?.svg)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
      </div>
    {/if}
  {:else if date}
    <time datetime={date} class={cn(time({ class: timeClass }), (theme as TimelineItemTheme)?.time)}>
      {formatDisplayDate(date, dateFormat)}
    </time>
  {/if}
  {#if title}
    <h3 class={cn(h3({ class: h3Class }), (theme as TimelineItemTheme)?.h3)}>
      {title}
    </h3>
  {/if}

  {#if order !== "default"}
    {#if date}
      <time datetime={date} class={cn(time({ class: timeClass }), (theme as TimelineItemTheme)?.time)}>
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
[TimelineItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1808)
## Props
@prop children
@prop orientationSlot
@prop title
@prop date
@prop dateFormat = "month-year"
@prop svgClass
@prop liClass
@prop divClass
@prop timeClass
@prop h3Class
@prop ...restProps
-->
