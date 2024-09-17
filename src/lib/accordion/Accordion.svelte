<script lang="ts">
  import { setContext } from 'svelte';
  import { type AccordionProps as Props, accordion } from './';

  let { children, flush, activeClass, inactiveClass,  class: className, transition, params, ...restProps }: Props = $props();

  const ctx = {
    flush,
    activeClass,
    inactiveClass
  };

  setContext('ctx', ctx);

  const base = $derived(accordion({ flush, className }))
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop flush = false
@prop activeClass = ''
@prop inactiveClass = ''
@prop defaultClass = 'text-gray-500 dark:text-gray-400'
@prop class: className
@prop transition = undefined
@prop params
@prop ...restProps
-->
