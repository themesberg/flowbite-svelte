---
layout: doc
---

<script>
  import { Alert, BorderAlert, InfoAlert }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Alert</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="text-gray-900 dark:text-white py-4">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```svelte
<script>
  import { InfoAlert } from "flowbite-svelte";
</script>
```


<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">InfoAlert Default Props</h2>

```ts
let color: string = "blue"; // {gray|red|yellow|green|indigo|purple|pink}  
let alertId: string = "alert-additional-content-1";
let infoLink: string = undefined;
let closeBtn: boolean = false;
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Information Alert Examples</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert>
    <span slot="header">Info header 1</span>
    InfoAlert without View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert>
  <span slot="header">Info header 1</span>
  InfoAlert without View more and Dismiss button.
</InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-2"
    color="green"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 2</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
 <InfoAlert
    alertId="info-alert-2"
    color="green"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 2</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-3"
    color="red"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 3</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert
    alertId="info-alert-3"
    color="red"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 3</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-4"
    color="yellow"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert
    alertId="info-alert-4"
    color="yellow"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-5"
    color="gray"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 5</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert
    alertId="info-alert-5"
    color="gray"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 5</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-6"
    color="indigo"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert
    alertId="info-alert-6"
    color="indigo"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-7"
    color="purple"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert
    alertId="info-alert-7"
    color="purple"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-8"
    color="pink"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```svelte
<InfoAlert
    alertId="info-alert-8"
    color="pink"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/alerts/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Alerts</a></p>

