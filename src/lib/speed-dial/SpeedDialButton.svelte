<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import type { Placement } from '@popperjs/core';
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import type { SpeedCtxType } from './SpeedDial.svelte';

  export let name: string = '';
  export let tooltip: Placement | 'none';
  export let pill: boolean | undefined = undefined;
  export let textOutside: boolean | undefined = undefined;

  const context = getContext<SpeedCtxType>('speed-dial');

  $: {
    // set defaults
    pill = pill ?? context?.pill ?? true;
    tooltip = tooltip ?? context?.tooltip ?? 'left';
    textOutside = textOutside ?? context?.textOutside ?? false;
  }

  let btnClass: string;
  $: btnClass = classNames(
    'w-[52px] h-[52px] shadow-sm !p-2',
    tooltip === 'none' && 'flex-col',
    textOutside && 'relative',
    $$props.class
  );
</script>

<Button {pill} outline color="light" {...$$restProps} class={btnClass} on:click>
  <slot />
  {#if tooltip !== 'none'}
    <span class="sr-only">{name}</span>
  {:else if textOutside}
    <span class="block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2">{name}</span>
  {:else}
    <span class="block mb-px text-xs font-medium">{name}</span>
  {/if}
</Button>

{#if tooltip !== 'none'}
  <Tooltip placement={tooltip} style="dark">{name}</Tooltip>
{/if}
