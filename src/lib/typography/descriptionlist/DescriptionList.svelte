<script lang="ts">
  import clsx from "clsx";
  import { descriptionList } from "./index";
  import type { DescriptionListProps } from "$lib/types";

  let { children, tag, class: className, ...restProps }: DescriptionListProps = $props();

  let classDesc = $derived(
    descriptionList({
      tag,
      class: clsx(className)
    })
  );
</script>

<svelte:element this={tag} {...restProps} class={classDesc}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DescriptionListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1727)
## Props
@prop children
@prop tag
@prop class: className
@prop ...restProps
-->
