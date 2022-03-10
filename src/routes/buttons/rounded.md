---
layout: doc
---

<script>
  import { Button }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Button Props</h1>

```js
let rounded = true;
let textSize = "text-sm";
let name = "Read more";
let type = "blue"; // | light | green | red | yellow | puple
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" type="dark" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" type="light" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" type="green" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" type="red" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" type="yellow" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" type="purple" rounded="true" />
</div>

```svelte
<Button name="Button text-xs" textSize="text-xs" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" type="dark" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" type="light" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" type="green" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" type="red" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" type="yellow" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" type="purple" rounded="true" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-sm" rounded="true" />
  <Button name="Button" textSize="text-sm" type="dark" rounded="true" />
  <Button name="Button" textSize="text-sm" type="light" rounded="true" />
  <Button name="Button" textSize="text-sm" type="green" rounded="true" />
  <Button name="Button" textSize="text-sm" type="red" rounded="true" />
  <Button name="Button" textSize="text-sm" type="yellow" rounded="true" />
  <Button name="Button" textSize="text-sm" type="purple" rounded="true" />
</div>

```svelte
<Button name="Button" textSize="text-sm" rounded="true" />
<Button name="Button" textSize="text-sm" type="dark" rounded="true" />
<Button name="Button" textSize="text-sm" type="light" rounded="true" />
<Button name="Button" textSize="text-sm" type="green" rounded="true" />
<Button name="Button" textSize="text-sm" type="red" rounded="true" />
<Button name="Button" textSize="text-sm" type="yellow" rounded="true" />
<Button name="Button" textSize="text-sm" type="purple" rounded="true" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-base" rounded="true" />
  <Button name="Button" textSize="text-base" type="dark" rounded="true" />
  <Button name="Button" textSize="text-base" type="light" rounded="true" />
  <Button name="Button" textSize="text-base" type="green" rounded="true" />
  <Button name="Button" textSize="text-base" type="red" rounded="true" />
  <Button name="Button" textSize="text-base" type="yellow" rounded="true" />
  <Button name="Button" textSize="text-base" type="purple" rounded="true" />
</div>

```svelte
<Button name="Button" textSize="text-base" rounded="true" />
<Button name="Button" textSize="text-base" type="dark" rounded="true" />
<Button name="Button" textSize="text-base" type="light" rounded="true" />
<Button name="Button" textSize="text-base" type="green" rounded="true" />
<Button name="Button" textSize="text-base" type="red" rounded="true" />
<Button name="Button" textSize="text-base" type="yellow" rounded="true" />
<Button name="Button" textSize="text-base" type="purple" rounded="true" />
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Buttons</a></p>