<script lang="ts">
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';

  export let href: string | null | undefined = undefined;
  export let horizontal: boolean = false;
  export let reverse: boolean = false;
  export let img: string | undefined = undefined;
  export let padding: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  export let size: SizeType = 'sm';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    horizontal?: boolean;
    reverse?: boolean;
    img?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    size?: SizeType;
  }

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

  let inneraPdding: string;
  $: innerPadding = paddings[padding];

  let cardClass: string;
  $: cardClass = twMerge(
    'flex',
    sizes[size],
    reverse ? 'flex-col-reverse' : 'flex-col',
    horizontal && (reverse ? 'md:flex-row-reverse md:max-w-xl' : 'md:flex-row md:max-w-xl'),
    href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
    !img && innerPadding,
    $$props.class
  );

  let imgClass: string;
  $: imgClass = twMerge(
    reverse ? 'rounded-b-lg' : 'rounded-t-lg',
    horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
    horizontal && (reverse ? 'md:rounded-r-lg' : 'md:rounded-l-lg')
  );
</script>

<Frame
  tag={href ? 'a' : 'div'}
  rounded
  shadow
  border
  on:click
  on:focusin
  on:focusout
  on:mouseenter
  on:mouseleave
  {href}
  {...$$restProps}
  class={cardClass}>
  {#if img}
    <img class={imgClass} src={img} alt="" />
    <div class={innerPadding}>
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</Frame>

<!--
  @component
  ## Features
  [Go to Card](https://flowbite-svelte.com/docs/components/card)
  - Set up
  - Default card
  - Card with action button
  - Card with link
  - Card with image
  - Horizontal card
  - User profile card
  - Card with form inputs
  - E-commerce card
  - Call to action card
  - Card with list
  - Pricing card
  - Testimonial card
  ## Props
  @prop href: string | null | undefined = undefined;
  @prop horizontal: boolean = false;
  @prop reverse: boolean = false;
  @prop img: string | undefined = undefined;
  @prop padding: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @prop size: SizeType = 'sm';
  ## Event
  - on:click
  - on:focusin
  - on:focusout
  - on:mouseenter
  - on:mouseleave
  ## Example
  ```
  <script>
    import { Card } from "flowbite-svelte";
  </script>

  <Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2023</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
  ```
-->
