<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { label } from ".";
  import type { LabelProps } from "$lib/types";

  let { children, color = "gray", show = true, class: className, ...restProps }: LabelProps = $props();

  let base = $derived(twMerge(label({ color }), clsx(className)));
</script>

{#if show}
  <label {...restProps} class={base}>
    {@render children()}
  </label>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LabelProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L806)
## Props
@prop children
@prop color = "gray"
@prop show = true
@prop class: className
@prop ...restProps
-->
