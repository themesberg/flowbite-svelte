<script lang="ts">
  import { footerLinkGroup } from ".";
  import clsx from "clsx";
  import { type FooterLinkGroupProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, children, ...restProps }: FooterLinkGroupProps = $props();

  const theme = getTheme("footerLinkGroup");
</script>

<ul {...restProps} class={footerLinkGroup({ class: clsx(theme, className) })}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L646)
## Props
@prop class: className
@prop children
@prop ...restProps
-->
