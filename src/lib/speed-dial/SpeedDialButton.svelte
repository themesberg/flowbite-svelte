<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import type { Placement } from '@floating-ui/dom';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { SpeedCtxType } from './SpeedDial.svelte';

  const context = getContext<SpeedCtxType>('speed-dial');

  export let btnDefaultClass: string = 'w-[52px] h-[52px] shadow-sm !p-2';
  export let name: string = '';
  export let tooltip: Placement | 'none' = context.tooltip;
  export let pill: boolean = context.pill;
  export let textOutside: boolean = context.textOutside;
  export let textOutsideClass: string = 'block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2';
  export let textDefaultClass: string = 'block mb-px text-xs font-medium';

  let btnClass: string;
  $: btnClass = twMerge(btnDefaultClass, tooltip === 'none' && 'flex-col', textOutside && 'relative', $$props.class);
</script>

<Button {pill} outline color="light" {...$$restProps} class={btnClass} on:click>
  <slot />
  {#if tooltip !== 'none'}
    <span class="sr-only">{name}</span>
  {:else if textOutside}
    <span class={textOutsideClass}>{name}</span>
  {:else}
    <span class={textDefaultClass}>{name}</span>
  {/if}
</Button>

{#if tooltip !== 'none'}
  <Tooltip placement={tooltip} style="dark">{name}</Tooltip>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let btnDefaultClass: string = 'w-[52px] h-[52px] shadow-sm !p-2';
@prop export let name: string = '';
@prop export let tooltip: Placement | 'none' = context.tooltip;
@prop export let pill: boolean = context.pill;
@prop export let textOutside: boolean = context.textOutside;
@prop export let textOutsideClass: string = 'block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2';
@prop export let textDefaultClass: string = 'block mb-px text-xs font-medium';
-->
