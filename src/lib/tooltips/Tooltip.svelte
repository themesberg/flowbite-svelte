<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Popper from '../utils/Popper.svelte';
  import { twMerge } from 'tailwind-merge';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Popper> {
    type?: 'dark' | 'light' | 'auto' | 'custom';
    defaultClass?: string;
  }

  export let type: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
  export let defaultClass: string = 'py-2 px-3 text-sm font-medium';

  const types = {
    dark: 'bg-gray-900 text-white dark:bg-gray-700',
    light: 'border-gray-200 bg-white text-gray-900',
    auto: ' bg-white text-gray-900 dark:bg-gray-700 dark:text-white border-gray-200 dark:border-gray-700',
    custom: ''
  };

  let toolTipClass: string;
  $: {
    if ($$restProps.color) type = 'custom';
    else $$restProps.color = 'none';

    if (['light', 'auto'].includes(type)) $$restProps.border = true;
    toolTipClass = twMerge('tooltip', defaultClass, types[type], $$props.class);
  }
</script>

<Popper rounded shadow {...$$restProps} class={toolTipClass} on:show>
  <slot />
</Popper>

<!--
  @component
  ## Features
  [Go to ](https://flowbite-svelte.com/docs/components/tooltip)
  - Setup
  - Default tooltip example
  - Tooltip styles
  - Placement
  - Triggering
  - Disable arrow
  - Custom style
  ## Props
  @prop type: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
  @prop defaultClass: string = 'py-2 px-3 text-sm font-medium';
  ## Example
  ```
  <script>
    import { Tooltip, Button } from 'flowbite-svelte';
  </script>
  
  <Button>Default tooltip</Button>
  <Tooltip>Tooltip content</Tooltip>
  ```
-->
