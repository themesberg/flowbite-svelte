<script lang="ts">
  import { onMount, getContext } from 'svelte';
  import type { TabCtxType } from './TabWrapper.svelte';
  import { writable } from 'svelte/store';

  export let contentDivClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
  export let open: boolean = false;

  const ctx = getContext<TabCtxType>('ctx') ?? {};

  // single selection
  let self: HTMLElement;
  const selected = ctx.selected ?? writable();

  //   onMount(() => {
  //     if (open) $selected = self;
  //   });
  function init(node: HTMLElement) {
    selected.set(node);
    return {
      destroy() {
        // node.appendChild($selected);
      }
    };
  }
</script>

<button on:click={() => (open = true)} type="button">
  <slot name="header" />
</button>

{#if open}
  <div use:init class={contentDivClass} role="tabpanel" aria-labelledby="id-tab">
    <slot />
  </div>
{/if}
