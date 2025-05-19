<script>
  import { Video } from "$lib";
</script>

<h1 class="my-4 text-3xl">Video</h1>

<h2 class="my-4 text-2xl">Video player</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" controls trackSrc="flowbite.mp4" />
</div>

<h2 class="my-4 text-2xl">Autoplay</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" autoplay controls trackSrc="flowbite.mp4" />
</div>

<h2 class="my-4 text-2xl">Muted</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" autoplay muted controls trackSrc="flowbite.mp4" />
</div>

<h2 class="my-4 text-2xl">Width</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" controls class="w-96" trackSrc="flowbite.mp4" />
</div>

<h2 class="my-4 text-xl">Height</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" controls class="h-80" trackSrc="flowbite.mp4" />
</div>

<h2 class="my-4 text-2xl">Responsive</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full" trackSrc="flowbite.mp4" />
</div>

<h2 class="my-4 text-2xl">Custom styles</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-8">
  <Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
</div>
