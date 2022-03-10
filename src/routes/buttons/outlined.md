---
layout: doc
---

<script>
  import { Button }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white">Button outlined</h1>

```js
import { Button } from "flowbite-svelte";
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

```js
let rounded = false;
let textSize = "text-sm";
let name = "Read more";
let type = "blue-outline"; // blue-outline | dark-outline | light-outline| green-outline | red-outline | yellow -outline| puple-outline
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" type="blue-outline" />
  <Button name="Button text-xs" textSize="text-xs" type="dark-outline" />
  <Button name="Button text-xs" textSize="text-xs" type="green-outline" />
  <Button name="Button text-xs" textSize="text-xs" type="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" type="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" type="purple-outline" />
</div>

```svelte
<Button name="Button text-xs" textSize="text-xs" type="blue-outline" />
<Button name="Button text-xs" textSize="text-xs" type="dark-outline" />
<Button name="Button text-xs" textSize="text-xs" type="green-outline" />
<Button name="Button text-xs" textSize="text-xs" type="red-outline" />
<Button name="Button text-xs" textSize="text-xs" type="red-outline" />
<Button name="Button text-xs" textSize="text-xs" type="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" type="blue-outline" />
  <Button name="Button" type="dark-outline" />
  <Button name="Button" type="green-outline" />
  <Button name="Button" type="red-outline" />
  <Button name="Button" type="red-outline" />
  <Button name="Button" type="purple-outline" />
</div>

```svelte
<Button name="Button" type="blue-outline" />
<Button name="Button" type="dark-outline" />
<Button name="Button" type="green-outline" />
<Button name="Button" type="red-outline" />
<Button name="Button" type="red-outline" />
<Button name="Button" type="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button" textSize="text-base" type="blue-outline" />
<Button name="Button" textSize="text-base" type="dark-outline" />
<Button name="Button" textSize="text-base" type="green-outline" />
<Button name="Button" textSize="text-base" type="red-outline" />
<Button name="Button" textSize="text-base" type="red-outline" />
<Button name="Button" textSize="text-base" type="purple-outline" />
</div>

```svelte
<Button name="Button" textSize="text-base" type="blue-outline" />
<Button name="Button" textSize="text-base" type="dark-outline" />
<Button name="Button" textSize="text-base" type="green-outline" />
<Button name="Button" textSize="text-base" type="red-outline" />
<Button name="Button" textSize="text-base" type="red-outline" />
<Button name="Button" textSize="text-base" type="purple-outline" />
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Buttons</a></p>