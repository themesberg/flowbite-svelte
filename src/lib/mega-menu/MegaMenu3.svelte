<script lang="ts">
  import clsx from "clsx";
  import { type MegaMenuProps as Props, megamenu } from ".";

  let { children, extra, items = [], full, open = $bindable(), class: className, ...restProps }: Props = $props();

  const { base, div, ul, footerDiv } = $derived(megamenu());
</script>

<!-- Dropdown menu -->
{#if open}
  <div {...restProps} class={base({ class: clsx(className) })}>
    <div class={div()}>
      <ul class={ul()}>
        {#each items as item, index}
          <li>
            {@render children({ item, index })}
          </li>
        {:else}
          {@render children({ item: items[0], index: 0 })}
        {/each}
      </ul>
      {#if full && extra}
        <div class={footerDiv()}>
          {@render extra()}
        </div>
      {/if}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:extra: any;
@props:items: any = [];
@props:full: any;
@props:open: any = $bindable();
@props:class: string;
-->
