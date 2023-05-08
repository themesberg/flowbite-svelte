<script lang="ts">
  import classNames from 'classnames';
  import Button from './Button.svelte';
  import { getContext } from 'svelte';

  const group = getContext('group');

  export let pill: boolean = false;
  export let outline: boolean = false;
  export let color: keyof typeof gradientClasses = 'blue';

  const gradientClasses = {
    blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ',
    green:
      'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800',
    cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800',
    teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800',
    lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800',
    red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800',
    pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800',
    purple:
      'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800',
    purpleToBlue:
      'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800',
    cyanToBlue:
      'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800',
    greenToBlue:
      'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800',
    purpleToPink:
      'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800',
    pinkToOrange:
      'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800',
    tealToLime:
      'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700',
    redToYellow:
      'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400'
  };

  const rounded = () =>
    group
      ? pill
        ? 'first:rounded-l-full last:rounded-r-full'
        : 'first:rounded-l-lg last:rounded-r-lg'
      : pill
      ? 'rounded-full'
      : 'rounded-lg';

  let gradientOutlineClass: string;
  $: gradientOutlineClass = classNames(
    'inline-flex items-center justify-center w-full  !border-0',
    pill || '!rounded-md',
    'bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white', // this is limitation - no transparency
    'hover:bg-transparent hover:!text-inherit',
    'transition-all duration-75 ease-in group-hover:!bg-opacity-0 group-hover:!text-inherit'
  );

  let divClass: string;
  $: divClass = classNames(
    'p-0.5',
    gradientClasses[color],
    group
      ? pill
        ? 'first:rounded-l-full last:rounded-r-full'
        : 'first:rounded-l-lg last:rounded-r-lg'
      : pill
      ? 'rounded-full'
      : 'rounded-lg',
    $$props.class
  );
</script>

{#if outline}
  <div class={divClass}>
    <!-- Trick to prentend outline without using border
	    This has a limitation of no supporting transparency as
	    is set to bg-white dark:bg-gray-900 -->
    <Button {...$$restProps} {pill} color="none" class={gradientOutlineClass}><slot /></Button>
  </div>
{:else}
  <Button {...$$restProps} {pill} color="none" class={gradientClasses[color]}><slot /></Button>
{/if}
