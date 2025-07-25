<script lang="ts">
  import { activityItem, type ActivityItemTheme } from "./index";
  import type { ActivityItemProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { activities, liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass, class: className, classes, ...restProps }: ActivityItemProps = $props();

  warnThemeDeprecation(
    "ActivityItem",
    { liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass },
    {
      liClass: "class",
      spanClass: "span",
      imgClass: "img",
      outerDivClass: "outer",
      innerDivClass: "inner",
      timeClass: "time",
      titleClass: "title",
      textClass: "text"
    }
  );
  const styling = $derived(
    classes ?? {
      span: spanClass,
      img: imgClass,
      outer: outerDivClass,
      inner: innerDivClass,
      time: timeClass,
      title: titleClass,
      text: textClass
    }
  );

  const theme = getTheme("activityItem");

  const { li, span, img, outer, inner, time, title, text } = $derived(activityItem());
</script>

{#each activities as { title: name, date, src, alt, text: activity }}
  <li {...restProps} class={li({ class: clsx((theme as ActivityItemTheme)?.li, className ?? liClass) })}>
    <span class={span({ class: clsx((theme as ActivityItemTheme)?.span, styling.span) })}>
      <img class={img({ class: clsx((theme as ActivityItemTheme)?.img, styling.img) })} {src} {alt} />
    </span>
    <div class={outer({ class: clsx((theme as ActivityItemTheme)?.outer, styling.outer) })}>
      <div class={inner({ class: clsx((theme as ActivityItemTheme)?.inner, styling.inner) })}>
        <time class={time({ class: clsx((theme as ActivityItemTheme)?.time, styling.time) })}>{date}</time>
        <div class={title({ class: clsx((theme as ActivityItemTheme)?.title, styling.title) })}>
          {@html name}
        </div>
      </div>
      {#if activity}
        <div class={text({ class: clsx((theme as ActivityItemTheme)?.text, styling.text) })}>
          {@html activity}
        </div>
      {/if}
    </div>
  </li>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1759)
## Props
@prop activities
@prop liClass
@prop spanClass
@prop imgClass
@prop outerDivClass
@prop innerDivClass
@prop timeClass
@prop titleClass
@prop textClass
@prop class:className
@prop classes
@prop ...restProps
-->
