<script lang="ts">
  import { type DropdownFooterProps as Props, dropdownFooter } from ".";

  let { children, class: className, ...restProps }: Props = $props();
  let footerClass = $derived(dropdownFooter({ class: className }));
</script>

<div {...restProps} class={footerClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
-->
