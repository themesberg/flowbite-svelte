<script context="module" lang="ts">
  import type { Placement } from '@floating-ui/dom';

  export interface SpeedCtxType {
    pill: boolean;
    tooltip: Placement | 'none';
    textOutside: boolean;
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Button from '$lib/buttons/Button.svelte';
  import Popper from '$lib/utils/Popper.svelte';
  import { setContext } from 'svelte';
  import generateId from '$lib/utils/generateId';
  import GradientButton from '$lib/buttons/GradientButton.svelte';

  export let defaultClass: string = 'fixed right-6 bottom-6';
  export let popperDefaultClass: string = 'flex items-center mb-4 gap-2';
  export let placement: Placement = 'top';
  export let pill: boolean = true;
  export let tooltip: Placement | 'none' = 'left';
  export let trigger: 'hover' | 'click' = 'hover';
  export let textOutside: boolean = false;
  export let id: string = generateId();
  export let name: string = 'Open actions menu';
  export let gradient: boolean = false;
  export let open: boolean = false;

  setContext<SpeedCtxType>('speed-dial', { pill, tooltip, textOutside });

  let divClass: string;
  $: divClass = twMerge(defaultClass, 'group', $$props.class);

  let poperClass: string;
  $: poperClass = twMerge(
    popperDefaultClass,
    ['top', 'bottom'].includes(placement.split('-')[0]) && 'flex-col'
  );

</script>

<div class={divClass}>
  {#if gradient}
    <GradientButton {pill} {name} aria-controls={id} aria-expanded={open} {...$$restProps} class="!p-3">
      <slot name="icon">
        <svg
          aria-hidden="true"
          class="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
      </slot>
      <span class="sr-only">{name}</span>
    </GradientButton>
  {:else}
    <Button {pill} {name} aria-controls={id} aria-expanded={open} {...$$restProps} class="!p-3">
      <slot name="icon">
        <svg
          aria-hidden="true"
          class="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
      </slot>
      <span class="sr-only">{name}</span>
    </Button>
  {/if}
  <Popper {id} {trigger} arrow={false} color="none" activeContent {placement} class={poperClass} bind:open>
    <slot />
  </Popper>
</div>

<!--
  @component
  ## Features
  [Go to Speed Dial](https://flowbite-svelte.com/docs/components/speed-dial)
  - Default speed dial
  - Colors
  - Square speed dial
  - Text inside button
  - Text outside button
  - Dropdown menu
  - Alternative menu
  - Alignment - Position
  - Triggering
  ## Props
  @prop defaultClass: string = 'fixed right-6 bottom-6';
  @prop popperDefaultClass: string = 'flex items-center mb-4 gap-2';
  @prop placement: Placement = 'top';
  @prop pill: boolean = true;
  @prop tooltip: Placement | 'none' = 'left';
  @prop trigger: 'hover' | 'click' = 'hover';
  @prop textOutside: boolean = false;
  @prop id: string = generateId();
  @prop name: string = 'Open actions menu';
  @prop gradient: boolean = false;
  ## Example
  ```
  <script>
    import { SpeedDial, SpeedDialButton } from 'flowbite-svelte'
  </script>

  <SpeedDial defaultClass="absolute right-6 bottom-6">
      <SpeedDialButton name="Share">
          <svg aria-hidden="true" class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
      </SpeedDialButton>
      <SpeedDialButton name="Print">
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
      </SpeedDialButton>
      <SpeedDialButton name="Download">
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
      </SpeedDialButton>
      <SpeedDialButton name="Copy">
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
      </SpeedDialButton>
  </SpeedDial>
  ```
-->
