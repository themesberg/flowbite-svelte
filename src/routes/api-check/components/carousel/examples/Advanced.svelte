<script>
  import { Button, Carousel, ControlButton, Controls, Indicator, CarouselIndicators, Thumbnails } from "flowbite-svelte";
  import { CaretRightOutline } from "flowbite-svelte-icons";
  import images from "./imageData/images.json";
  let index = $state(0);
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} bind:index>
    <CarouselIndicators position="withThumbnails">
      {#snippet children({ selected, index })}
        <Indicator color={selected ? "red" : "green"} class="h-5 w-5 border border-white text-white {selected ? 'opacity-100' : 'opacity-80'}">
          {index}
        </Indicator>
      {/snippet}
    </CarouselIndicators>
    <Controls>
      {#snippet children(changeSlide)}
        <ControlButton name="Previous" forward={false} onclick={() => changeSlide(false)} />
        <Button pill class="absolute end-4 top-1/2 -translate-y-1/2 p-2 font-bold" onclick={() => changeSlide(true)}>
          <CaretRightOutline />
        </Button>
      {/snippet}
    </Controls>
    <Thumbnails class="mt-4 gap-3 bg-transparent" {images} bind:index>
      {#snippet children({ image, selected, Thumbnail })}
        <Thumbnail {selected} {...image} class="hover:outline-primary-500 rounded-md shadow-xl hover:outline {selected ? 'outline-primary-400 outline-4' : ''}" />
      {/snippet}
    </Thumbnails>
  </Carousel>
</div>