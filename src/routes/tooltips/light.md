---
layout: doc
---

<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<h1 class="text-3xl w-full dark:text-white py-4">LightTooltip</h1>

<h2 class="text-2xl w-full dark:text-white py-4">LightTooltip top</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" top>
    <Button />
  </LightTooltip>
</div>

```svelte
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" top>
  <Button />
</LightTooltip>
```


<h2 class="text-2xl w-full dark:text-white py-4">LightTooltip bottom</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" bottom>
    <Button />
  </LightTooltip>
</div>

```svelte
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" bottom>
  <Button />
</LightTooltip>
```

<h2 class="text-2xl w-full dark:text-white py-4">LightTooltip right</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" right>
    <Button />
  </LightTooltip>
</div>

```svelte
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" right>
  <Button />
</LightTooltip>
```


<h2 class="text-2xl w-full dark:text-white py-4">LightTooltip left</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" left>
    <Button />
  </LightTooltip>
</div>

```svelte
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" left>
  <Button />
</LightTooltip>
```

<h1 class="text-3xl w-full dark:text-white py-4">References</h1>

<p class="dark:text-white pt-4 w-full">Read more about <a href="https://flowbite-svelte.vercel.app/buttons" class="text-blue-600 hover:underline dark:text-blue-500">Buttons.</a></p>
<p class="dark:text-white pt-4 w-full"><a href="https://flowbite.com/docs/components/tooltips/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Tooltip</a></p>