<script lang="ts">
  import { listPlaceholder, type ListPlaceholderProps as Props } from "./index";

  let { itemNumber = 5, size = "md", rounded, class: className, ...restProps }: Props = $props();

  const { base, item, itemContent, itemTitle, itemSubtitle, itemExtra } = $derived(listPlaceholder({ size, rounded }));

  let items = $derived([...Array(itemNumber).keys()]);
</script>

<div role="status" {...restProps} class={base({ className })}>
  {#each items as _, i}
    <div class={item({ class: i > 0 ? "pt-4" : "" })}>
      <div class={itemContent()}>
        <div class={itemTitle()}></div>
        <div class={itemSubtitle()}></div>
      </div>
      <div class={itemExtra()}></div>
    </div>
  {/each}
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: itemNumber: number = 5;
@props:size: VariantProps<typeof imagePlaceholder>['size'] = 'md';
@props:rounded: VariantProps<typeof imagePlaceholder>['rounded'];
@props:class: string;
-->
