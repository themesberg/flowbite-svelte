<script lang="ts">
  import type { BasePlacement, Placement } from '@popperjs/core';
  import ChevronDown from './ChevronDown.svelte';
  import ChevronLeft from './ChevronLeft.svelte';
  import ChevronUp from './ChevronUp.svelte';
  import ChevronRight from './ChevronRight.svelte';
  import Wrapper from './Wrapper.svelte';
  import type { ComponentType } from 'svelte';

  export let placement: Placement = 'bottom';
  export let aligned: boolean = false;

  const icons = {
    top: ChevronUp,
    right: ChevronRight,
    bottom: ChevronDown,
    left: ChevronLeft
  };

  let icon: ComponentType;
  $: icon = icons[placement.split('-')[0] as BasePlacement] ?? ChevronDown;
</script>

<Wrapper class="flex items-center justify-between" show={aligned}>
  {#if placement.split('-')[0] === 'left'}
    <ChevronLeft class="h-4 w-4 mr-2" />
    <slot />
  {:else}
    <slot />
    <svelte:component this={icon} class="h-4 w-4 ml-2" />
  {/if}
</Wrapper>
