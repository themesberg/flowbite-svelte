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
  export let textOutsideClass: string =
    'block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2';
  export let textDefaultClass: string = 'block mb-px text-xs font-medium';

  let btnClass: string;
  $: btnClass = twMerge(
    btnDefaultClass,
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
  ## Features
  [Go to Speed Dial](https://flowbite-svelte.com/docs/components/speed-dial)
  ## Props
  @prop btnDefaultClass: string = 'w-[52px] h-[52px] shadow-sm !p-2';
  @prop name: string = '';
  @prop tooltip: Placement | 'none' = context.tooltip;
  @prop pill: boolean = context.pill;
  @prop textOutside: boolean = context.textOutside;
  @prop textOutsideClass: string = 'block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2';
  @prop textDefaultClass: string = 'block mb-px text-xs font-medium';
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
