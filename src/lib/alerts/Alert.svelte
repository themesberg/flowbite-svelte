<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher, type ComponentProps } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import Frame from '../utils/Frame.svelte';

  export let dismissable: boolean = false;
  export let accent: boolean = false;
  export let contentPosClass: string = 'flex items-center';
  export let closeBtnClass: string = '-mx-1.5 -my-1.5';
  export let borderTopClass: string = 'border-t-4';
  export let defaultTextClass: string = 'p-4 text-sm';

  const dispatch = createEventDispatcher();

  interface $$Props extends ComponentProps<Frame> {
    dismissable?: boolean;
    accent?: boolean;
  }

  let hidden = false;

  const handleHide = () => {
    hidden = !hidden;
    dispatch('close'); // preferred name
  };

  let divClass: string;
  $: divClass = classNames(defaultTextClass, accent && borderTopClass, hidden && 'hidden', $$props.class);

  $: {
    // set default values
    $$restProps.color = $$restProps.color ?? 'blue';
    $$restProps.rounded = $$restProps.rounded ?? !accent;
  }
</script>

<Frame {...$$restProps} class={divClass} role="alert">
  <div class={contentPosClass}>
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
    <div class:ml-3={$$slots.icon}>
      <slot />
    </div>

    {#if dismissable}
      <CloseButton
        class={closeBtnClass}
        color={$$restProps.color}
        on:click={handleHide}
        on:click
        on:change
        on:keydown
        on:keyup
        on:focus
        on:blur
        on:mouseenter
        on:mouseleave />
    {/if}
  </div>
  <slot name="extra" />
</Frame>

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
