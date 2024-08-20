<script lang="ts">
  import { getContext } from 'svelte';
  import { type TimelineItemProps as Props, timelineitem } from '.';

  let { children, orientationSlot, title, date, svgClass, liClass, divClass, timeClass, h3Class, ...restProps }: Props = $props();
  let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = getContext('order');

  const { li, div, time, h3, svg } = $derived(timelineitem({ order }));
</script>

<li class={li({ class: liClass })} {...restProps}>
  <div class={div({ class: divClass })}></div>
  {#if order !== 'default'}
    {#if orientationSlot && (order === 'vertical' || order === 'horizontal')}
      {@render orientationSlot()}
    {:else}
      <svg aria-hidden="true" class={svg({ class: svgClass })} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
      </svg>
    {/if}
  {:else if date}
    <time class={time({ class: timeClass })}>{date}</time>
  {/if}

  {#if title}
    <h3 class={h3({ class: h3Class })}>
      {title}
    </h3>
  {/if}

  {#if order !== 'default'}
    {#if date}
      <time class={time({ class: timeClass })}>{date}</time>
    {/if}
  {/if}

  {@render children()}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop orientationSlot
@prop title
@prop date
@prop svgClass
@prop liClass
@prop divClass
@prop timeClass
@prop h3Class
@prop ...restProps
-->
