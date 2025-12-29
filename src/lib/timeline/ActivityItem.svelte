<script lang="ts">
  import { activityItem } from "./theme";
  import type { ActivityItemProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { activities, class: className, classes, ...restProps }: ActivityItemProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("activityItem"));

  const { li, span, img, outer, inner, time, title, text } = $derived(activityItem());
</script>

{#each activities as { title: name, date, src, alt, text: activity, id }, index (id ?? src ?? index)}
  <li {...restProps} class={li({ class: clsx(theme?.li, className) })}>
    <span class={span({ class: clsx(theme?.span, styling?.span) })}>
      <img class={img({ class: clsx(theme?.img, styling?.img) })} {src} {alt} />
    </span>
    <div class={outer({ class: clsx(theme?.outer, styling?.outer) })}>
      <div class={inner({ class: clsx(theme?.inner, styling?.inner) })}>
        <time class={time({ class: clsx(theme?.time, styling?.time) })}>{date}</time>
        <div class={title({ class: clsx(theme?.title, styling?.title) })}>
          {@html name}
        </div>
      </div>
      {#if activity}
        <div class={text({ class: clsx(theme?.text, styling?.text) })}>
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
[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1751)
## Props
@prop activities
@prop class: className
@prop classes
@prop ...restProps
-->
