<script lang="ts">
  import clsx from "clsx";
  import { type DescriptionListProps as Props, descriptionList } from "./index";

  let { children, tag, class: className, ...restProps }: Props = $props();

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
## Props
@props: children: any;
@props:tag: any;
@props:class: string;
-->
