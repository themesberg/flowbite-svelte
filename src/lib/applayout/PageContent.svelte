<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let scrollbarGutter = 'auto';
  const pageDiv = 'flex-1 overflow-x-hidden flex flex-col';
</script>

<!-- Page content -->
<div id="page" class={twMerge(pageDiv, scrollbarGutter)} on:scroll>
  <!-- Add PageHeader here -->
  <!-- Slot: Page Content (default) -->
  <main id="page-content" class="flex-auto {$$props.class} " {...$$restProps} >
    <slot />
  </main>
  <!-- Add Page Footer here -->
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let scrollbarGutter = 'auto';
-->
