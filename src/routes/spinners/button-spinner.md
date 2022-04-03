---
layout: spinnerLayout
---

<script>
  import { SpinnerButton }from '$lib/index';
</script>


<h1 class="text-3xl w-full dark:text-white py-8">Button spinner</h1>

```html
<script>
  import { SpinnerButton } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Colors</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SpinnerButton />
<SpinnerButton color="blue" />
</div>

```html
<SpinnerButton />
<SpinnerButton color="blue" />
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Slot</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SpinnerButton>Here you go ...</SpinnerButton>
<SpinnerButton color="blue" >Here you go ...</SpinnerButton>
</div>

```html
<SpinnerButton>Here you go ...</SpinnerButton>
<SpinnerButton color="blue" >Here you go ...</SpinnerButton>
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Prop</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
let color: 'blue' | undefined;
```
