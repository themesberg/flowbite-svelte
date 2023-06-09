<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Popper from '../utils/Popper.svelte';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Popper> {
    title?: string;
    defaultClass?: string;
  }

  export let title: string = '';
  export let defaultClass: string = 'py-2 px-3';
</script>

<Popper
  activeContent
  border
  shadow
  rounded
  {...$$restProps}
  class="dark:!border-gray-600 {$$props.class}"
  on:show>
  {#if $$slots.title || title}
    <div
      class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
      <slot name="title">
        <h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
      </slot>
    </div>
  {/if}
  <div class={defaultClass}>
    <slot />
  </div>
</Popper>

<!--
  @component
  ## Features
  [Go to Popover](https://flowbite-svelte.com/docs/components/popover)
  ## Props
  @prop title: string = '';
  @prop defaultClass: string = 'py-2 px-3';
  ## Example
  ```
  <script>
    import { Popover, Button } from 'flowbite-svelte'
  </script>

  <Button  id="b1">Default popover</Button>
  <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#b1">
      And here's some amazing content. It's very engaging. Right?
  </Popover>
  ```
-->
