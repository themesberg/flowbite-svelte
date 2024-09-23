<script lang="ts">
  import { type DropdownProps as Props, dropdown } from './';
  import type { LinkType } from '../types';
  import { fly } from 'svelte/transition';
  import type { ParamsType } from '$lib/types';

  let { children, dropdownStatus = $bindable(), closeDropdown, class: className, backdropClass, params, transition = fly, ...restProps }: Props = $props();

  const { base, backdrop } = $derived(dropdown());
</script>

<!-- Dropdown menu -->
{#if dropdownStatus}
  <div class="flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2">
    <ul class={ulCls}>
      {#each items as item, index}
        <li>
          <slot {item} {index} />
        </li>
      {:else}
        <slot item={items[0]} index={0} />
      {/each}
    </ul>
    {#if full && $$slots.extra}<div class="md:w-1/3 mt-4 md:mt-0"><slot name="extra" /></div>{/if}
  </div>

  <div role="presentation" class={backdrop({ class: backdropClass })} onclick={closeDropdown}></div>
{/if}
