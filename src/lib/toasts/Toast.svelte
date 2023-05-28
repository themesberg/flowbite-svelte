<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import classNames from 'classnames';
  import CloseButton from '../utils/CloseButton.svelte';
  import { fade } from 'svelte/transition';

  // propagate props type from underying Frame
  interface $$Props extends ComponentProps<Frame> {
    simple?: boolean;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
    open?: boolean;
    divClass?: string;
  }

  export let simple: boolean = false;
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  export let open: boolean = true;
  export let divClass: string = 'w-full max-w-xs p-4';
  export let defaultIconClass: string = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3';

  $: {
    // override default Frame value
    $$restProps.color = $$restProps.color ?? 'blue';
  }

  const positions = {
    'top-left': 'absolute top-5 left-5',
    'top-right': 'absolute top-5 right-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'bottom-right': 'absolute bottom-5 right-5',
    none: ''
  };

  let classDiv: string;
  $: classDiv = classNames(divClass, positions[position], $$props.class);

  let iconClass: string;
  $: iconClass = classNames(defaultIconClass);
</script>

{#if open}
  <Frame rounded border transition={fade} {...$$restProps} class={classDiv} role="alert">
    <div class="flex {$$slots.extra ? 'items-start' : 'items-center'}">
      {#if $$slots.icon}
        <Frame rounded class={iconClass}><slot name="icon" /></Frame>
      {/if}

      <div class="text-sm font-normal w-full">
        <slot />
        <slot name="extra" />
      </div>
      {#if !simple}
        <CloseButton on:click={() => (open = false)} />
      {/if}
    </div>
  </Frame>
{/if}

<!--
  @component
  ## Features
  [Go to Toast](https://flowbite-svelte.com/docs/components/toast)
  - Setup
  - Default toast
  - Simple toast
  - Colors
  - Icons
  - Autohide example
  - Transitions
  - Blur examples
  - Fly examples
  - Undo button
  - Extra content
  - Toast message
  - Push notification
  - Interactive toast
  - Positioning
  ## Props
  @prop simple: boolean = false;
  @prop position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  @prop open: boolean = true;
  @prop divClass: string = 'w-full max-w-xs p-4';
  @prop defaultIconClass: string = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3';
  ## Example
  ```
  <script>
    import { Toast } from 'flowbite-svelte';
  </script>
  <Toast>
    <svelte:fragment slot="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    </svelte:fragment>
    Dismissable user notification.
  </Toast>
  ```
-->
