<script lang="ts">
  import { type HeadingProps as Props, heading } from "./index";

  let { children, tag = "h1", class: className, ...restProps }: Props = $props();

  let headingClass = $derived(heading({ tag, className }));
</script>

<svelte:element this={tag} {...restProps} class={headingClass}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined = "h1";
@props:class: string;
-->
