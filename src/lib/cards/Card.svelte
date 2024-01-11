<script lang="ts">
  interface Props{
    children?: any;
    href?: string | undefined;
    horizontal?: boolean;
    reverse?: boolean;
    img?: string | undefined;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    size?: SizeType;
  }
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';


  let { children, href = undefined, horizontal = false,  reverse = false, img = undefined, padding = 'lg', size = 'sm', ...attributes } = $props<Props>();

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
  let cardClass: string= $state('');
  let tag= href ? 'a' : 'div'
  let imgClass: string= $state('');
  $effect(()=>{
    innerPadding = paddings[padding];
    cardClass = twMerge('flex', sizes[size], reverse ? 'flex-col-reverse' : 'flex-col', horizontal && (reverse ? 'md:flex-row-reverse' : 'md:flex-row'), href && 'hover:bg-gray-100 dark:hover:bg-gray-700', !img && innerPadding);
    imgClass = twMerge(reverse ? 'rounded-b-lg' : 'rounded-t-lg', horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none', horizontal && (reverse ? 'md:rounded-e-lg' : 'md:rounded-s-lg'));
  })
</script>

<svelte:element this={tag} role="presentation" on:click on:focusin on:focusout on:mouseenter on:mouseleave {href} {...attributes} class={cardClass}>
  {#if img}
    <img class={imgClass} src={img} alt="" />
    <div class={innerPadding}>
      {@render children()}
    </div>
  {:else}
    {@render children()}
  {/if}
</svelte:element>