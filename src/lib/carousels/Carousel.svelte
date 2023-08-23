<script lang="ts">
  import { twJoin, twMerge } from 'tailwind-merge';
  import Slide from './Slide.svelte';
  import Thumbnail from './Thumbnail.svelte';
  import Caption from './Caption.svelte';
  import Indicator from './Indicator.svelte';

  export let id: string = 'default-carousel';
  export let showIndicators: boolean = true;
  export let showCaptions: boolean = true;
  export let showThumbs: boolean = true;
  export let images: any[];
  export let slideControls: boolean = true;
  export let loop: boolean = false;
  export let duration: number = 2000;

  // Carousel
  export let divClass: string = 'overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96';
  let divCls: string = twMerge(divClass, $$props.classDiv);
  export let indicatorDivClass: string = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
  let indicatorDivCls: string = twMerge(indicatorDivClass, $$props.classIndicatorDiv);

  // Caption
  export let captionClass: string = 'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';
  let captionCls: string = twMerge(captionClass, $$props.classCaption);

  // Indicator
  export let indicatorClass: string = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
  let indicatorCls: string = twMerge(indicatorClass, $$props.classIndicator);

  // Slide
  export let slideClass: string = 'flex items-center justify-center h-full w-full';
  let slideCls: string = twMerge(slideClass, $$props.classSlide);

  // Img
  export let imgFit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = 'cover';
  export let imgClass: string = `object-${imgFit} ${imgFit === 'cover' && 'w-full'} h-full`;
  let imgCls: string = twMerge(imgClass, $$props.classImg);

  // Thumbnail
  export let thumbClass: string = 'opacity-40';
  let thumbCls: string = twMerge(thumbClass, $$props.classThumb);

  // Thumbnail Container
  export let thumbDivClass: string = 'flex flex-row justify-center bg-gray-100 w-full';
  let thumbDivCls: string = twMerge(thumbDivClass, $$props.classThumbDiv);

  // Thumbnail Img Btn Div
  export let thumbBtnClass: string = '';
  let thumbBtnCls: string = twMerge(thumbBtnClass, $$props.classBtnThumb);

  let imageShowingIndex: number = 0;
  $: image = images[imageShowingIndex];

  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      imageShowingIndex = 0;
    } else {
      imageShowingIndex += 1;
    }
  };

  const prevSlide = () => {
    if (imageShowingIndex === 0) {
      imageShowingIndex = images.length - 1;
    } else {
      imageShowingIndex -= 1;
    }
  };

  const goToSlide = (number: number) => (imageShowingIndex = number);

  if (loop) {
    setInterval(() => {
      nextSlide();
    }, duration);
  }

  type ActiveDragGesture = {
    start: number;
    position: number;
    width: number;
    timestamp: number;
  };

  let activeDragGesture: ActiveDragGesture | undefined;

  let carouselDiv: HTMLDivElement;
  let percentOffset: number = 0;

  const getPositionFromEvent = (evt: MouseEvent | TouchEvent) => {
    const mousePos = (evt as MouseEvent)?.clientX;
    if (mousePos) return mousePos;

    let touchEvt = evt as TouchEvent;
    if (/^touch/.test(touchEvt?.type)) {
      return touchEvt.touches[0].clientX;
    }
  };

  const onDragStart = (evt: MouseEvent | TouchEvent) => {
    evt.preventDefault();
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
              if (distance > 0) nextSlide();
              else prevSlide();
            } else if (percentOffset > DRAG_MIN_PERCENT) nextSlide();
            else if (percentOffset < -DRAG_MIN_PERCENT) prevSlide();
          }
          percentOffset = 0;
          activeDragGesture = undefined;
        };
</script>

<!-- The move listeners go here, so things keep working if the touch strays out of the element. -->
<svelte:document
  on:mousemove={onDragMove}
  on:mouseup={onDragStop}
  on:touchmove={onDragMove}
  on:touchend={onDragStop} />

<div
  bind:this={carouselDiv}
  {id}
  class="relative"
  on:mousedown={onDragStart}
  on:touchstart={onDragStart}
  role="button"     
  aria-label="Draggable Carousel"
  tabindex="0" 
  >
  <div
    style={`transform: translateX(${percentOffset}%)`}
    class={twJoin(
      divClass,
      { 'transition-transform': activeDragGesture === undefined }
    )}>
    <Slide image={image.imgurl} altTag={image.name} attr={image.attribution} {slideClass} />
  </div>
  {#if showIndicators}
    <!-- Slider indicators -->
    <div class={indicatorDivCls}>
      {#each images as { id, imgurl, name, attribution }}
        <Indicator {name} selected={imageShowingIndex === id} on:click={() => goToSlide(id)} indicatorClass={indicatorCls} />
      {/each}
    </div>
  {/if}
  {#if slideControls}
    <!-- Slider controls -->
    <button on:click={prevSlide} type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        {#if $$slots.previous}
          <slot name="previous" />
        {:else}
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        {/if}
        <span class="hidden">Previous</span>
      </span>
    </button>
    <button on:click={nextSlide} type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        {#if $$slots.next}
          <slot name="next" />
        {:else}
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        {/if}
        <span class="hidden">Next</span>
      </span>
    </button>
  {/if}
</div>

{#if showCaptions}
  <Caption caption={images[imageShowingIndex].name} captionClass={captionCls} />
{/if}

{#if showThumbs}
  <div class={thumbDivCls}>
    {#each images as { id, imgurl, name, attribution }}
      <Thumbnail thumbClass={thumbCls} thumbBtnClass={thumbBtnCls} thumbImg={imgurl} altTag={name} titleLink={attribution} {id} selected={imageShowingIndex === id} on:click={() => goToSlide(id)} />
    {/each}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let id: string = 'default-carousel';
@prop export let showIndicators: boolean = true;
@prop export let showCaptions: boolean = true;
@prop export let showThumbs: boolean = true;
@prop export let images: any[];
@prop export let slideControls: boolean = true;
@prop export let loop: boolean = false;
@prop export let duration: number = 2000;
@prop export let divClass: string = 'overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96';
@prop export let indicatorDivClass: string = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
@prop export let captionClass: string = 'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';
@prop export let indicatorClass: string = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
@prop export let slideClass: string = 'flex items-center justify-center h-full w-full';
@prop export let imgFit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = 'cover';
@prop export let imgClass: string = `object-${imgFit} ${imgFit === 'cover' && 'w-full'} h-full`;
@prop export let thumbClass: string = 'opacity-40';
@prop export let thumbDivClass: string = 'flex flex-row justify-center bg-gray-100 w-full';
@prop export let thumbBtnClass: string = '';
-->
