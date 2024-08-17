<script lang="ts">
  import { type HelperProps as Props, helper } from '.';

  let {
    children,
    class: className,
    color = 'gray',
    ...attributes
  }: Props = $props();

  const base = $derived(helper({ color, className }));
</script>

<p
  {...attributes}
  class={base}
>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop color = 'gray'
@prop ...attributes
-->
