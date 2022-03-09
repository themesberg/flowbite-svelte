---
layout: doc
---

<script>
import {Tooltip, Button} from '$lib/index'
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Default Tooltip</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Tooltip top</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" top>
    <Button />
  </Tooltip>
</div>

```svelte
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" top>
  <Button />
</Tooltip>
```


<h2 class="text-2xl w-full dark:text-white py-8">Tooltip bottom</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" bottom>
    <Button />
  </Tooltip>
</div>

```svelte
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" bottom>
  <Button />
</Tooltip>
```

<h2 class="text-2xl w-full dark:text-white py-8">Tooltip right</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" right>
    <Button />
  </Tooltip>
</div>

```svelte
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" right>
  <Button />
</Tooltip>
```


<h2 class="text-2xl w-full dark:text-white py-8">Tooltip left</h2>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" left>
    <Button />
  </Tooltip>
</div>

```svelte
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" left>
  <Button />
</Tooltip>
```

<h1 class="text-3xl w-full dark:text-white py-8">References</h1>

<p class="dark:text-white pt-4 w-full">Read more about <a href="https://flowbite-svelte.vercel.app/buttons" class="text-blue-600 hover:underline dark:text-blue-500">Buttons.</a></p>
<p class="dark:text-white pt-4 w-full"><a href="https://flowbite.com/docs/components/tooltips/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Tooltip</a></p>