<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  // import Wrapper from '../utils/Wrapper.svelte';
  interface Props {
    children?: Snippet;
    header?: Snippet;
    footer?: Snippet;
    value?: any;
    wrappedClass?: string;
    unWrappedClass?: string;
    innerWrappedClass?: string;
    headerClass?: string;
    footerClass?: string;
    disabled?: boolean;
    class?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
  }

  let {
    children,
    header,
    footer,
    value,
    wrappedClass = 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
    unWrappedClass = 'p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
    innerWrappedClass = 'py-2 px-4 bg-white dark:bg-gray-800',
    headerClass = '',
    footerClass = '',
    disabled = false,
    class: className = '',
    id = '',
    name = '',
    placeholder = '',
    rows,
    cols,
    ...attributes
  }: Props = $props();
  const background = getContext('background');

  let wrapped: boolean = $state(false);
  if(header || footer) {wrapped = true} else {wrapped = false}

  // let wrapperClass: string;
  let wrapperClass = twMerge('w-full rounded-lg bg-gray-50', background ? 'dark:bg-gray-600' : 'dark:bg-gray-700', 'text-gray-900 dark:placeholder-gray-400 dark:text-white', 'border border-gray-200', background ? 'dark:border-gray-500' : 'dark:border-gray-600', className);

  let textareaClass: string = $derived(wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass));

  const headerCls = (isheader: boolean) => twMerge(isheader ? 'border-b' : 'border-t', 'py-2 px-3 border-gray-200', background ? 'dark:border-gray-500' : 'dark:border-gray-600', isheader ? headerClass : footerClass);
 
  let innerWrapperClass: string = twMerge(innerWrappedClass, footer ? '' : 'rounded-b-lg', header ? '' : 'rounded-t-lg');
</script>

<div class={wrapperClass}>
  {#if header}
    <div class={headerCls(true)}>
      {@render header()}
    </div>
  {/if}
  <div class={innerWrapperClass}>
    <textarea bind:value {...attributes} class={textareaClass} {id} {disabled} {placeholder} {name} {rows} {cols}></textarea>
  </div>
  {#if footer}
    <div class={headerCls(false)}>
      {@render footer()}
    </div>
  {/if}
  </div>
  
