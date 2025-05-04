<script>
  import { Skeleton, ImagePlaceholder, VideoPlaceholder, TextPlaceholder, CardPlaceholder, WidgetPlaceholder, ListPlaceholder, TestimonialPlaceholder } from "$lib";
</script>

<h1 class="my-4 text-3xl">Skeleton</h1>

<p>Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.</p>

<h2 class="my-4 text-2xl">Default skeleton</h2>

<div class="border rounded p-4 my-4">
  <Skeleton size="sm" class="my-8" />
  <Skeleton size="md" class="my-8" />
  <Skeleton size="lg" class="my-8" />
  <Skeleton size="xl" class="my-8" />
  <Skeleton size="2xl" class="mt-8 mb-2.5" />
</div>

<h2 class="my-4 text-2xl">Image placeholder</h2>

<div class="border rounded p-4 my-4 flex flex-col gap-8">
  <ImagePlaceholder size="sm" />
  <ImagePlaceholder size="md" />
  <ImagePlaceholder size="lg" />
</div>

<h2 class="my-4 text-2xl">Video placeholder</h2>

<div class="border rounded p-4 my-4">
  <VideoPlaceholder />
  <VideoPlaceholder size="md" class="mt-8" />
  <VideoPlaceholder size="lg" class="mt-8" />
  <VideoPlaceholder size="xl" class="mt-8" />
  <VideoPlaceholder size="2xl" class="mt-8" />
</div>

<h2 class="my-4 text-2xl">Text placeholder</h2>

<div class="border rounded p-4 my-4">
  <TextPlaceholder />
  <TextPlaceholder size="md" class="mt-8" />
  <TextPlaceholder size="lg" class="mt-8" />
  <TextPlaceholder size="xl" class="mt-8" />
  <TextPlaceholder size="2xl" class="mt-8" />
</div>

<h2 class="my-4 text-2xl">Card placeholder</h2>

<div class="border rounded p-4 my-4">
  <CardPlaceholder />
  <CardPlaceholder size="md" class="mt-8" />
  <CardPlaceholder size="lg" class="mt-8" />
  <CardPlaceholder size="xl" class="mt-8" />
  <CardPlaceholder size="2xl" class="mt-8" />
</div>

<h2 class="my-4 text-2xl">Widget placeholder</h2>

<div class="border rounded p-4 my-4">
  <WidgetPlaceholder />
</div>

<h2 class="my-4 text-2xl">List placeholder</h2>

<div class="border rounded p-4 my-4">
  <ListPlaceholder />
</div>

<h2 class="my-4 text-2xl">Testimonial placeholder</h2>

<div class="border rounded p-4 my-4">
  <TestimonialPlaceholder />
</div>
