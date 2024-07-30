<script lang="ts">
  import {
    listPlaceholderVariants,
    type ListPlaceholderProps as Props
  } from './index';

  let {
    itemNumber = 5,
    size,
    rounded,
    class: className,
    ...attributes
  }: Props = $props();

  const { base, item, itemContent, itemTitle, itemSubtitle, itemExtra } =
    listPlaceholderVariants({ size, rounded });

  let items = [...Array(itemNumber).keys()];
</script>

<div role="status" class={base({ className })} {...attributes}>
  {#each items as _, i}
    <div class={item({ class: i > 0 ? 'pt-4' : '' })}>
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
@prop itemNumber = 5
@prop size
@prop rounded
@prop class: className
@prop ...attributes
-->
