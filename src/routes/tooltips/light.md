---
layout: tooltipLayout
---

<script>
import {LightTooltip, Button} from '$lib/index'
</script>

<h1 class="text-3xl w-full dark:text-white py-8">LightTooltip</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
let tip: string;
let top: boolean = false;
let right: boolean = false;
let bottom: boolean = false;
let left: boolean = false;
let active: boolean = false;
```

<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip top</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" top>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" top>
  <Button />
</LightTooltip>
```


<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip bottom</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" bottom>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" bottom>
  <Button />
</LightTooltip>
```

<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip right</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" right>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" right>
  <Button />
</LightTooltip>
```


<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip left</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" left>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" left>
  <Button />
</LightTooltip>
```
