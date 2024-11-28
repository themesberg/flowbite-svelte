<script lang="ts">
  import { type FooterUlProps as Props, footerUl } from "./";

  let { class: ulClass, children, ...restProps }: Props = $props();
  const base = $derived(footerUl({ class: ulClass }));
</script>

<ul {...restProps} class={base}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: class: string;
@props:children: any;
-->
