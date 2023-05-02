<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import Frame from '../utils/Frame.svelte';

  const dispatch = createEventDispatcher();

  export let divDefault: string = 'p-4 text-sm';
  export let dismissable: boolean = false;
  export let accent: boolean = false;

  let hidden = false;

  const handleHide = () => {
    hidden = !hidden;
    dispatch('close'); // preferred name
  };

  let divClass: string;
  $: divClass = classNames(
    divDefault,
    accent && 'border-t-4 ',
    hidden && 'hidden',
    $$props.class
  );

  $: {
    // set default values
    $$restProps.color = $$restProps.color ?? 'blue';
    $$restProps.rounded = $$restProps.rounded ?? !accent;
  }
</script>

<Frame {...$$restProps} class={divClass} role="alert">
  <div class="flex items-center">
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
    <div class:ml-3={$$slots.icon}>
      <slot />
    </div>

    {#if dismissable}
      <CloseButton
        class="-mx-1.5 -my-1.5"
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
