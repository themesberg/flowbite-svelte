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
  export let titleCntClass: string =
    'py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700';
  export let titleTextClass: string = 'font-semibold text-gray-900 dark:text-white';
</script>

<Popper activeContent border shadow rounded {...$$restProps} class={$$props.class} on:show>
  {#if $$slots.title || title}
    <div class={titleCntClass}>
      <slot name="title">
        <h3 class={titleTextClass}>{title}</h3>
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
