<script lang="ts">
  import clsx from "clsx";
  import { type TableBodyCellProps as Props, tablebodycell } from "./";

  let { children, class: className, colspan, onclick, ...restProps }: Props = $props();

  const base = $derived(tablebodycell({ class: clsx(className) }));
</script>

<td {...restProps} class={base} colspan={colspan ?? 1}>
  {#if onclick}
    <button {onclick}>
      {#if children}
        {@render children()}
      {/if}
    </button>
  {:else if children}
    {@render children()}
  {/if}
</td>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
@props:colspan: any;
@props:onclick: any;
-->
