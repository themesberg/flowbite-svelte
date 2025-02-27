<script lang="ts">
  import { type ActivityItemProps as Props, activityitem } from "./index";

  let { activities, liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass, ...restProps }: Props = $props();

  const { li, span, img, outerDiv, innerDiv, time, title, text } = $derived(activityitem());
</script>

{#each activities as { name, date, src, alt, activity }}
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
## Props
@props: activities: any;
@props:liClass: any;
@props:spanClass: any;
@props:imgClass: any;
@props:outerDivClass: any;
@props:innerDivClass: any;
@props:timeClass: any;
@props:titleClass: any;
@props:textClass: any;
-->
