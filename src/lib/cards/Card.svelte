<script lang="ts">
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';

  interface $$Props extends ComponentProps<Frame> {
    href?: string;
    horizontal?: boolean;
    reverse?: boolean;
    img?: string;
    padding?: SizeType | 'none';
    size?: SizeType | 'none';
    imgClass?: string;
  }

  export let href: $$Props['href'] = undefined;
  export let horizontal: $$Props['horizontal'] = false;
  export let reverse: $$Props['reverse'] = false;
  export let img: $$Props['img'] = undefined;
  export let padding: NonNullable<$$Props['padding']> = 'lg';
  export let size: NonNullable<$$Props['size']> = 'sm';
  export let imgClass: $$Props['imgClass'] = '';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    horizontal?: boolean;
    reverse?: boolean;
    img?: string;
    padding?: SizeType | 'none';
    size?: SizeType | 'none';
    imgClass?: string;
  }

  const paddings: Record<SizeType | 'none', string> = {
    none: '',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-4 sm:p-5',
    lg: 'p-4 sm:p-6',
    xl: 'p-4 sm:p-8'
  };

  const sizes: Record<SizeType | 'none', string> = {
    none: '',
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-screen-xl'
  };

  let innerPadding: string;
  $: innerPadding = paddings[padding];

  let cardClass: string;
  $: cardClass = twMerge('flex w-full', sizes[size], reverse ? 'flex-col-reverse' : 'flex-col', horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'), href && 'hover:bg-gray-100 dark:hover:bg-gray-700', !img && innerPadding, $$props.class);

  let imgCls: string;
  $: imgCls = twMerge(reverse ? 'rounded-b-lg' : 'rounded-t-lg', horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none', horizontal && (reverse ? 'md:rounded-e-lg' : 'md:rounded-s-lg'), imgClass);
</script>

<Frame tag={href ? 'a' : 'div'} rounded shadow border on:click on:focusin on:focusout on:mouseenter on:mouseleave {href} {...$$restProps} class={cardClass}>
  {#if img}
    <img class={imgCls} src={img} alt="" />
    <div class={innerPadding}>
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</Frame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: $$Props['href'] = undefined;
@prop export let horizontal: $$Props['horizontal'] = false;
@prop export let reverse: $$Props['reverse'] = false;
@prop export let img: $$Props['img'] = undefined;
@prop export let padding: NonNullable<$$Props['padding']> = 'lg';
@prop export let size: NonNullable<$$Props['size']> = 'sm';
@prop export let imgClass: $$Props['imgClass'] = '';
-->
