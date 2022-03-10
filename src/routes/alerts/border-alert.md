---
layout: doc
---

<script>
  import { Alert, BorderAlert, InfoAlert }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white my-8">Alert</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```svelte
<script>
  import { BorderAlert } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">BorderAlert Default Props</h2>

```js
let color: string = "blue"; // {gray|red|yellow|green|indigo|purple|pink} 
let alertId: string = "alert-border-1";
let closeBtn: boolean = false;
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Border Alert Examples</h2>

```svelte
<BorderAlert color="blue">
  A border alert without the close button.
</BorderAlert>

<BorderAlert color="gray">
  A border alert without the close button.
</BorderAlert>

<BorderAlert color="green">
  A border alert without the close button.
</BorderAlert>

<BorderAlert alertId="border-alert-1" color="yellow" closeBtn>
  A border alert with the close button.
</BorderAlert>

<BorderAlert alertId="border-alert-2" color="red" closeBtn>
  A border alert with the close button.
</BorderAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <BorderAlert color="blue">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert color="gray">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert color="green">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-1" color="yellow" closeBtn>
    A border alert with the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-2" color="red" closeBtn>
    A border alert with the close button.
  </BorderAlert>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/alerts/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Alerts</a></p>