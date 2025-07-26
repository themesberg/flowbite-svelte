<script>
  import { Progressbar, Button } from "$lib";
  import { sineOut } from "svelte/easing";

  let progress = "45";
</script>

<h1 class="my-4 text-3xl">Progress</h1>

<h2 class="my-4 text-2xl">Default progress bar</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Progressbar progress="50" />
</div>

<h2 class="my-4 text-2xl">Sizes</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Small</div>
    <Progressbar progress="50" size="h-1.5" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Default</div>
    <Progressbar progress="50" size="h-2.5" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Large</div>
    <Progressbar progress="50" size="h-4" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
    <Progressbar progress="50" size="h-6" />
  </div>
</div>

<h2 class="my-4 text-2xl">With label inside</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Progressbar progress="50" size="h-4" labelInside />
</div>

<h2 class="my-4 text-2xl">With label outside</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Progressbar progress="50" labelOutside="flowbite-svelte" />
</div>

<h2 class="my-4 text-2xl">Colors</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="my-4">
    <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
    <Progressbar progress="50" color="gray" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue</div>
    <Progressbar progress="50" color="blue" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
    <Progressbar progress="50" color="red" />
  </div>

  <div class="my-4">
    <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
    <Progressbar progress="50" color="green" />
  </div>

  <div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
  <div class="my-4">
    <Progressbar progress="50" color="yellow" />
  </div>

  <div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>
  <div class="my-4">
    <Progressbar progress="50" color="indigo" />
  </div>

  <div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">Purple</div>
  <div class="my-4">
    <Progressbar progress="50" color="purple" />
  </div>
</div>

<h2 class="my-4 text-2xl">Custom style</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Progressbar
    progress="50"
    size="h-3"
    labelInside
    color="green"
    labelOutside="Size h-3"
    classes={{
      label: "text-xs font-medium text-center p-0 leading-none rounded-full"
    }}
    class="my-4"
  />

  <Progressbar progress="50" size="h-10" labelInside color="red" labelOutside="Size h-10" classes={{ label: "text-2xl font-medium text-center p-2 leading-none rounded-full" }} class="my-4" />

  <Progressbar progress="50" size="h-6" labelInside labelOutside="Size h-6" classes={{ label: "text-base font-medium text-center p-1 leading-none rounded-full" }} class="my-4" />
</div>

<h2 class="my-4 text-2xl">Animation</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Progressbar {progress} animate precision={2} labelOutside="With animation" labelInside tweenDuration={1500} easing={sineOut} size="h-6" classes={{ label: "bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full" }} class="mb-8" />
  <Progressbar {progress} labelOutside="Without animation" labelInside size="h-6" classes={{ label: "bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full" }} />
  <Button onclick={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mt-8">Randomize</Button>
</div>

<h2 class="my-4 text-2xl">Custom color</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="space-y-4">
    <Progressbar progress="40" classes={{ label: "bg-sky-600 dark:bg-sky-400" }} />
    <Progressbar progress="40" classes={{ label: "bg-lime-600 dark:bg-lime-400" }} />
    <Progressbar progress="40" classes={{ label: "bg-pink-600 dark:bg-pink-400" }} />
  </div>
</div>
