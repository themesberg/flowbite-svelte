<script lang="ts">
  import { type CarouselProps, type State, Slide } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { onMount, setContext } from "svelte";
  import { canChangeSlide } from "./CarouselSlide";
  import { carousel } from "./theme";

  const SLIDE_DURATION_RATIO = 0.25;

  let { children, slide, images, index = $bindable(0), slideDuration = 1000, slideFit, transition, duration = 0, "aria-label": ariaLabel = "Draggable Carousel", disableSwipe = false, imgClass = "", class: className, classes, onchange, isPreload = false, ...restProps }: CarouselProps = $props();

  warnThemeDeprecation("Carousel", { imgClass }, { imgClass: "slide" });

  const styling = $derived(classes ?? { slide: imgClass });

  // // Theme context
  const theme = getTheme("carousel");

  let { base, slide: slideCls } = $derived(carousel());

  const changeSlide = (n: number) => {
    if (images.length === 0) return;

    if (n % images.length === _state.index) return;

    if (!canChangeSlide({ lastSlideChange: _state.lastSlideChange, slideDuration, slideDurationRatio: SLIDE_DURATION_RATIO })) return;

    _state.forward = n >= _state.index;
    _state.index = (images.length + n) % images.length;
    _state.lastSlideChange = new Date();

    index = _state.index; // Update the bindable index
    onchange?.(images[_state.index]);
  };

  const _state: State = $state({ images, index: index ?? 0, forward: true, slideDuration, lastSlideChange: new Date(), changeSlide });

  setContext("state", _state);

  let initialized = false;

  $effect(() => {
    changeSlide(index);
  });

  onMount(() => {
    onchange?.(images[index]);
    initialized = true;
  });

  const nextSlide = () => {
    changeSlide(_state.index + 1);
  };

  const prevSlide = () => {
    changeSlide(_state.index - 1);
  };

  const loop = (node: HTMLElement) => {
    // loop timer
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    let intervalId: any;

    if (duration > 0) {
      intervalId = setInterval(nextSlide, duration);
      if (initialized) {
        if (_state.forward) nextSlide();
        else prevSlide();
      }
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
    if (mousePos !== undefined) return mousePos;

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
<div bind:this={carouselDiv} onmousedown={onDragStart} ontouchstart={onDragStart} onmousemove={onDragMove} onmouseup={onDragStop} ontouchmove={onDragMove} ontouchend={onDragStop} role="button" aria-label={ariaLabel} tabindex="0" {...restProps} class={base({ class: clsx(activeDragGesture === undefined ? "transition-transform" : "", theme?.base, className) })} {@attach loop}>
  {#if slide}
    {@render slide({ index: _state.index, Slide })}
  {:else}
    <Slide image={images[_state.index]} fit={slideFit} class={slideCls({ class: clsx(theme?.slide, styling.slide) })} {transition} />
  {/if}

  {@render children?.(_state.index)}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CarouselProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L373)
## Props
@prop children
@prop slide
@prop images
@prop index = $bindable(0)
@prop slideDuration = 1000
@prop slideFit
@prop transition
@prop duration = 0
@prop "aria-label": ariaLabel = "Draggable Carousel"
@prop disableSwipe = false
@prop imgClass = ""
@prop class: className
@prop classes
@prop onchange
@prop isPreload = false
@prop ...restProps
-->
