<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import Wrapper from '../utils/Wrapper.svelte';

  interface $$Props extends HTMLTextareaAttributes {
    value?: any;
    wrappedClass?: string;
    unWrappedClass?: string;
    innerWrappedClass?: string;
    headerClass?: string;
    footerClass?: string;
  }

  export let value: $$Props['value'] = undefined;
  export let wrappedClass: $$Props['wrappedClass'] = 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50';
  export let unWrappedClass: $$Props['unWrappedClass'] = 'p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50';
  export let innerWrappedClass: $$Props['innerWrappedClass'] = 'py-2 px-4 bg-white dark:bg-gray-800';
  export let headerClass: $$Props['headerClass'] = ''
  export let footerClass: $$Props['footerClass'] = '';

  const background = getContext('background');
  let wrapped: boolean;
  $: wrapped = $$slots.header || $$slots.footer;

  let wrapperClass: string;
  $: wrapperClass = twMerge('w-full rounded-lg bg-gray-50', background ? 'dark:bg-gray-600' : 'dark:bg-gray-700', 'text-gray-900 dark:placeholder-gray-400 dark:text-white', 'border border-gray-200', background ? 'dark:border-gray-500' : 'dark:border-gray-600', $$props.class);

  // let textareaClass: string | undefined;
  $: textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);

  const headerCls = (header: boolean) => twMerge(header ? 'border-b' : 'border-t', 'py-2 px-3 border-gray-200', background ? 'dark:border-gray-500' : 'dark:border-gray-600', header ? headerClass : footerClass);

  let innerWrapperClass: string;
  $: innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? '' : 'rounded-b-lg', $$slots.header ? '' : 'rounded-t-lg');
</script>

<Wrapper show={wrapped} class={wrapperClass}>
  {#if $$slots.header}
    <div class={headerCls(true)}>
      <slot name="header"></slot>
    </div>
  {/if}
  <Wrapper show={wrapped} class={innerWrapperClass}>
    <textarea bind:value on:blur on:change on:click on:contextmenu on:focus on:input on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover on:paste on:select {...$$restProps} class={textareaClass}></textarea>
  </Wrapper>
  {#if $$slots.footer}
    <div class={headerCls(false)}>
      <slot name="footer"></slot>
    </div>
  {/if}
</Wrapper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let value: $$Props['value'] = undefined;
@prop export let wrappedClass: $$Props['wrappedClass'] = 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50';
@prop export let unWrappedClass: $$Props['unWrappedClass'] = 'p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50';
@prop export let innerWrappedClass: $$Props['innerWrappedClass'] = 'py-2 px-4 bg-white dark:bg-gray-800';
@prop export let headerClass: $$Props['headerClass'] = ''
  export let footerClass: $$Props['footerClass'] = '';
-->
