<script lang="ts">
  import { type LabelProps as Props, label } from '.';

  let { children, color = 'gray', show = true, class: className, ...restProps }: Props = $props();

  const base = $derived(label({ color, className }));
</script>

{#if show}
  <label {...restProps} class={base}>
    {@render children()}
  </label>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:color: any = 'gray';
@props:show: any = true;
@props:class: any;
-->
