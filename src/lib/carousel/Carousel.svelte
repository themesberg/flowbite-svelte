<script lang="ts">
  import clsx from "clsx";
  import { twMerge } from "tailwind-merge";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { canChangeSlide } from "./CarouselSlide";
  import Slide from "./Slide.svelte";
  import { carousel } from "./theme";
  import type { CarouselProps, State } from "$lib/types";

  const SLIDE_DURATION_RATIO = 0.25; // TODO: Expose one day?

  let { children, slide, images, index = $bindable(0), slideDuration = 1000, transition, duration = 0, "aria-label": ariaLabel = "Draggable Carousel", disableSwipe = false, imgClass = "", class: className, onchange, divClass, ...restProps }: CarouselProps = $props();

  const { set, subscribe, update } = writable<State>({ images, index: index ?? 0, forward: true, slideDuration, lastSlideChange: new Date() });

  setContext("state", {
    set: (_state: State) => set({ index: _state.index, images: _state.images, lastSlideChange: new Date(), slideDuration, forward }),
    subscribe,
    update
  });

  let forward = $state(true);

  subscribe((_state) => {
    index = _state.index;
    forward = _state.forward;
    onchange?.(images[index]);
  });

  onMount(() => {
    onchange?.(images[index]);
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
    // carouselDiv = node; // used by DragStart

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

  let activeDragGesture: ActiveDragGesture | undefined = $state();

  let carouselDiv: HTMLElement | undefined = $state();
  let percentOffset: number = $state(0);
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
    const width = carouselDiv?.getBoundingClientRect().width;
    if (start === undefined || width === undefined) return;
    activeDragGesture = {
      start,
      position: start,
      width,
      timestamp: Date.now()
    };
  };

  let onDragMove = $derived(
    activeDragGesture === undefined
      ? undefined
      : (evt: MouseEvent | TouchEvent) => {
          const position = getPositionFromEvent(evt);
          if (!activeDragGesture || position === undefined) return;
          const { start, width } = activeDragGesture;
          percentOffset = Math.min(100, Math.max(-100, ((position - start) / width) * 100));
          activeDragGesture.position = position;
        }
  );

  let onDragStop = $derived(
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
              if (touchEvent?.constructor.name === "TouchEvent") {
                // The gesture is a tap not drag, so manually issue a click event to trigger tap click gestures lost via preventDefault
                touchEvent?.target?.dispatchEvent(
                  new Event("click", {
                    bubbles: true
                  })
                );
              }
            }
          }

          percentOffset = 0;
          activeDragGesture = undefined;
          touchEvent = null;
        }
  );
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
<svelte:document onmousemove={onDragMove} onmouseup={onDragStop} ontouchmove={onDragMove} ontouchend={onDragStop} />
<div bind:this={carouselDiv} class={twMerge("relative", divClass)} onmousedown={onDragStart} ontouchstart={onDragStart} onmousemove={onDragMove} onmouseup={onDragStop} ontouchmove={onDragMove} ontouchend={onDragStop} role="button" aria-label={ariaLabel} tabindex="0">
  <div {...restProps} class={carousel({ class: clsx(activeDragGesture === undefined ? "transition-transform" : "", className) })} use:loop={duration}>
    {#if slide}
      {@render slide({ index, Slide })}
    {:else}
      <Slide image={images[index]} class={imgClass} {transition} />
    {/if}
  </div>
  {@render children?.(index)}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CarouselProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L390)
## Props
@prop children
@prop slide
@prop images
@prop index = $bindable(0)
@prop slideDuration = 1000
@prop transition
@prop duration = 0
@prop "aria-label": ariaLabel = "Draggable Carousel"
@prop disableSwipe = false
@prop imgClass = ""
@prop class: className
@prop onchange
@prop divClass
@prop ...restProps
-->
