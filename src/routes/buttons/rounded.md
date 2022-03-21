---
layout: doc
---

<script>
  import { Button }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Rounded Button</h1>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl'
type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';
type ButtonType = 'button' | 'submit' | 'reset'
let rounded: boolean = false;
let textSize: Textsize = 'text-sm';
let name = 'Read more';
let buttonType: Buttontypes = 'blue';
let type: ButtonType = 'button';
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="dark" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="light" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="green" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="red" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="yellow" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="purple" rounded="true" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="dark" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="light" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="green" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="red" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="yellow" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="purple" rounded="true" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-sm" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="dark" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="light" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="green" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="red" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="yellow" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="purple" rounded="true" />
</div>

```html
<Button name="Button" textSize="text-sm" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="dark" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="light" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="green" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="red" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="yellow" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="purple" rounded="true" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-base" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="dark" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="light" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="green" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="red" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="yellow" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="purple" rounded="true" />
</div>

```html
<Button name="Button" textSize="text-base" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="dark" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="light" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="green" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="red" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="yellow" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="purple" rounded="true" />
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