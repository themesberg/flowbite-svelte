<script lang="ts">
  import { label } from ".";
  import { type LabelProps, cn } from "$lib";

  let { children, color = "gray", show = true, class: className, ...restProps }: LabelProps = $props();

  let base = $derived(cn(label({ color }), className));
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
[LabelProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L841)
## Props
@prop children
@prop color = "gray"
@prop show = true
@prop class: className
@prop ...restProps
-->
