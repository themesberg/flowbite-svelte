<script lang="ts">
  import clsx from "clsx";
  import { descriptionList } from "./index";
  import type { DescriptionListProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, tag, class: className, ...restProps }: DescriptionListProps = $props();

  const theme = getTheme("descriptionList");

  let descCls = $derived(
    descriptionList({
      tag,
      class: clsx(theme, className)
    })
  );
</script>

<svelte:element this={tag} {...restProps} class={descCls}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DescriptionListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1857)
## Props
@prop children
@prop tag
@prop class: className
@prop ...restProps
-->
