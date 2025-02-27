<script lang="ts">
  import { type LayoutProps as Props, layout } from "./index";

  let { children, class: className, ...restProps }: Props = $props();

  let classDiv = $derived(layout({ className }));
</script>

<div {...restProps} class={classDiv}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
-->
