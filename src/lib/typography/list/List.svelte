<script lang="ts">
  import { setContext } from "svelte";
  import { type ListProps as Props, list } from "./index";

  let { children, tag = "ul", isContenteditable = false, position = "inside", ctxClass, class: className, ...restProps }: Props = $props();

  let contextClass = $state(ctxClass || "");

  setContext("ctxClass", () => contextClass);

  $effect(() => {
    contextClass = ctxClass || "";
  });

  let classList = $derived(list({ position, tag, className }));
</script>

<svelte:element this={tag} {...restProps} class={classList} contenteditable={isContenteditable}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:tag: any = "ul";
@props:isContenteditable: any = false;
@props:position: any = "inside";
@props:ctxClass: any;
@props:class: string;
-->
