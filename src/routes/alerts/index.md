---
layout: doc
---

<script>
  import { Alert, BorderAlert, InfoAlert } from "$lib/index";
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white">Alert: Setup</h1>

<p class="text-gray-900 dark:text-white">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```svelte
<script>
  import { Alert, BorderAlert, InfoAlert } from "svelte-flow";
</script>
```

<h1 class="text-3xl w-full text-gray-900 dark:text-white">Simple Alert Examples</h1>

```svelte
<Alert alertId="alert-blue">
  A simple info alert without a close button.
</Alert>
<Alert alertId="alert-red" color="red" closeBtn="true">
  A simple info alert with a close button.
</Alert>
```

<div class="container mt-4  mx-auto">
  <Alert alertId="alert-blue">
    A simple info alert without a close button.
  </Alert>

  <Alert alertId="alert-red" color="red" closeBtn="true">
    A simple info alert with a close button.
  </Alert>
</div>

<h1 class="text-3xl w-full text-gray-900 dark:text-white">Border Alert Examples</h1>

```svelte
<BorderAlert color="green">
  A border alert without the close button.
</BorderAlert>

<BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
  A border alert with the close button.
</BorderAlert>
```

<div class="container mt-4  mx-auto">
  <BorderAlert color="green">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
    A border alert with the close button.
  </BorderAlert>
</div>


<h1 class="text-3xl w-full text-gray-900 dark:text-white">Information Alert Examples</h1>

```svelte
<BorderAlert color="green">
  A border alert without the close button.
</BorderAlert>
  
<BorderAlert alertId="border-alert-2" color="yellow" closeBtn="true">
  A border alert with the close button.
</BorderAlert>
```

<div class="container mt-4  mx-auto">
  <InfoAlert>
    <span slot="header">Info header 1</span>
    InfoAlert without View more and Dismiss button.
  </InfoAlert>

  <InfoAlert
    alertId="info-alert-2"
    color="gray"
    closeBtn="true"
    infoLink="/dummy-pages/about"
  >
    <span slot="header">Info header 2</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

