<script lang="ts">
  import {
    widgetPlaceholderVariants,
    type WidgetPlaceholderProps as Props
  } from './index';

  let { class: className }: Props = $props();
  const { base, wrapper, vLine, hLine } = widgetPlaceholderVariants({});
</script>

<div role="status" class={base({ className })}>
  <div class={hLine({ class: 'mb-2.5 h-2.5 w-32' })}></div>
  <div class={hLine({ class: 'mb-10 h-2 w-48' })}></div>
  <div class={wrapper()}>
    <div class={vLine({ class: 'h-72' })}></div>
    <div class={vLine({ class: 'h-56' })}></div>
    <div class={vLine({ class: 'h-72' })}></div>
    <div class={vLine({ class: 'h-64' })}></div>
    <div class={vLine({ class: 'h-80' })}></div>
    <div class={vLine({ class: 'h-72' })}></div>
    <div class={vLine({ class: 'h-80' })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop class: className
-->
