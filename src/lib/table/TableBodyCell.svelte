<script lang="ts">
  import { type TableBodyCellProps as Props, tablebodycell } from './';

  let { children, color, class: className, colspan, onclick, ...restProps }: Props = $props();

  const base = $derived(tablebodycell({ className }));
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color
@prop class: className
@prop colspan
@prop onclick
@prop ...restProps
-->
