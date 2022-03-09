---
layout: doc
---

<script>
  import { Alert, BorderAlert, InfoAlert }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white my-8">Alert</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="text-gray-900 dark:text-white py-4">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```svelte
<script>
  import { Alert } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Alert Default Props</h2>

```ts
let color: string = "blue"; // {gray|red|yellow|green|indigo|purple|pink} 
let alertId: string= "alert-1";
let closeBtn: boolean = false;
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Simple Alert Examples</h2>

```svelte
<Alert alertId="alert-blue">
    A simple info alert without a close button.
</Alert>

<Alert alertId="alert-gray" color="gray" closeBtn">
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-green" color="green" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-red" color="red" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-purple" color="purple" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-yellow" color="yellow" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-indigo" color="indigo" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-pink" color="pink" closeBtn>
  A simple info alert with a close button.
</Alert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Alert alertId="alert-blue">
    A simple info alert without a close button.
  </Alert>

  <Alert alertId="alert-gray" color="gray" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-green" color="green" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-red" color="red" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-purple" color="purple" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-yellow" color="yellow" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-indigo" color="indigo" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-pink" color="pink" closeBtn>
    A simple info alert with a close button.
  </Alert>
</div>
