<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { type SecondaryProps as Props, secondary } from "./index";

  let { children, class: className, ...restProps }: Props = $props();
</script>

<small {...restProps} class={twMerge(secondary(), className)}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
-->
