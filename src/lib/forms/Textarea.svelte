<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import Wrapper from '../utils/Wrapper.svelte';

  const background = getContext('background');

  export let value: string = '';

  let wrapped: boolean;
  $: wrapped = $$slots.header || $$slots.footer;

  let wrapperClass: string;
  $: wrapperClass = classNames(
    'w-full rounded-lg',
    background ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700',
    'text-gray-900 dark:placeholder-gray-400 dark:text-white ',
    'border border-gray-200 dark:border-gray-600',
    $$props.class
  );

  let textareaClass: string;
  $: textareaClass = wrapped
    ? classNames(
        'block w-full',
        'text-sm',
        'border-0 px-0',
        'bg-inherit dark:bg-inherit',
        'focus:outline-none focus:ring-0'
      )
    : classNames(
        wrapperClass,
        'p-2.5 text-sm',
        'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
      );

  const headerClass = (header: boolean) =>
    classNames(header ? 'border-b' : 'border-t', 'py-2 px-3 border-gray-200 dark:border-gray-600');

  let innerWrapperClass: string;
  $: innerWrapperClass = classNames(
    'py-2 px-4 bg-white dark:bg-gray-800',
    $$slots.footer || 'rounded-b-lg',
    $$slots.header || 'rounded-t-lg'
  );
</script>

<Wrapper show={wrapped} class={wrapperClass}>
  {#if $$slots.header}
    <div class={headerClass(true)}>
      <slot name="header" />
    </div>
  {/if}
  <Wrapper show={wrapped} class={innerWrapperClass}>
    <textarea
      bind:value
      on:blur
      on:change
      on:click
      on:contextmenu
      on:focus
      on:input
      on:keydown
      on:keypress
      on:keyup
      on:mouseenter
      on:mouseleave
      on:mouseover
      on:paste
      {...$$restProps}
      class={textareaClass} />
  </Wrapper>
  {#if $$slots.footer}
    <div class={headerClass(false)}>
      <slot name="footer" />
    </div>
  {/if}
</Wrapper>
