<script lang="ts">

  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  import { twMerge, twJoin } from 'tailwind-merge';
  import { type ProgressbarProps as Props } from '.';

  let {
    progress = '45',
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = 'h-2.5',
    labelInside = false,
    labelOutside,
    easing = cubicOut,
    color = 'primary',
    div2Class,
    labeloutsidedivClass,
    divClass,
    ...attributes
  }: Props = $props();

  let labelInsideCls: string =
    'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
  let divCls: string = 'w-full bg-gray-200 rounded-full dark:bg-gray-700';

  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });

  // let barColor: string | undefined | null;
  const barColors = {
    primary: 'bg-primary-600',
    blue: 'bg-blue-600',
    gray: 'bg-gray-600 dark:bg-gray-300',
    red: 'bg-red-600 dark:bg-red-500',
    green: 'bg-green-600 dark:bg-green-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    indigo: 'bg-indigo-600 dark:bg-indigo-500'
  };

  $effect(() => {
    _progress.set(Number(progress));
  });
</script>

{#if labelOutside}
  <div
    {...attributes}
    class={twMerge('mb-1 flex justify-between', labeloutsidedivClass)}
  >
    <span class="text-base font-medium text-blue-700 dark:text-white"
      >{labelOutside}</span
    >
    <span class="text-sm font-medium text-blue-700 dark:text-white"
      >{progress}%</span
    >
  </div>
{/if}
<div class={twMerge(divCls, size, divClass)} {...attributes}>
  {#if labelInside}
    <div
      class={twJoin(labelInsideCls, barColors[color], size, div2Class)}
      style="width: {$_progress}%"
    >
      {$_progress.toFixed(precision)}%
    </div>
  {:else}
    <div
      class={twJoin(barColors[color], size, 'rounded-full', div2Class)}
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
@prop labelOutside
@prop easing = cubicOut
@prop color = 'primary'
@prop div2Class
@prop labeloutsidedivClass
@prop divClass
@prop ...attributes
-->
