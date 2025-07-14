<script lang="ts">
  import { activityItem, type ActivityItemTheme } from "./index";
  import type { ActivityItemProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { activities, liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass, ...restProps }: ActivityItemProps = $props();

  const theme = getTheme("activityItem");

  const { li, span, img, outerDiv, innerDiv, time, title, text } = $derived(activityItem());
</script>

{#each activities as { title: name, date, src, alt, text: activity }}
  <li {...restProps} class={cn(li({ class: liClass }), (theme as ActivityItemTheme)?.li)}>
    <span class={cn(span({ class: spanClass }), (theme as ActivityItemTheme)?.span)}>
      <img class={cn(img({ class: imgClass }), (theme as ActivityItemTheme)?.img)} {src} {alt} />
    </span>
    <div class={cn(outerDiv({ class: outerDivClass }), (theme as ActivityItemTheme)?.outerDiv)}>
      <div class={cn(innerDiv({ class: innerDivClass }), (theme as ActivityItemTheme)?.innerDiv)}>
        <time class={cn(time({ class: timeClass }), (theme as ActivityItemTheme)?.time)}>{date}</time>
        <div class={cn(title({ class: titleClass }), (theme as ActivityItemTheme)?.title)}>
          {@html name}
        </div>
      </div>
      {#if activity}
        <div class={cn(text({ class: textClass }), (theme as ActivityItemTheme)?.text)}>
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
[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1771)
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
