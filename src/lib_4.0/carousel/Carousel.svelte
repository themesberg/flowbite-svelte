<script lang="ts" context="module">
  export type State = {
    images: HTMLImgAttributes[];
    index: number;
    lastSlideChange: Date;
    slideDuration: number; // ms
    forward: boolean;
  };
</script>

<script lang="ts">
  import { createEventDispatcher, onMount, setContext } from 'svelte';
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import type { TransitionConfig } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import Controls from './Controls.svelte';
  import Indicators from './Indicators.svelte';
  import Slide from './Slide.svelte';
  import { canChangeSlide } from './CarouselSlide';
  import type { ParamsType } from '../types'

  type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;
  const SLIDE_DURATION_RATIO = 0.25; // TODO: Expose one day?

  export let images: HTMLImgAttributes[];
  export let index: number = 0;
  export let slideDuration: number = 1000;
  export let transition: TransitionFunc | null = null;
  export let duration: number = 0;
  export let ariaLabel: string = 'Draggable Carousel';
  export let disableSwipe: boolean = false;

  // Carousel
  let divClass: string = 'grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96';
  export let imgClass: string = '';

  const dispatch = createEventDispatcher();

  const { set, subscribe, update } = writable<State>({ images, index, forward: true, slideDuration, lastSlideChange: new Date() });

  const state = { set: (_state: State) => set({ index: _state.index, images: _state.images, lastSlideChange: new Date(), slideDuration, forward }), subscribe, update };

  let forward = true;

  setContext('state', state);

  subscribe((_state) => {
    index = _state.index;
    forward = _state.forward;
    dispatch('change', images[index]);
  });

  onMount(() => {
    dispatch('change', images[index]);
  });

  const nextSlide = () => {
    update((_state) => {
      if (!canChangeSlide({ lastSlideChange: _state.lastSlideChange, slideDuration, slideDurationRatio: SLIDE_DURATION_RATIO })) return _state;

      _state.index = _state.index >= images.length - 1 ? 0 : _state.index + 1;
      _state.lastSlideChange = new Date();
      return { ..._state };
    });
  };

  const prevSlide = () => {
    update((_state) => {
      if (!canChangeSlide({ lastSlideChange: _state.lastSlideChange, slideDuration, slideDurationRatio: SLIDE_DURATION_RATIO })) return _state;

      _state.index = _state.index <= 0 ? images.length - 1 : _state.index - 1;
      _state.lastSlideChange = new Date();
      return { ..._state };
    });
  };

  const loop = (node: HTMLElement, duration: number) => {
    carouselDiv = node; // used by DragStart

    // loop timer
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    let intervalId: any;

    if (duration > 0) intervalId = setInterval(nextSlide, duration);

    return {
      update: (duration: number) => {
        clearInterval(intervalId);
        if (duration > 0) intervalId = setInterval(nextSlide, duration);
      },
      destroy: () => clearInterval(intervalId)
    };
  };

  type ActiveDragGesture = {
    start: number;
    position: number;
    width: number;
    timestamp: number;
  };

  let activeDragGesture: ActiveDragGesture | undefined;

  let carouselDiv: HTMLElement;
  let percentOffset: number = 0;
  let touchEvent: MouseEvent | TouchEvent | null = null;

  const getPositionFromEvent = (evt: MouseEvent | TouchEvent) => {
    const mousePos = (evt as MouseEvent)?.clientX;
    if (mousePos) return mousePos;

    let touchEvt = evt as TouchEvent;
    if (/^touch/.test(touchEvt?.type)) {
      return touchEvt.touches[0].clientX;
    }
  };

  const onDragStart = (evt: MouseEvent | TouchEvent) => {
    if (disableSwipe) return;
    /* eslint-disable  @typescript-eslint/no-unused-expressions */
    touchEvent = evt;
    evt.cancelable && evt.preventDefault();
    const start = getPositionFromEvent(evt);
    const width = carouselDiv.getBoundingClientRect().width;
    if (start === undefined || width === undefined) return;
    activeDragGesture = {
      start,
      position: start,
      width,
      timestamp: Date.now()
    };
  };

  $: onDragMove =
    activeDragGesture === undefined
      ? undefined
      : (evt: MouseEvent | TouchEvent) => {
          const position = getPositionFromEvent(evt);
          if (!activeDragGesture || position === undefined) return;
          const { start, width } = activeDragGesture;
          percentOffset = Math.min(100, Math.max(-100, ((position - start) / width) * 100));
          activeDragGesture.position = position;
        };

  $: onDragStop =
    activeDragGesture === undefined
      ? undefined
      : (evt: MouseEvent | TouchEvent) => {
          // These might be exposed one day, keep them safely tucked away as constants.
          const SWIPE_MAX_DURATION = 250;
          const SWIPE_MIN_DISTANCE = 30;
          const DRAG_MIN_PERCENT = 50;

          if (activeDragGesture) {
            const { timestamp, position, start } = activeDragGesture;
            const duration = Date.now() - timestamp;
            const distance = position - start;

            if (Math.abs(distance) >= SWIPE_MIN_DISTANCE && duration <= SWIPE_MAX_DURATION && duration > 0) {
              if (distance > 0) prevSlide();
              else nextSlide();
            } else if (percentOffset > DRAG_MIN_PERCENT) prevSlide();
            else if (percentOffset < -DRAG_MIN_PERCENT) nextSlide();
            else {
              // Only issue click event for touches
              if (touchEvent?.constructor.name === 'TouchEvent') {
                // The gesture is a tap not drag, so manually issue a click event to trigger tap click gestures lost via preventDefault
                touchEvent?.target?.dispatchEvent(
                  new Event('click', {
                    bubbles: true
                  })
                );
              }
            }
          }

          percentOffset = 0;
          activeDragGesture = undefined;
          touchEvent = null;
        };
</script>

<!-- Preload all Carousel images for improved responsivity -->
<svelte:head>
  {#if images.length > 0}
    {#each images as image}
      <link rel="preload" href={image.src} as="image" />
    {/each}
  {/if}
</svelte:head>

<!-- The move listeners go here, so things keep working if the touch strays out of the element. -->
<svelte:document on:mousemove={onDragMove} on:mouseup={onDragStop} on:touchmove={onDragMove} on:touchend={onDragStop} />
<div bind:this={carouselDiv} class="relative" on:mousedown|nonpassive={onDragStart} on:touchstart|nonpassive={onDragStart} on:mousemove={onDragMove} on:mouseup={onDragStop} on:touchmove={onDragMove} on:touchend={onDragStop} role="button" aria-label={ariaLabel} tabindex="0">
  <div {...$$restProps} class={twMerge(divClass, activeDragGesture === undefined ? 'transition-transform' : '', $$props.class)} use:loop={duration}>
    <slot name="slide" {Slide} {index}>
      <Slide image={images[index]} class={imgClass} {transition} />
    </slot>
  </div>
  <slot {index} {Controls} {Indicators} />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let images: HTMLImgAttributes[];
@prop export let index: number = 0;
@prop export let slideDuration: number = 1000;
@prop export let transition: TransitionFunc | null = null;
@prop export let duration: number = 0;
@prop export let ariaLabel: string = 'Draggable Carousel';
@prop export let disableSwipe: boolean = false;
@prop export let imgClass: string = '';
-->
