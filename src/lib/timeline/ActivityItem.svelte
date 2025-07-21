<script lang="ts">
  import { activityItem, type ActivityItemTheme } from "./index";
  import type { ActivityItemProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { activities, liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass, ...restProps }: ActivityItemProps = $props();

  const theme = getTheme("activityItem");

  const { li, span, img, outerDiv, innerDiv, time, title, text } = $derived(activityItem());
</script>

{#each activities as { title: name, date, src, alt, text: activity }}
  <li {...restProps} class={li({ class: clsx((theme as ActivityItemTheme)?.li, liClass) })}>
    <span class={span({ class: clsx((theme as ActivityItemTheme)?.span, spanClass) })}>
      <img class={img({ class: clsx((theme as ActivityItemTheme)?.img, imgClass) })} {src} {alt} />
    </span>
    <div class={outerDiv({ class: clsx((theme as ActivityItemTheme)?.outerDiv, outerDivClass) })}>
      <div class={innerDiv({ class: clsx((theme as ActivityItemTheme)?.innerDiv, innerDivClass) })}>
        <time class={time({ class: clsx((theme as ActivityItemTheme)?.time, timeClass) })}>{date}</time>
        <div class={title({ class: clsx((theme as ActivityItemTheme)?.title, titleClass) })}>
          {@html name}
        </div>
      </div>
      {#if activity}
        <div class={text({ class: clsx((theme as ActivityItemTheme)?.text, textClass) })}>
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
[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1756)
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
@prop ...restProps
-->
