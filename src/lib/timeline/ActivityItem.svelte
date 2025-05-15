<script lang="ts">
  import { activityitem } from "./index";
  import type { ActivityItemProps } from "$lib/types";

  let { activities, liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass, ...restProps }: ActivityItemProps = $props();

  const { li, span, img, outerDiv, innerDiv, time, title, text } = $derived(activityitem());
</script>

{#each activities as { title: name, date, src, alt, text: activity }}
  <li {...restProps} class={li({ class: liClass })}>
    <span class={span({ class: spanClass })}>
      <img class={img({ class: imgClass })} {src} {alt} />
    </span>
    <div class={outerDiv({ class: outerDivClass })}>
      <div class={innerDiv({ class: innerDivClass })}>
        <time class={time({ class: timeClass })}>{date}</time>
        <div class={title({ class: titleClass })}>
          {@html name}
        </div>
      </div>
      {#if activity}
        <div class={text({ class: textClass })}>
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
[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1614)
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
