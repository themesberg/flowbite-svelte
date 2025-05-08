<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { widgetPlaceholder } from "./index";
  import clsx from "clsx";

  let { class: className }: HTMLAttributes<HTMLDivElement> = $props();
  const { base, wrapper, vLine, hLine } = widgetPlaceholder({});
</script>

<div role="status" class={base({ class: clsx(className) })}>
  <div class={hLine({ class: "mb-2.5 h-2.5 w-32" })}></div>
  <div class={hLine({ class: "mb-10 h-2 w-48" })}></div>
  <div class={wrapper()}>
    <div class={vLine({ class: "h-72" })}></div>
    <div class={vLine({ class: "h-56" })}></div>
    <div class={vLine({ class: "h-72" })}></div>
    <div class={vLine({ class: "h-64" })}></div>
    <div class={vLine({ class: "h-80" })}></div>
    <div class={vLine({ class: "h-72" })}></div>
    <div class={vLine({ class: "h-80" })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
