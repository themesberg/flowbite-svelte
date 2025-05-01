<script>
  import { Video } from "$lib";
</script>

<h1 class="my-4 text-3xl">Video</h1>

<div class="example-container">
  <h2 class="my-4 text-2xl">Video player</h2>
  <Video src="/videos/flowbite.mp4" controls trackSrc="flowbite.mp4" />
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Autoplay</h2>
  <Video src="/videos/flowbite.mp4" autoplay controls trackSrc="flowbite.mp4" />
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Muted</h2>
  <Video src="/videos/flowbite.mp4" autoplay muted controls trackSrc="flowbite.mp4" />
</div>

<div class="example-container">
  <h2 class="my-4 text-2xl">Sizes</h2>

  <h2 class="my-4 text-2xl">Width</h2>
  <Video src="/videos/flowbite.mp4" controls class="w-96" trackSrc="flowbite.mp4" />

  <h2 class="my-4 text-2xl">Height</h2>
  <Video src="/videos/flowbite.mp4" controls class="h-80" trackSrc="flowbite.mp4" />

  <h2 class="my-4 text-2xl">Responsive</h2>
  <Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full" trackSrc="flowbite.mp4" />

  <h2 class="my-4 text-2xl">Custom styles</h2>
  <Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
</div>

<style>
  .example-container {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
  }
</style>
