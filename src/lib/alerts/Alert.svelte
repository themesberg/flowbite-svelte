<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { createEventDispatcher, type ComponentProps } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import Frame from '../utils/Frame.svelte';
  import { fade } from 'svelte/transition';

  export let dismissable: boolean = false;
  export let defaultClass: string = 'p-4 gap-3 text-sm';

  const dispatch = createEventDispatcher();

  interface $$Props extends ComponentProps<Frame> {
    dismissable?: boolean;
  }

  let open = true;

  const close = () => {
    open = false;
    dispatch('close'); // preferred name
  };

  let divClass: string;
  $: divClass = twMerge(defaultClass, ($$slots.icon || dismissable) && 'flex items-center', $$props.class);

  $: {
    // set default values
    $$restProps.color = $$restProps.color ?? 'primary';
    $$restProps.rounded = $$restProps.rounded ?? true;
    if (dismissable) $$restProps.transition = $$restProps.transition ?? fade;
  }
</script>

{#if open}
  <Frame {...$$restProps} class={divClass} role="alert">
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}

    {#if $$slots.icon || dismissable}
      <div><slot /></div>
    {:else}
      <slot />
    {/if}

    {#if dismissable}
      <slot name="close-button" {close}>
        <CloseButton
          class="-my-1.5 dark:hover:bg-gray-700"
          color={$$restProps.color}
          on:click={close}
          on:click
          on:change
          on:keydown
          on:keyup
          on:focus
          on:blur
          on:mouseenter
          on:mouseleave />
      </slot>
    {/if}
  </Frame>
{/if}

<!--
  @component
  ## Features
  [Go to Alert](https://flowbite-svelte.com/docs/components/alert)
  - Default alert
  - Alerts with icon
  - Bordered alerts
  - Alerts with list
  - Dismissable alerts
  - Border accent
  - Additional content
  - Custom color
  ## Props
  @prop dismissable: boolean = false;
  @prop accent: boolean = false;
  ## Event
  - on:click
  - on:change
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave 

  ## Example
  ```
  <script>
  import {Alert} from "flowbite-svelte";
  </script>

  <Alert>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="red">
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </Alert>
  ```
-->
