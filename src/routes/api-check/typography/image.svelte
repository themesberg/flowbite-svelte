<script>
  import { Img } from "$lib";
</script>

<h1 class="my-4 text-3xl">Svelte Images</h1>

<h2 class="my-4 text-2xl">Default image</h2>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1" />
</div>

<h2 class="my-4 text-2xl">Image caption</h2>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1" caption="Image caption" />
</div>

<h2 class="my-4 text-2xl">Rounded corners</h2>

<h3>Border radius</h3>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1" class="max-w-lg rounded-lg" />
</div>

<h3>Full circle</h3>

<div class="flex justify-center">
  <Img src="/images/examples/image-4@2x.jpg" alt="sample 1" class="h-96 w-96 rounded-full" />
</div>

<h2 class="my-4 text-2xl">Image shadow</h2>

<div class="flex justify-center">
  <Img src="/images/examples/image-2@2x.jpg" alt="sample 1" class="max-w-xl shadow-xl dark:shadow-gray-800" />
</div>

<h2 class="my-4 text-2xl">Retina-ready</h2>

<div class="flex justify-center">
  <Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />
</div>

<h2 class="my-4 text-2xl">Image card</h2>

<div class="flex justify-center">
  <Img src="/images/examples/content-gallery-3.png" alt="sample 1" class="rounded-lg" figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" captionClass="absolute bottom-6 px-4 text-lg text-white" caption="Do you want to get notified when a new component is added to Flowbite?" />
</div>

<h2 class="my-4 text-2xl">Image effects</h2>

<h3>Grayscale</h3>

<div class="flex justify-center">
  <Img src="/images/examples/content-gallery-3.png" alt="My gallery" class="max-w-lg cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0" />
</div>

<h3>Blur</h3>

<div class="flex justify-center">
  <Img src="/images/examples/content-gallery-3.png" alt="My gallery" class="max-w-lg rounded-lg blur-xs transition-all duration-300 hover:blur-none" />
</div>

<h2 class="my-4 text-2xl">Alignment</h2>

<h3>Left</h3>

<div>
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-lg" alt="sample 1" />
</div>

<h3>Center</h3>

<div>
  <Img src="/images/examples/image-1@2x.jpg" class="mx-auto max-w-lg" alt="sample 1" />
</div>

<h3>Right</h3>

<div>
  <Img src="/images/examples/image-1@2x.jpg" class="ms-auto max-w-lg" alt="sample 1" />
</div>

<h2 class="my-4 text-2xl">Sizes</h2>

<h3>Small</h3>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-xs" alt="sample 1" />
</div>

<h3>Medium</h3>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-md" alt="sample 1" />
</div>

<h3>Large</h3>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-xl" alt="sample 1" />
</div>

<h3>Full width</h3>

<div class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-full" alt="sample 1" />
</div>
