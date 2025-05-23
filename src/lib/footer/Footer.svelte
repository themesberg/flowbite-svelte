<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { footer } from ".";
  import type { FooterProps } from "$lib/types";

  let { children, footerType = "default", class: className, ...restProps }: FooterProps = $props();

  const footerCls = $derived(footer({ footerType }));
</script>

<footer {...restProps} class={twMerge(footerCls, clsx(className))}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L636)
## Props
@prop children
@prop footerType = "default"
@prop class: className
@prop ...restProps
-->
