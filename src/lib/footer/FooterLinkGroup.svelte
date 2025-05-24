<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { footerLinkGroup } from ".";
  import type { FooterLinkGroupProps } from "$lib/types";

  let { class: className, children, ...restProps }: FooterLinkGroupProps = $props();
</script>

<ul {...restProps} class={twMerge(footerLinkGroup(), clsx(className))}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L669)
## Props
@prop class: ulClass
@prop children
@prop ...restProps
-->
