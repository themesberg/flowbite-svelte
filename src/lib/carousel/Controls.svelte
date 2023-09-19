<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { State } from './Carousel.svelte';
  import ControlButton from './ControlButton.svelte';
  import { twMerge } from 'tailwind-merge';

  const state = getContext<Writable<State>>('state');

  function changeSlide(forward: boolean) {
    return function (ev: Event) {
      if (ev.isTrusted) $state.index = forward ? $state.index + 1 : $state.index - 1;
    };
  }
</script>

<!-- Slider controls -->
<slot {ControlButton} {changeSlide}>
  <ControlButton name="Previous" forward={false} on:click={changeSlide(false)} class={twMerge($$props.class)} />
  <ControlButton name="Next" forward={true} on:click={changeSlide(true)} class={twMerge($$props.class)} />
</slot>
