<script lang="ts">
  import { setContext } from 'svelte';
  import { type AccordionProps as Props, accordion } from './';

  let { children, flush, activeClass, inactiveClass, class: className, transition, params, ...restProps }: Props = $props();

  const ctx = {
    flush,
    activeClass,
    inactiveClass
  };

  setContext('ctx', ctx);

  const base = $derived(accordion({ flush, className }));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop flush
@prop activeClass
@prop inactiveClass
@prop class: className
@prop transition
@prop params
@prop ...restProps
-->
