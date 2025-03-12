<script lang="ts">
  import clsx from "clsx";
  import { type LayoutProps as Props, layout } from "./index";

  let { children, class: className, ...restProps }: Props = $props();

  let classDiv = $derived(layout({ class: clsx(className) }));
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
