<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import type { Placement } from '@popperjs/core';
  import classNames from 'classnames';
  import { getContext } from 'svelte';

  export let name: string = '';
  export let placement: Placement | 'none';
  export let rounded: boolean | undefined = undefined;

  $: rounded = rounded ?? getContext('speed-dial')?.rounded;
  $: placement = placement ?? getContext('speed-dial')?.placement;

  let btnClass: string;
  $: btnClass = classNames(
    'w-[52px] h-[52px] shadow-sm !p-2',
    placement === 'none' && 'flex-col',
    $$props.class
  );
</script>

<Button pill={!rounded} outline color="light" {...$$restProps} class={btnClass}>
  <slot />
  {#if placement === 'none'}
    <span class="block mb-px text-xs font-medium">{name}</span>
  {:else}
    <span class="sr-only">{name}</span>
  {/if}
</Button>

{#if placement !== 'none'}
  <Tooltip {placement}>{name}</Tooltip>
{/if}
