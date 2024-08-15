<script lang="ts">
  import { type ActivityItemProps as Props, activityitem } from './index';
  
  let { activities, liClass, spanClass, imgClass, outerDivClass, innerDivClass, timeClass, titleClass, textClass, ...attributes }: Props = $props();

  const { li, span, img, outerDiv, innerDiv, time, title, text } = $derived(activityitem());
</script>

{#each activities as { name, date, src, alt, activity }}
  <li class={li({ class: liClass })} {...attributes}>
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

