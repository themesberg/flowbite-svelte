<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { testimonialPlaceholder } from ".";
  import clsx from "clsx";

  let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
  const { wrapper, line1, line2, svg, subContent } = testimonialPlaceholder();
</script>

<div role="status" {...restProps} class={wrapper({ class: clsx(className) })}>
  <div class={line2({ class: "mx-auto mb-2.5 h-2.5 max-w-[640px]" })}></div>
  <div class={line2({ class: "mx-auto h-2.5 max-w-[540px]" })}></div>
  <div class={subContent()}>
    <svg class={svg()} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
    </svg>
    <div class={line1({ class: "me-3 h-2.5 w-20" })}></div>
    <div class={line1({ class: "h-2 w-24" })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
