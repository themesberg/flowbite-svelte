---
layout: progressbarLayout
---

<script>
  import { Progressbar } from '$lib/index'
</script>


<h1 class="text-3xl w-full dark:text-white py-4">Progress bar</h1>

<h2 class="text-2xl w-full mt-8 dark:text-white py-4" id="Default_sidebar">Size</h2>

<p class="dark:text-white py-4 text-lg">Use the `size` prop to change the size of a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

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

```html
<Progressbar progress="50" size="h-1.5" />

<Progressbar progress="50" size="h-2.5" />

<Progressbar progress="50" size="h-4" />

<Progressbar progress="50" size="h-6" />

```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Colors</h2>

<p class="dark:text-white py-4 text-lg">Use the `color` prop to change the color of a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<div class="my-4">
<div class="mb-1 text-base font-medium">Gray</div>
	<Progressbar progress="50" color="gray" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-blue-700">Blue/Default</div>
	<Progressbar progress="50" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-red-700">Red</div>
	<Progressbar progress="50" color="red" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-green-700">Green</div>
	<Progressbar progress="50" color="green" />
</div>

<div class="mb-1 text-base font-medium text-yellow-700">Yellow</div>
<div class="my-4">
	<Progressbar progress="50" color="yellow" />
</div>

<div class="mb-1 text-base font-medium text-indigo-700">Indigo</div>
<div class="my-4">
	<Progressbar progress="50" color="indigo" />
</div>

<div class="mb-1 text-base font-medium text-purple-700">Purple</div>
<div class="my-4">
	<Progressbar progress="50" color="purple" />
</div>

</div>

```html
<Progressbar progress="50" color="gray" />

<Progressbar progress="50" color="blue" />

<Progressbar progress="50" color="red" />

<Progressbar progress="50" color="green" />

<Progressbar progress="50" color="yellow" />

<Progressbar progress="50" color="indigo" />

<Progressbar progress="50" color="purple" />
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Label inside</h2>

<p class="dark:text-white py-4 text-lg">Use the `labelInside` prop to add the progress in a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<Progressbar progress="50" labelInside />

</div>

```html
<Progressbar progress="50" labelInside />
```


<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Label outside</h2>

<p class="dark:text-white py-4 text-lg">Use the `labelOutside` prop to add the progress outside of a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<Progressbar progress="50" labelOutside="Flowbite-Svelte" />

</div>

```html
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
let progress = '45';
let size = 'h-2.5';
let labelInside: boolean = false;
let labelOutside: string = '';
let color = 'blue';
```