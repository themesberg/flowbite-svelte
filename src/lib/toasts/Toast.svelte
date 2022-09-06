<script lang="ts">
  import Frame from '$lib/utils/Frame.svelte';
  import classNames from 'classnames';
  import type { Colors } from '../types';
  import CloseButton from '../utils/CloseButton.svelte';
  import { fade } from 'svelte/transition';

  export let color: Colors = 'blue';
  export let simple: boolean = false;
  // Absolute position
  export let position: 'tl' | 'tr' | 'bl' | 'br' = undefined; // default not set
  export let visible = true;
  export let divClass: string = 'w-full max-w-xs p-4';

  $: classDiv = classNames(
    divClass,
    {
      'absolute top-5 left-5': position == 'tl',
      'absolute top-5 right-5': position == 'tr',
      'absolute bottom-5 left-5': position == 'bl',
      'absolute bottom-5 right-5': position == 'br'
    },
    $$props.class
  );

  let iconClass;
  $: iconClass = classNames('inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3');
</script>

{#if visible}
  <Frame rounded border transition={fade} {...$$restProps} class={classDiv} role="alert">
    <div class="flex {$$slots.extra ? 'items-start' : 'items-center'}">
      {#if $$slots.icon}
        <Frame {color} rounded class={iconClass}><slot name="icon" /></Frame>
      {/if}

      <div class="text-sm font-normal w-full">
        <slot />
        <slot name="extra" />
      </div>
      {#if !simple}
        <CloseButton on:click={() => (visible = false)} />
      {/if}
    </div>
  </Frame>
{/if}
