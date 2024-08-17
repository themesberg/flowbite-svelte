<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { twMerge } from 'tailwind-merge';
  import { tweened } from 'svelte/motion';
  import { type ProgressbarProps as Props, progressbar } from '.';

  let {
    progress = '45',
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = 'h-2.5',
    labelInside = false,
    labelOutside = '',
    easing = cubicOut,
    color = 'primary',
    div2Class,
    oustsideSpanClass,
    oustsideProgressClass,
    labeloutsidedivClass,
    divClass,
    ...restProps
  }: Props = $props();

  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  const {
    base,
    labelInsideDiv,
    insideDiv,
    outsideDiv,
    oustsideSpan,
    outsideProgress
  } = $derived(
    progressbar({
      color,
      labelInside
    })
  );

  $effect(() => {
    _progress.set(Number(progress));
  });
</script>

{#if labelOutside}
  <div {...restProps} class={outsideDiv({ class: labeloutsidedivClass })}>
    <span class={oustsideSpan({ class: oustsideSpanClass })}
      >{labelOutside}</span
    >
    <span class={outsideProgress({ class: oustsideProgressClass })}
      >{progress}%</span
    >
  </div>
{/if}
<div class={twMerge(base({ class: divClass }), size)} {...restProps}>
  {#if labelInside}
    <div
      class={twMerge(labelInsideDiv({ class: div2Class }), size)}
      style="width: {$_progress}%"
    >
      {$_progress.toFixed(precision)}%
    </div>
  {:else}
    <div
      class={twMerge(insideDiv({ class: div2Class }), size)}
      style="width: {$_progress}%"
    ></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop progress = '45'
@prop precision = 0
@prop tweenDuration = 400
@prop animate = false
@prop size = 'h-2.5'
@prop labelInside = false
@prop labelOutside = ''
@prop easing = cubicOut
@prop color = 'primary'
@prop div2Class
@prop oustsideSpanClass
@prop oustsideProgressClass
@prop labeloutsidedivClass
@prop divClass
@prop ...restProps
-->
