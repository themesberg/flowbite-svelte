<script lang="ts">
  import clsx from "clsx";
  import { type ActivityProps as Props, activity } from "./index";

  let { children, class: className, ...restProps }: Props = $props();
  const base = activity({ class: clsx(className) });
</script>

<ol {...restProps} class={base}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string;
-->
