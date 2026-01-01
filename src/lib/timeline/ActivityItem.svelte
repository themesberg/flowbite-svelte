<script lang="ts">
  import { activityItem } from "./theme";
  import type { ActivityItemProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { activities, class: className, classes, ...restProps }: ActivityItemProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("activityItem"));

  const { item, indicator, img, card, header, time, title, text } = $derived(activityItem());
</script>

{#each activities as { title: name, date, src, alt, text: activity, id }, index (id ?? src ?? index)}
  <li {...restProps} class={item({ class: clsx(theme?.item, className) })} data-scope="activity-item" data-part="item">
    <span class={indicator({ class: clsx(theme?.indicator, styling?.indicator) })} data-part="indicator">
      <img class={img({ class: clsx(theme?.img, styling?.img) })} {src} {alt} data-part="img" />
    </span>
    <div class={card({ class: clsx(theme?.card, styling?.card) })} data-part="card">
      <div class={header({ class: clsx(theme?.header, styling?.header) })} data-part="header">
        <time class={time({ class: clsx(theme?.time, styling?.time) })} data-part="time">{date}</time>
        <div class={title({ class: clsx(theme?.title, styling?.title) })} data-part="title">
          {@html name}
        </div>
      </div>
      {#if activity}
        <div class={text({ class: clsx(theme?.text, styling?.text) })} data-part="text">
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
[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1760)
## Props
@prop activities
@prop class: className
@prop classes
@prop ...restProps
-->
