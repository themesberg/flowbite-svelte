<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { type MarkProps as Props, mark } from "./index";

  let { children, class: className, ...restProps }: Props = $props();
</script>

<mark {...restProps} class={twMerge(mark(), className)}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
-->
