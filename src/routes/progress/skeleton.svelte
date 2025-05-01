<script>
  import { 
    Skeleton, 
    ImagePlaceholder, 
    VideoPlaceholder, 
    TextPlaceholder, 
    CardPlaceholder, 
    WidgetPlaceholder, 
    ListPlaceholder, 
    TestimonialPlaceholder 
  } from "$lib";
</script>

<h1 class="text-3xl my-4">Skeleton</h1>

<p>Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.</p>

<h2 class="text-2xl my-4">Default skeleton</h2>

<div class="example-container">
  <Skeleton size="sm" class="my-8" />
  <Skeleton size="md" class="my-8" />
  <Skeleton size="lg" class="my-8" />
  <Skeleton size="xl" class="my-8" />
  <Skeleton size="2xl" class="mt-8 mb-2.5" />
</div>

<h2 class="text-2xl my-4">Image placeholder</h2>

<div class="example-container flex flex-col gap-8">
  <ImagePlaceholder size="sm" />
  <ImagePlaceholder size="md" />
  <ImagePlaceholder size="lg" />
</div>

<h2 class="text-2xl my-4">Video placeholder</h2>

<div class="example-container">
  <VideoPlaceholder />
  <VideoPlaceholder size="md" class="mt-8" />
  <VideoPlaceholder size="lg" class="mt-8" />
  <VideoPlaceholder size="xl" class="mt-8" />
  <VideoPlaceholder size="2xl" class="mt-8" />
</div>

<h2 class="text-2xl my-4">Text placeholder</h2>

<div class="example-container">
  <TextPlaceholder />
  <TextPlaceholder size="md" class="mt-8" />
  <TextPlaceholder size="lg" class="mt-8" />
  <TextPlaceholder size="xl" class="mt-8" />
  <TextPlaceholder size="2xl" class="mt-8" />
</div>

<h2 class="text-2xl my-4">Card placeholder</h2>

<div class="example-container">
  <CardPlaceholder />
  <CardPlaceholder size="md" class="mt-8" />
  <CardPlaceholder size="lg" class="mt-8" />
  <CardPlaceholder size="xl" class="mt-8" />
  <CardPlaceholder size="2xl" class="mt-8" />
</div>

<h2 class="text-2xl my-4">Widget placeholder</h2>

<div class="example-container">
  <WidgetPlaceholder />
</div>

<h2 class="text-2xl my-4">List placeholder</h2>

<div class="example-container">
  <ListPlaceholder />
</div>

<h2 class="text-2xl my-4">Testimonial placeholder</h2>

<div class="example-container">
  <TestimonialPlaceholder />
</div>