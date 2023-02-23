<script lang="ts">
  import type { SizeType } from '$lib/types';
  import classNames from 'classnames';
  import Frame from '../utils/Frame.svelte';

  export let href: string | undefined = undefined;
  export let horizontal: boolean = false;
  export let reverse: boolean = false;
  export let img: string | undefined = undefined;
  export let padding: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  export let size: SizeType = 'sm';
  export let imgSettings:
    | undefined
    | {
        url: string;
        size: SizeType;
        position: 'top' | 'bottom' | 'left' | 'right';
      } = undefined;

  const paddings = {
    none: 'p-0',
    sm: 'p-4 sm:p-6 md:p-8',
    md: 'p-4 sm:p-5',
    lg: 'p-4 sm:p-6',
    xl: 'p-4 sm:p-8'
  };

  const sizes = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-screen-xl'
  };

  const imgPositions = {
    top: 'object-top',
    right: 'object-right',
    left: 'object-left',
    bottom: 'object-bottom'
  };
  const imgSizes = (horizontal: boolean, size: SizeType) => {
    return horizontal
      ? {
          xs: '!w-24',
          sm: '!w-32',
          md: '!w-40',
          lg: '!w-64',
          xl: '!w-80'
        }[size]
      : {
          xs: 'h-24',
          sm: 'h-32',
          md: 'h-40',
          lg: 'h-64',
          xl: 'h-80'
        }[size];
  };

  let innerPdding: string;
  $: innerPdding = paddings[padding];

  let cardClass: string;
  $: cardClass = classNames(
    'flex',
    sizes[size],
    reverse ? 'flex-col-reverse' : 'flex-col',
    horizontal && (reverse ? 'md:flex-row-reverse md:max-w-xl' : 'md:flex-row md:max-w-xl'),
    href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
    !img && innerPdding,
    $$props.class
  );

  const imgPosition = imgSettings ? imgPositions[imgSettings.position] : '';
  const imgSize = imgSettings ? imgSizes(horizontal, imgSettings.size) : '';
  const imgFit = imgSettings ? 'object-cover' : '';

  let imgClass: string;
  $: imgClass = classNames(
    reverse ? 'rounded-b-lg' : 'rounded-t-lg',
    horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
    horizontal && (reverse ? 'md:rounded-r-lg' : 'md:rounded-l-lg'),
    imgSize,
    imgPosition,
    imgFit
  );
</script>

<Frame tag={href ? 'a' : 'div'} rounded shadow border {href} {...$$restProps} class={cardClass}>
  {#if img}
    <img class={imgClass} src={img} alt="" />
    <div class={innerPdding}>
      <slot />
    </div>
  {:else if imgSettings}
    <img class={imgClass} src={imgSettings.url} alt="" />
    <div class={innerPdding}>
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</Frame>
