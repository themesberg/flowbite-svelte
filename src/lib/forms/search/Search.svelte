<script lang="ts">
  // import type { FormSizeType } from '$lib/types';
  import {Input} from '$lib';
  import type { Action } from 'svelte/action';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    right?: Snippet;
    size?:  'sm' | 'md' | 'lg' ;
    placeholder?: string;
    value?: any;
    show?: boolean;
    use?: Action<HTMLElement, any>;
    class?: string | undefined | null;
  }
  
  let { children, right, size = 'lg', placeholder = 'Search', value, show = true, use = () => {}, class: className, ...restProps }: Props = $props();

  // export let size: FormSizeType = 'lg';
  // export let placeholder: string = 'Search';
  // export let value: any = undefined;
  // export let show: boolean = true;
  // export let use: Action<HTMLElement, any> = () => {};

  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
</script>

{#if show}
  <div class="relative w-full" use:use>
    <Input bind:value type="search" {placeholder} size={size} {...restProps} class={className}>
      {#snippet left()}
      <svg class={sizes[size]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
      {/snippet}
      {#if right}
        {@render right()}
      {/if}
    </Input>
    {#if children}
      <div class="flex absolute inset-y-0 end-0 items-center text-gray-500 dark:text-gray-400">
        {@render children()}
      </div>
    {/if}
  </div>
{:else}
  {#if children}
  {@render children()}
  {/if}
{/if}