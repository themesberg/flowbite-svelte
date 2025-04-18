<script lang="ts">
  import clsx from "clsx";
  import { type HeadingProps as Props, heading } from "./index";

  let { children, tag = "h1", class: className, ...restProps }: Props = $props();

  let headingClass = $derived(heading({ tag, class: clsx(className) }));
</script>

<svelte:element this={tag} {...restProps} class={headingClass}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop tag = "h1"
@prop class: className
@prop ...restProps
-->
