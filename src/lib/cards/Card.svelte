<script lang="ts">
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';

  export let href: string | null | undefined = undefined;
  export let horizontal: boolean = false;
  export let reverse: boolean = false;
  export let img: string | undefined = undefined;
  export let padding: SizeType | 'none' = 'lg';
  export let size: SizeType | 'none' = 'sm';
  export let imgClass: string = '';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    horizontal?: boolean;
    reverse?: boolean;
    img?: string;
    padding?: SizeType | 'none';
    size?: SizeType | 'none';
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
@prop export let href: string | null | undefined = undefined;
@prop export let horizontal: boolean = false;
@prop export let reverse: boolean = false;
@prop export let img: string | undefined = undefined;
@prop export let padding: SizeType | 'none' = 'lg';
@prop export let size: SizeType | 'none' = 'sm';
@prop export let imgClass: string = '';
-->
