<script lang="ts">
  import { type AnchorProps as Props, anchor } from "./index";

  let { children, color = "primary", class: className, ...restProps }: Props = $props();
  let linkClass = $derived(anchor({ color, className }));
</script>

<a {...restProps} class={linkClass}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:color: any = "primary";
@props:class: string;
-->
