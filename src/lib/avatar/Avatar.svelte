<script lang="ts">
  import Indicator from '$lib/indicators/Indicator.svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  interface AvatarProps {
    href?: string;
    src?: string;
    rounded?: boolean;
    border?: boolean;
    stacked?: boolean;
    dot?: object | undefined;
    alt?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  }

  type $$Props = AvatarProps & (HTMLAnchorAttributes | HTMLAttributes<HTMLDivElement>);

  export let src: $$Props['src'] = '';
  export let href: $$Props['href'] = undefined;
  export let rounded: $$Props['rounded'] = false;
  export let border: $$Props['border'] = false;
  export let stacked: $$Props['stacked'] = false;
  export let dot: $$Props['dot'] = undefined;
  export let alt: $$Props['alt'] = '';
  export let size: NonNullable<$$Props['size']> = 'md';

  $: dot = dot && { placement: 'top-right', color: 'gray', size: 'lg', ...dot };

  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
    none: ''
  };

  let avatarClass: string;
  $: avatarClass = twMerge(rounded ? 'rounded' : 'rounded-full', border && 'p-1 ring-2 ring-gray-300 dark:ring-gray-500', sizes[size], stacked && 'border-2 -ms-4 border-white dark:border-gray-800', 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 object-cover', $$props.class);
</script>

{#if !src || !!href || $$slots.default || dot}
  <svelte:element this={href ? 'a' : 'div'} {href} {...$$restProps} class="relative flex justify-center items-center {avatarClass}">
    {#if src}
      <img {alt} {src} class={rounded ? 'rounded' : 'rounded-full'} />
    {:else}
      <slot>
        <!-- default avatar placeholder -->
        <svg class="w-full h-full {rounded ? 'rounded' : 'rounded-full'}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
      </slot>
    {/if}
    {#if dot}
      <Indicator border offset={rounded} {...dot} />
    {/if}
  </svelte:element>
{:else}
  <img {alt} {src} {...$$restProps} class={avatarClass} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let src: $$Props['src'] = '';
@prop export let href: $$Props['href'] = undefined;
@prop export let rounded: $$Props['rounded'] = false;
@prop export let border: $$Props['border'] = false;
@prop export let stacked: $$Props['stacked'] = false;
@prop export let dot: $$Props['dot'] = undefined;
@prop export let alt: $$Props['alt'] = '';
@prop export let size: NonNullable<$$Props['size']> = 'md';
-->
