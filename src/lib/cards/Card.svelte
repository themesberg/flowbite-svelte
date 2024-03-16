<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  type CardSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  type ImgType = {
    src: string;
    alt: string;
  };
  interface Props {
    children: Snippet;
    href?: string;
    horizontal?: boolean;
    shadow?: boolean;
    reverse?: boolean;
    img?: ImgType;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    size?: CardSizeType;
    class?: string | undefined;
  }

  let {
    children,
    href,
    horizontal = false,
    shadow = false,
    reverse = false,
    img,
    padding = 'lg',
    size = 'sm',
    class: classname,
    ...attributes
  }: Props = $props();

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
  // let role = href ? 'link' : 'presentation';
  let innerPadding: string = $state('');
  let cardClass: string = $state('');
  // let tag = href ? 'a' : 'div';
  let imgClass: string = $state('');
  // $inspect('href: ', href)
  $effect(() => {
    innerPadding = paddings[padding];
    cardClass = twMerge(
      'w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700',
      sizes[size],
      shadow && 'shadow-md',
      reverse ? 'flex-col-reverse' : 'flex-col',
      horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'),
      href && 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
      !img && innerPadding,
      classname
    );
    imgClass = twMerge(
      reverse ? 'rounded-b-lg' : 'rounded-t-lg',
      horizontal &&
        'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
      horizontal && (reverse ? 'md:rounded-e-lg' : 'md:rounded-s-lg')
    );
  });
</script>

{#snippet content()}

    {#if img}
      <img class={imgClass} src={img.src} alt={img.alt} />
      <div class={innerPadding}>
        {@render children()}
      </div>
    {:else}
      {@render children()}
    {/if}

{/snippet}

<div {...attributes} class={cardClass}>
  {#if href}
    <a {href}>
      {@render content()}
    </a>
  {:else}
    {@render content()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:href?: string;
@props:horizontal?:  boolean; = false;
@props:shadow?:  boolean; = false;
@props:reverse?:  boolean; = false;
@props:img?: ImgType;
@props:padding?:  'none' | 'sm' | 'md' | 'lg' | 'xl'; = 'lg';
@props:size?:  CardSizeType; = 'sm';
@props:class?: string | undefined;
-->
