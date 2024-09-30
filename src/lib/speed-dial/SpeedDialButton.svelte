<script lang="ts">
  import type { ComponentProps } from'svelte';
  import Button from '$lib/buttons/Button.svelte';
  import Tooltip from '$lib/tooltip/Tooltip.svelte';
  import type { Placement } from '@floating-ui/dom';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { SpeedCtxType } from './SpeedDial.svelte';

  type $$Props = ComponentProps<Button> & {
    defaultClass?: string;
    name?: string;
    tooltip?: Placement | 'none';
    pill?: boolean;
    textOutside?: boolean;
    textOutsideClass?: string;
    textDefaultClass?: string;
  }

  const context = getContext<SpeedCtxType>('speed-dial');

  export let btnDefaultClass: $$Props['defaultClass'] = 'w-[52px] h-[52px] shadow-sm !p-2';
  export let name: $$Props['name'] = '';
  export let tooltip: $$Props['tooltip'] = context.tooltip;
  export let pill: $$Props['pill'] = context.pill;
  export let textOutside: $$Props['textOutside'] = context.textOutside;
  export let textOutsideClass: $$Props['textOutsideClass'] = 'block absolute -start-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2';
  export let textDefaultClass: $$Props['textDefaultClass'] = 'block mb-px text-xs font-medium';
  
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
## Props
@prop export let btnDefaultClass: $$Props['defaultClass'] = 'w-[52px] h-[52px] shadow-sm !p-2';
@prop export let name: $$Props['name'] = '';
@prop export let tooltip: $$Props['tooltip'] = context.tooltip;
@prop export let pill: $$Props['pill'] = context.pill;
@prop export let textOutside: $$Props['textOutside'] = context.textOutside;
@prop export let textOutsideClass: $$Props['textOutsideClass'] = 'block absolute -start-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2';
@prop export let textDefaultClass: $$Props['textDefaultClass'] = 'block mb-px text-xs font-medium';
-->
