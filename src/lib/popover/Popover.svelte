<script lang="ts">
  import type Frame from '$lib/utils/Frame.svelte';
  import Popper from '../utils/Popper.svelte';
  import type { ComponentProps } from 'svelte';

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame> {}

  export let title: string = '';
  export let defaultClass: string = 'py-2 px-3';
</script>

<Popper data-popover activeContent border shadow rounded {...$$restProps} class={$$props.class} on:show>
  {#if $$slots.title || title}
    <div
      class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
      <slot name="title">
        <h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
      </slot>
    </div>
  {/if}
  <div class={defaultClass}>
    <slot />
  </div>
</Popper>
