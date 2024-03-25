<script lang="ts">
  import type { Dismissable } from '$lib/types';
  import { type ComponentProps } from 'svelte';
  import { fade, type TransitionConfig } from 'svelte/transition';
  import Frame from './Frame.svelte';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame>, Dismissable {}

  // Export a prop through which you can set a desired svelte transition
  export let transition: TransitionFunc = fade;
  // Pass in extra transition params
  export let params: object = {};

  export let open: boolean = true;
  export let dismissable: boolean = false;

  function close(ev: MouseEvent | undefined) {
    if (ev?.stopPropagation) ev.stopPropagation();
    open = false;
  }
</script>

{#if dismissable}
  <Frame bind:open {transition} {params} {...$$restProps} on:show><slot {close} /></Frame>
{:else}
  <Frame {...$$restProps} on:show><slot /></Frame>
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
