<script lang="ts">
  import { type CarouselProps, type State, Slide } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { onMount, setContext } from "svelte";
  import { canChangeSlide } from "./CarouselSlide";
  import { carousel } from "./theme";

  const SLIDE_DURATION_RATIO = 0.25;

  let { children, slide, images, index = $bindable(0), slideDuration = 1000, transition, duration = 0, "aria-label": ariaLabel = "Draggable Carousel", disableSwipe = false, imgClass = "", class: className, onchange, divClass, isPreload = false, ...restProps }: CarouselProps = $props();

  const theme = getTheme("carousel");

  const _state: State = $state({ images, index: index ?? 0, forward: true, slideDuration, lastSlideChange: new Date() });

  setContext("state", _state);

  let initialized = false;

  $effect(() => {
    index = _state.index;
    onchange?.(images[index]);
  });

  onMount(() => {
    onchange?.(images[index]);
    initialized = true;
  });

  const nextSlide = () => {
    if (!canChangeSlide({ lastSlideChange: _state.lastSlideChange, slideDuration, slideDurationRatio: SLIDE_DURATION_RATIO })) return _state;

    _state.forward = true;
    _state.index = _state.index >= images.length - 1 ? 0 : _state.index + 1;
    _state.lastSlideChange = new Date();

    return _state;
  };

  const prevSlide = () => {
    if (!canChangeSlide({ lastSlideChange: _state.lastSlideChange, slideDuration, slideDurationRatio: SLIDE_DURATION_RATIO })) return _state;

    _state.forward = false;
    _state.index = _state.index <= 0 ? images.length - 1 : _state.index - 1;
    _state.lastSlideChange = new Date();

    return _state;
  };

  const loop = (node: HTMLElement) => {
    // loop timer
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    let intervalId: any;

    if (duration > 0) {
      intervalId = setInterval(nextSlide, duration);
      if (initialized) _state.forward ? nextSlide() : prevSlide();
    }

    return () => clearInterval(intervalId);
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

<svelte:head>
  {#if isPreload && images.length > 0}
    {#each images as image}
      <link rel="preload" href={image.src} as="image" />
    {/each}
  {/if}
</svelte:head>

<!-- The move listeners go here, so things keep working if the touch strays out of the element. -->
<svelte:document onmousemove={onDragMove} onmouseup={onDragStop} ontouchmove={onDragMove} ontouchend={onDragStop} />
<div bind:this={carouselDiv} class={clsx("relative", divClass)} onmousedown={onDragStart} ontouchstart={onDragStart} onmousemove={onDragMove} onmouseup={onDragStop} ontouchmove={onDragMove} ontouchend={onDragStop} role="button" aria-label={ariaLabel} tabindex="0">
  <div {...restProps} class={carousel({ class: clsx(activeDragGesture === undefined ? "transition-transform" : "", theme, className) })} {@attach loop}>
    {#if slide}
      {@render slide({ index, Slide })}
    {:else}
      <Slide image={images[index]} class={clsx(imgClass)} {transition} />
    {/if}
  </div>
  {@render children?.(index)}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CarouselProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L384)
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
@prop isPreload = false
@prop ...restProps
-->
