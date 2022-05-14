<script lang="ts">
  import { Tooltip } from '$lib';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  const collapsed = getContext<Writable<boolean>>('collapsed');
</script>

<li data-testid="sidebar-item">
  {#if $collapsed === true}
    <Tooltip data-testid="sidebar-item-tooltip" placement="right">
      <slot />
      <div slot="content">
        <slot name="tooltip" />
      </div>
    </Tooltip>
  {:else}
    <slot />
  {/if}
</li>
