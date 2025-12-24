<script lang="ts">
  import { label } from "./theme";
  import clsx from "clsx";
  import type { LabelProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, color = "gray", show = true, class: className, ...restProps }: LabelProps = $props();

  const theme = $derived(getTheme("label"));

  let base = $derived(label({ color, class: clsx(theme, className) }));
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
[LabelProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L846)
## Props
@prop children
@prop color = "gray"
@prop show = true
@prop class: className
@prop ...restProps
-->
