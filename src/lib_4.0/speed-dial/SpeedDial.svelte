<script context="module" lang="ts">
  import type { Placement } from '@floating-ui/dom';

  export interface SpeedCtxType {
    pill: boolean;
    tooltip: Placement | 'none';
    textOutside: boolean;
  }
</script>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Button from '$lib/buttons/Button.svelte';
  import Popper from '$lib/utils/Popper.svelte';
  import { setContext } from 'svelte';
  import generateId from '$lib/utils/generateId';
  import GradientButton from '$lib/buttons/GradientButton.svelte';

  type $$Props = ComponentProps<Button> & {
    defaultClass?: string;
    popperDefaultClass?: string;
    placement?: Placement;
    pill?: boolean;
    tooltip?: Placement | 'none';
    trigger?: 'hover' | 'click' | 'focus';
    textOutside?: boolean;
    id?: string;
    name?: string;
    gradient?: boolean;
    open?: boolean;
  };

  export let defaultClass: $$Props['defaultClass'] = 'fixed end-6 bottom-6';
  export let popperDefaultClass: $$Props['popperDefaultClass'] = 'flex items-center mb-4 gap-2';
  export let placement: NonNullable<$$Props['placement']> = 'top';
  export let pill: NonNullable<$$Props['pill']> = true;
  export let tooltip: NonNullable<$$Props['tooltip']> = 'left';
  export let trigger: $$Props['trigger'] = 'hover';
  export let textOutside: NonNullable<$$Props['textOutside']> = false;
  export let id: $$Props['id'] = generateId();
  export let name: $$Props['name'] = 'Open actions menu';
  export let gradient: $$Props['gradient'] = false;
  export let open: $$Props['open'] = false;

  setContext<SpeedCtxType>('speed-dial', { pill, tooltip, textOutside });

  let divClass: string;
  $: divClass = twMerge(defaultClass, 'group', $$props.class);

  let poperClass: string;
  $: poperClass = twMerge(popperDefaultClass, ['top', 'bottom'].includes(placement.split('-')[0]) && 'flex-col');
</script>

<div class={divClass}>
  <slot name="button">
    {#if gradient}
      <GradientButton {pill} {name} aria-controls={id} aria-expanded={open} {...$$restProps} class="p-3!">
        <slot name="icon">
          <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </slot>
        <span class="sr-only">{name}</span>
      </GradientButton>
    {:else}
      <Button {pill} {name} aria-controls={id} aria-expanded={open} {...$$restProps} class="p-3!">
        <slot name="icon">
          <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </slot>
        <span class="sr-only">{name}</span>
      </Button>
    {/if}
  </slot>
  <Popper {id} {trigger} arrow={false} color="none" activeContent {placement} class={poperClass} bind:open>
    <slot />
  </Popper>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let defaultClass: $$Props['defaultClass'] = 'fixed end-6 bottom-6';
@prop export let popperDefaultClass: $$Props['popperDefaultClass'] = 'flex items-center mb-4 gap-2';
@prop export let placement: NonNullable<$$Props['placement']> = 'top';
@prop export let pill: NonNullable<$$Props['pill']> = true;
@prop export let tooltip: NonNullable<$$Props['tooltip']> = 'left';
@prop export let trigger: $$Props['trigger'] = 'hover';
@prop export let textOutside: NonNullable<$$Props['textOutside']> = false;
@prop export let id: $$Props['id'] = generateId();
@prop export let name: $$Props['name'] = 'Open actions menu';
@prop export let gradient: $$Props['gradient'] = false;
@prop export let open: $$Props['open'] = false;
-->
