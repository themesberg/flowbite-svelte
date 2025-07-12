<script lang="ts">
  import { footerLinkGroup } from ".";
  import { type FooterLinkGroupProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, children, ...restProps }: FooterLinkGroupProps = $props();

  const theme = getTheme("footerLinkGroup");
</script>

<ul {...restProps} class={cn(footerLinkGroup(), className, theme)}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L665)
## Props
@prop class: className
@prop children
@prop ...restProps
-->
