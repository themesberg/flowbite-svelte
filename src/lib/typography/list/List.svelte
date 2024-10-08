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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:tag: VariantProps<typeof list>['tag'] = 'ul';
@props:isContenteditable: boolean = false;
@props:position: VariantProps<typeof list>['position'] = 'inside';
@props:ctxClass: string;
@props:class: string;
-->
