---
layout: doc
---

<script>
  import { GradientOutlineButton }from '$lib/index';
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Gradient Monochrome Buttons</h1>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

```js
let textSize = "text-sm"; // 'text-xs'|'text-sm'|'text-base' |'text-lg' |'text-xl'|'text-2xl'|'text-3xl'|'text-4xl'
let name = "Read more";
let color = "purple2blue"; // cyan2blue| green2blue | purple2pink | pink2orange | teal2lime | red2yellow
```

<h2 class="text-2xl w-full dark:text-white py-8">text-sm</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientOutlineButton color="purple2blue" name="purple2blue"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue"/>
<GradientOutlineButton color="green2blue" name="green2blue"/>
<GradientOutlineButton color="purple2pink" name="purple2pink"/>
<GradientOutlineButton color="pink2orange" name="pink2orange"/>
<GradientOutlineButton color="teal2lime" name="teal2lime"/>
<GradientOutlineButton color="red2yellow" name="red2yellow"/>
</div>

```svelte
<GradientOutlineButton color="purple2blue" name="purple2blue"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue"/>
<GradientOutlineButton color="green2blue" name="green2blue"/>
<GradientOutlineButton color="purple2pink" name="purple2pink"/>
<GradientOutlineButton color="pink2orange" name="pink2orange"/>
<GradientOutlineButton color="teal2lime" name="teal2lime"/>
<GradientOutlineButton color="red2yellow" name="red2yellow"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-xs</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
</div>

```svelte
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-base"/>
</div>

```svelte
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-base"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Buttons</a></p>