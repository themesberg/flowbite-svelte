---
layout: badgeLayout
---

<script>
  import {BadgeIcon} from '$lib/index'
  import {InformationCircleIconOutline} from '@codewithshin/svelte-heroicons'
  let link="/"
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Badges with icon</h1>

<p class="text-lg w-full text-gray-900 dark:text-white py-4">You can use <a href="https://github.com/shinokada/svelte-heroicons" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Svelte-heroicon.</a></p>

```html
<script>
  import {BadgeIcon} from 'flowbite-svelte'
  import {InformationCircleIconOutline} from '@codewithshin/svelte-heroicons'
  let link="/"
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl'
type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';
let textSize: Textsize = 'text-xs';
let name = 'Read more';
let color: Colors = 'blue';
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeIcon name="Default" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Red" color="red" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Green" color="green" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
</div>

```html
<BadgeIcon name="Default" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Red" color="red" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Green" color="green" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
```

<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeIcon name="Default" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
</div>

```html
<BadgeIcon name="Default" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-sm" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
```

<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeIcon name="Default" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
</div>

```html
<BadgeIcon name="Default" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-base" ><InformationCircleIconOutline className="h-4 w-4 mr-1"/></BadgeIcon>
```
