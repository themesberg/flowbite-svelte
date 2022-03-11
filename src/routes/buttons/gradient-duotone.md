---
layout: doc
---

<script>
  import { GradientDuotoneButton }from '$lib/index';
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Gradient Duotone Buttons</h1>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

```js
let textSize = "text-sm"; //'text-xs'|'text-sm'|'text-base' |'text-lg' |'text-xl'|'text-2xl'|'text-3xl'|'text-4xl'
let name = "Read more";
let type = "button"; // 'button' | 'submit' | 'reset'
let color = "purple2blue"; // cyan2blue| green2blue | purple2pink | pink2orange | teal2lime | red2yellow
```

<h2 class="text-2xl w-full dark:text-white py-8">text-sm</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-sm"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-sm"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-sm"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-sm"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-sm"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-sm"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-sm"/>
</div>

```svelte
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-sm"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-sm"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-sm"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-sm"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-sm"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-sm"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-sm"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-xs</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
</div>

```svelte
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-base"/>
</div>

```svelte
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-base"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/setup" class="text-blue-600 hover:underline dark:text-blue-500">Button Setup</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/colored-shadow" class="text-blue-600 hover:underline dark:text-blue-500">Colored Shadow Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/gradient-duotone" class="text-blue-600 hover:underline dark:text-blue-500">Gradient Duotone Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/gradient-monochrome" class="text-blue-600 hover:underline dark:text-blue-500">Gradient Monochrome Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/gradient-outline" class="text-blue-600 hover:underline dark:text-blue-500">Gradietn Outline Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/outlined" class="text-blue-600 hover:underline dark:text-blue-500">Outlined Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/rounded" class="text-blue-600 hover:underline dark:text-blue-500">Rounded Button</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Buttons</a></p>