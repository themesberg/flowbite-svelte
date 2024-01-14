<script lang="ts">
  import { fade, type TransitionConfig } from 'svelte/transition';
  import Frame from './Frame.svelte';
  import { createEventDispatcher, type ComponentProps } from 'svelte';
  import type { Dismissable } from '$lib/types';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame>, Dismissable {
    transition?: TransitionFunc;
    params?: any;
  }

  // Export a prop through which you can set a desired svelte transition
  export let transition: TransitionFunc = fade;
  // Pass in extra transition params
  export let params: object = {};

  export let open: boolean = true;
  export let dismissable: boolean = false;

  const dispatch = createEventDispatcher();
  $: dispatch(open ? 'open' : 'close');

  function close(ev: MouseEvent | undefined) {
    if (ev?.stopPropagation) ev.stopPropagation();
    open = false;
  }
</script>

{#if dismissable}
  {#if open}
    <div transition:transition={params}>
      <Frame {...$$restProps}><slot {close} /></Frame>
    </div>
  {/if}
{:else}
  <Frame {...$$restProps}><slot {close} /></Frame>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let transition: TransitionFunc = fade;
@prop export let params: object = {};
@prop export let open: boolean = true;
@prop export let dismissable: boolean = false;
-->
