<script lang="ts">
  interface Props {
    children?: any;
    href?: string | undefined;
    horizontal?: boolean;
    shadow?: boolean;
    reverse?: boolean;
    src?: string | undefined;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    size?: SizeType;
    class?: string | undefined;
  }
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  let {
    children,
    href = undefined,
    horizontal = false,
    shadow = false,
    reverse = false,
    src = undefined,
    padding = 'lg',
    size = 'sm',
    class: classname = '',
    ...attributes
  } = $props<Props>();

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

  let innerPadding: string = $state('');
  let cardClass: string = $state('');
  let tag = href ? 'a' : 'div';
  let imgClass: string = $state('');
  // $inspect('href: ', href)
  $effect(() => {
    innerPadding = paddings[padding];
    //  twMerge('flex w-full', sizes[size], reverse ? 'flex-col-reverse' : 'flex-col',
    //  horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'),
    // href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
    // !img && innerPadding, $$props.class);
    cardClass = twMerge(
      'w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700',
      sizes[size],
      shadow && 'shadow-md',
      reverse ? 'flex-col-reverse' : 'flex-col',
      horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'),
      href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
      !src && innerPadding,
      classname
    );
    imgClass = twMerge(
      reverse ? 'rounded-b-lg' : 'rounded-t-lg',
      horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
      horizontal && (reverse ? 'md:rounded-e-lg' : 'md:rounded-s-lg')
    );
  });
</script>

<svelte:element this={tag} role="presentation" {href} {...attributes} class={cardClass}>
  {#if src}
    <img class={imgClass} {src} alt="" />
    <div class={innerPadding}>
      {@render children()}
    </div>
  {:else}
    {@render children()}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop href = undefined,
@prop horizontal = false,
@prop shadow = false,
@prop reverse = false,
@prop src = undefined,
@prop padding = 'lg',
@prop size = 'sm',
@prop class: classname = '',
@prop ...attributes
-->
