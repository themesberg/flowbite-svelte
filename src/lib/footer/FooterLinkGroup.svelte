<script lang="ts">
  import { footerLinkGroup } from "./theme";
  import clsx from "clsx";
  import type { FooterLinkGroupProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { class: className, children, ...restProps }: FooterLinkGroupProps = $props();

  const theme = $derived(getTheme("footerLinkGroup"));
</script>

<ul {...restProps} class={footerLinkGroup({ class: clsx(theme, className) })}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L708)
## Props
@prop class: className
@prop children
@prop ...restProps
-->
