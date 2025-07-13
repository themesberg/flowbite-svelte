<script lang="ts">
  import { label } from ".";
  import { type LabelProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, color = "gray", show = true, class: className, ...restProps }: LabelProps = $props();

  const theme = getTheme("label");

  let base = $derived(cn(label({ color }), className, theme));
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
[LabelProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L820)
## Props
@prop children
@prop color = "gray"
@prop show = true
@prop class: className
@prop ...restProps
-->
