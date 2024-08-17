<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type LabelProps as Props, label } from '.';
  // interface Props extends HTMLLabelAttributes {
  //   children: Snippet;
  //   color?: 'gray' | 'green' | 'red' | 'disabled';
  //   show?: boolean;
  //   class?: string | undefined;
  //   for?: string | undefined | null;
  // }

  let {
    children,
    color = 'gray',
    show = true,
    class: className,
    ...restProps
  }: Props = $props();

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
@prop children
@prop color = 'gray'
@prop show = true
@prop class: className
@prop ...restProps
-->
