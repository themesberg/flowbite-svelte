<script lang="ts">
  import { type MegaMenuProps as Props, megamenu } from '.';
  import { fly } from 'svelte/transition';

  let { children, footer, items = [], full, dropdownStatus = $bindable(), class: className, backdropClass, params, transition = fly, ...restProps }: Props = $props();

  const { base, div, ul, footerDiv } = $derived(megamenu());
  $inspect('dropdownStatus', dropdownStatus);
</script>

<!-- Dropdown menu -->
{#if dropdownStatus}
  <div class={base({ className })}>
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop footer
@prop items = []
@prop full
@prop dropdownStatus = $bindable()
@prop class: className
@prop backdropClass
@prop params
@prop transition = fly
@prop ...restProps
-->
