<script lang="ts">
  import clsx from "clsx";
  import { type LabelProps as Props, label } from ".";

  let { children, color = "gray", show = true, class: className, ...restProps }: Props = $props();

  let base = $derived(label({ color, class: clsx(className) }));
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
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:color: any = "gray";
@props:show: any = true;
@props:class: string;
-->
