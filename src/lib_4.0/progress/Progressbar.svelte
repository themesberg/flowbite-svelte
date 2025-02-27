<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import type { EasingFunction } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    progress: string | number;
    precision?: number;
    tweenDuration?: number;
    animate?: boolean;
    size?: string;
    labelInside?: boolean;
    labelOutside?: string;
    easing?: EasingFunction;
    color?: 'primary' | 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo';
    labelInsideClass?: string;
    divClass?: string;
    progressClass?: string;
    classLabelOutside?: string;
  }

  export let progress: $$Props['progress'] = '45';
  export let precision: $$Props['precision'] = 0
  export let tweenDuration: $$Props['tweenDuration'] = 400;
  export let animate: $$Props['animate'] = false;
  export let size: $$Props['size'] = 'h-2.5';
  export let labelInside: $$Props['labelInside'] = false;
  export let labelOutside: $$Props['labelOutside'] = '';
  export let easing: $$Props['easing'] = cubicOut;
  export let color: NonNullable<$$Props['color']> = 'primary';
  export let labelInsideClass: $$Props['labelInsideClass'] = 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
  export let divClass: $$Props['divClass'] = 'w-full bg-gray-200 rounded-full dark:bg-gray-700';
  export let progressClass: $$Props['progressClass'] = '';
  export let classLabelOutside: $$Props['classLabelOutside'] = '';

  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });

  // let barColor: string;
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

  $: _progress.set(Number(progress));
</script>

{#if labelOutside}
  <div {...$$restProps} class={twMerge('flex justify-between mb-1', classLabelOutside)}>
    <span class="text-base font-medium text-blue-700 dark:text-white">{labelOutside}</span>
    <span class="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
  </div>
{/if}
<div class={twMerge(divClass, size, $$props.class)}>
  {#if labelInside}
    <div class={twMerge(barColors[color], labelInsideClass)} style="width: {$_progress}%">
      {$_progress.toFixed(precision)}%
    </div>
  {:else}
    <div class={twMerge(barColors[color], size, 'rounded-full', progressClass)} style="width: {$_progress}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let progress: $$Props['progress'] = '45';
@prop export let precision: $$Props['precision'] = 0
  export let tweenDuration: $$Props['tweenDuration'] = 400;
@prop export let animate: $$Props['animate'] = false;
@prop export let size: $$Props['size'] = 'h-2.5';
@prop export let labelInside: $$Props['labelInside'] = false;
@prop export let labelOutside: $$Props['labelOutside'] = '';
@prop export let easing: $$Props['easing'] = cubicOut;
@prop export let color: NonNullable<$$Props['color']> = 'primary';
@prop export let labelInsideClass: $$Props['labelInsideClass'] = 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
@prop export let divClass: $$Props['divClass'] = 'w-full bg-gray-200 rounded-full dark:bg-gray-700';
@prop export let progressClass: $$Props['progressClass'] = '';
@prop export let classLabelOutside: $$Props['classLabelOutside'] = '';
-->
