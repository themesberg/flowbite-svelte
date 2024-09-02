<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // import { twMerge } from 'tailwind-merge';
  import { type ToolbarProps as Props, toolbar } from './'
 

  let { children, end, color = 'default', embedded, separatorClass, class: className, ...restProps }: Props = $props();

  const separators = writable(false);
  setContext('toolbar', separators);

  let frameColor = $derived(embedded ? 'default' : color);

  let { base, content } = $derived(toolbar({
    color: frameColor,
    embedded,
    separators: $separators,
  }));

  // let separatorsClass: string = twMerge($separators && 'sm:divide-x rtl:divide-x-reverse');

  // let divClass: string = twMerge('flex justify-between items-center', !embedded && 'py-2 px-3', className);
</script>

<div {...restProps} class={base({ className })}>
  <div class={content()}>
    {@render children()}
  </div>
  {#if end}
    {@render end()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop end
@prop color = 'default'
@prop embedded
@prop class: className
@prop ...restProps
-->
