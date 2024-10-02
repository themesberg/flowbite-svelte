<script lang="ts">
  import { setContext } from 'svelte';
  import { type AccordionProps as Props, accordion } from './';

  let { children, flush, activeClass, inactiveClass, isSingle = true, class: className, transition, params, ...restProps }: Props = $props();

  const ctx = {
    flush,
    activeClass,
    inactiveClass,
    isSingle
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
@props: children: any;
@props:flush: any;
@props:activeClass: any;
@props:inactiveClass: any;
@props:isSingle: any = true;
@props:class: any;
@props:transition: any;
@props:params: any;
-->
