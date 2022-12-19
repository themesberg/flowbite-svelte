<script lang="ts">
  import classNames from 'classnames';

  export let progress: string = '45';
  export let size: string = 'h-2.5';
  export let labelInside: boolean = false;
  export let labelOutside: string = '';
  export let color: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' = 'blue';
  export let labelInsideClass: string =
    'text-blue-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';

  // let barColor: string;
  const barColors = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600 dark:bg-gray-300',
    red: 'bg-red-600 dark:bg-red-500',
    green: 'bg-green-600 dark:bg-green-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    indigo: 'bg-indigo-600 dark:bg-indigo-500'
  };
</script>

{#if labelOutside}
  <div {...$$restProps} class={classNames('flex justify-between mb-1', $$props.class)}>
    <span class="text-base font-medium text-blue-700 dark:text-white">{labelOutside}</span>
    <span class="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
  </div>
{/if}
<div class={classNames('w-full bg-gray-200 rounded-full dark:bg-gray-700', size, $$props.class)}>
  {#if labelInside}
    <div class={classNames(labelInsideClass, barColors[color])} style="width: {progress}%">
      {progress}%
    </div>
  {:else}
    <div class={classNames(barColors[color], size, 'rounded-full')} style="width: {progress}%" />
  {/if}
</div>
