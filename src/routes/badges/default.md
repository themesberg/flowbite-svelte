---
layout: doc
---

<script>
  import {Badge} from '$lib/index'
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Badges</h1>

```svelte
<script>
  import {Badge} from 'flowbite-svelte'
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

```js
let textSize = "text-xs"; // 'text-xs'|'text-sm'|'text-base' |'text-lg' |'text-xl'|'text-2xl'|'text-3xl'|'text-4xl'
let name = "Read more";
let color = "blue"; // 'blue'| 'gray'| 'red'| 'yellow'| 'purple'| 'green'| 'indigo'| 'purple'| 'pink'
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Size xs</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Badge name="Default"/>
<Badge name="Gray" color="gray"/>
<Badge name="Red" color="red"/>
<Badge name="Green" color="green"/>
<Badge name="Yellow" color="yellow"/>
<Badge name="Indigo" color="indigo"/>
<Badge name="Purple" color="purple"/>
<Badge name="Pink" color="pink"/>
</div>


```svelte
<Badge name="Default"/>
<Badge name="Gray" color="gray"/>
<Badge name="Red" color="red"/>
<Badge name="Green" color="green"/>
<Badge name="Yellow" color="yellow"/>
<Badge name="Indigo" color="indigo"/>
<Badge name="Purple" color="purple"/>
<Badge name="Pink" color="pink"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Badge name="Default" textSize="text-sm"/>
<Badge name="Gray" color="gray" textSize="text-sm"/>
<Badge name="Red" color="red" textSize="text-sm"/>
<Badge name="Green" color="green" textSize="text-sm"/>
<Badge name="Yellow" color="yellow" textSize="text-sm"/>
<Badge name="Indigo" color="indigo" textSize="text-sm"/>
<Badge name="Purple" color="purple" textSize="text-sm"/>
<Badge name="Pink" color="pink" textSize="text-sm"/>
</div>

```svelte
<Badge name="Default" textSize="text-sm"/>
<Badge name="Gray" color="gray" textSize="text-sm"/>
<Badge name="Red" color="red" textSize="text-sm"/>
<Badge name="Green" color="green" textSize="text-sm"/>
<Badge name="Yellow" color="yellow" textSize="text-sm"/>
<Badge name="Indigo" color="indigo" textSize="text-sm"/>
<Badge name="Purple" color="purple" textSize="text-sm"/>
<Badge name="Pink" color="pink" textSize="text-sm"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Badge name="Default" textSize="text-base"/>
<Badge name="Gray" color="gray" textSize="text-base"/>
<Badge name="Red" color="red" textSize="text-base"/>
<Badge name="Green" color="green" textSize="text-base"/>
<Badge name="Yellow" color="yellow" textSize="text-base"/>
<Badge name="Indigo" color="indigo" textSize="text-base"/>
<Badge name="Purple" color="purple" textSize="text-base"/>
<Badge name="Pink" color="pink" textSize="text-base"/>
</div>

```svelte
<Badge name="Default" textSize="text-base"/>
<Badge name="Gray" color="gray" textSize="text-base"/>
<Badge name="Red" color="red" textSize="text-base"/>
<Badge name="Green" color="green" textSize="text-base"/>
<Badge name="Yellow" color="yellow" textSize="text-base"/>
<Badge name="Indigo" color="indigo" textSize="text-base"/>
<Badge name="Purple" color="purple" textSize="text-base"/>
<Badge name="Pink" color="pink" textSize="text-base"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/badge/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Badge</a></p>