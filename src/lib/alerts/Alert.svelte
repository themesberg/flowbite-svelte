<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import Frame from '../utils/Frame.svelte';

  const dispatch = createEventDispatcher();

  export let color:
    | 'gray'
    | 'blue'
    | 'red'
    | 'green'
    | 'yellow'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'dark'
    | 'custom' = 'blue';
  export let dismissable: boolean = false;
  export let rounded: boolean = true;
  export let accent: boolean = false;

  let hidden = false;

  const handleHide = () => {
    hidden = !hidden;
    dispatch('handleAlert');
    dispatch('close'); // preffered name
  };

  let divClass: string;
  $: divClass = classNames(
    'p-4 text-sm',
    accent && 'border-t-4 ',
    hidden && 'hidden',
    $$props.class
  );
</script>

<Frame {color} {rounded} {...$$restProps} class={divClass} role="alert">
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
        {color}
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
