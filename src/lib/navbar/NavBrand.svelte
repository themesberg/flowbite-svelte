<script lang="ts">
  import clsx from "clsx";
  import { navbar_brand } from "./theme";
  import type { NavBrandProps as Props } from "./type";

  let { children, class: className, ...restProps }: Props = $props();
</script>

<a {...restProps} class={navbar_brand({ class: clsx(className) })}>
  {@render children?.()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
-->
