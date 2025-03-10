<script lang="ts">
  import clsx from "clsx";
  import { type MegaMenuProps as Props, megamenu } from ".";

  let { children, footer, items = [], full, open = $bindable(), class: className, ...restProps }: Props = $props();

  const { base, div, ul, footerDiv } = $derived(megamenu());
  $inspect("open", open);
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
      {#if full && footer}
        <div class={footerDiv()}>
          {@render footer()}
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
@props:footer: any;
@props:items: any = [];
@props:full: any;
@props:open: any = $bindable();
@props:class: string;
-->
