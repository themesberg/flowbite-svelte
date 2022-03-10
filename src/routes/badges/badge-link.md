---
layout: doc
---

<script>
  import {BadgeLink} from '$lib/index'
  let link="/"
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Badges with link</h1>

```svelte
<script>
  import {BadgeLink} from 'flowbite-svelte'
  let link="/"
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

```js
let textSize = "text-xs"; // 'text-xs'|'text-sm'|'text-base' |'text-lg' |'text-xl'|'text-2xl'|'text-3xl'|'text-4xl'
let name = "Read more"; 
let color = "blue"; // 'blue'| 'gray'| 'red'| 'yellow'| 'purple'| 'green'| 'indigo'| 'purple'| 'pink' 
let link = "/";
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeLink name="Default" {link}/>
<BadgeLink name="Gray" color="gray" {link}/>
<BadgeLink name="Red" color="red" {link}/>
<BadgeLink name="Green" color="green" {link}/>
<BadgeLink name="Yellow" color="yellow" {link}/>
<BadgeLink name="Indigo" color="indigo" {link}/>
<BadgeLink name="Purple" color="purple" {link}/>
<BadgeLink name="Pink" color="pink" {link}/>
</div>

```svelte
<BadgeLink name="Default" {link}/>
<BadgeLink name="Gray" color="gray" {link}/>
<BadgeLink name="Red" color="red" {link}/>
<BadgeLink name="Green" color="green" {link}/>
<BadgeLink name="Yellow" color="yellow" {link}/>
<BadgeLink name="Indigo" color="indigo" {link}/>
<BadgeLink name="Purple" color="purple" {link}/>
<BadgeLink name="Pink" color="pink" {link}/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeLink name="Default" textSize="text-sm" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-sm" {link}/>
<BadgeLink name="Red" color="red" textSize="text-sm" {link}/>
<BadgeLink name="Green" color="green" textSize="text-sm" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-sm" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-sm" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-sm" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-sm" {link}/>
</div>

```svelte
<BadgeLink name="Default" textSize="text-sm" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-sm" {link}/>
<BadgeLink name="Red" color="red" textSize="text-sm" {link}/>
<BadgeLink name="Green" color="green" textSize="text-sm" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-sm" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-sm" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-sm" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-sm" {link}/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeLink name="Default" textSize="text-base" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-base" {link}/>
<BadgeLink name="Red" color="red" textSize="text-base" {link}/>
<BadgeLink name="Green" color="green" textSize="text-base" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-base" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-base" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-base" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-base" {link}/>
</div>

```svelte
<BadgeLink name="Default" textSize="text-base" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-base" {link}/>
<BadgeLink name="Red" color="red" textSize="text-base" {link}/>
<BadgeLink name="Green" color="green" textSize="text-base" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-base" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-base" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-base" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-base" {link}/>
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/badge/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Badge</a></p>