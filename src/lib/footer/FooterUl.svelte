<script lang="ts">
  import { type FooterUlProps as Props, footerUl } from './';

  let { class: ulClass, children, ...attributes }: Props = $props();
  const base = $derived(footerUl({ class: ulClass }));
</script>

<ul
  {...attributes}
  class={base}
>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop class: ulClass
@prop children
@prop ...attributes
-->
