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
let type = "button"; // 'button' | 'submit' | 'reset'
let buttonType = "blue-outline"; // blue-outline | dark-outline | light-outline| green-outline | red-outline | yellow -outline| puple-outline
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" buttonType="blue-outline" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="dark-outline" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="green-outline" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="purple-outline" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" buttonType="blue-outline" />
<Button name="Button text-xs" textSize="text-xs" buttonType="dark-outline" />
<Button name="Button text-xs" textSize="text-xs" buttonType="green-outline" />
<Button name="Button text-xs" textSize="text-xs" buttonType="red-outline" />
<Button name="Button text-xs" textSize="text-xs" buttonType="red-outline" />
<Button name="Button text-xs" textSize="text-xs" buttonType="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" buttonType="blue-outline" />
  <Button name="Button" buttonType="dark-outline" />
  <Button name="Button" buttonType="green-outline" />
  <Button name="Button" buttonType="red-outline" />
  <Button name="Button" buttonType="red-outline" />
  <Button name="Button" buttonType="purple-outline" />
</div>

```html
<Button name="Button" buttonType="blue-outline" />
<Button name="Button" buttonType="dark-outline" />
<Button name="Button" buttonType="green-outline" />
<Button name="Button" buttonType="red-outline" />
<Button name="Button" buttonType="red-outline" />
<Button name="Button" buttonType="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button" textSize="text-base" buttonType="blue-outline" />
<Button name="Button" textSize="text-base" buttonType="dark-outline" />
<Button name="Button" textSize="text-base" buttonType="green-outline" />
<Button name="Button" textSize="text-base" buttonType="red-outline" />
<Button name="Button" textSize="text-base" buttonType="red-outline" />
<Button name="Button" textSize="text-base" buttonType="purple-outline" />
</div>

```html
<Button name="Button" textSize="text-base" buttonType="blue-outline" />
<Button name="Button" textSize="text-base" buttonType="dark-outline" />
<Button name="Button" textSize="text-base" buttonType="green-outline" />
<Button name="Button" textSize="text-base" buttonType="red-outline" />
<Button name="Button" textSize="text-base" buttonType="red-outline" />
<Button name="Button" textSize="text-base" buttonType="purple-outline" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/setup" class="text-blue-600 hover:underline dark:text-blue-500">Button Setup</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/colored-shadow" class="text-blue-600 hover:underline dark:text-blue-500">Colored Shadow Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/gradient-duotone" class="text-blue-600 hover:underline dark:text-blue-500">Gradient Duotone Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/gradient-monochrome" class="text-blue-600 hover:underline dark:text-blue-500">Gradient Monochrome Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/gradient-outline" class="text-blue-600 hover:underline dark:text-blue-500">Gradietn Outline Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/outlined" class="text-blue-600 hover:underline dark:text-blue-500">Outlined Button</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/buttons/rounded" class="text-blue-600 hover:underline dark:text-blue-500">Rounded Button</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Buttons</a></p>