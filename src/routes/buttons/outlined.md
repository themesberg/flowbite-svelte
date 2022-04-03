---
layout: buttonLayout
---

<script>
  import { Button }from '$lib/index';
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white">Button outlined</h1>

```js
import { Button } from "flowbite-svelte";
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" btnColor="blue-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="dark-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="green-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="purple-outline" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" btnColor="blue-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="dark-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="green-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" btnColor="blue-outline" />
  <Button name="Button" btnColor="dark-outline" />
  <Button name="Button" btnColor="green-outline" />
  <Button name="Button" btnColor="red-outline" />
  <Button name="Button" btnColor="red-outline" />
  <Button name="Button" btnColor="purple-outline" />
</div>

```html
<Button name="Button" btnColor="blue-outline" />
<Button name="Button" btnColor="dark-outline" />
<Button name="Button" btnColor="green-outline" />
<Button name="Button" btnColor="red-outline" />
<Button name="Button" btnColor="red-outline" />
<Button name="Button" btnColor="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button" textSize="text-base" btnColor="blue-outline" />
<Button name="Button" textSize="text-base" btnColor="dark-outline" />
<Button name="Button" textSize="text-base" btnColor="green-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="purple-outline" />
</div>

```html
<Button name="Button" textSize="text-base" btnColor="blue-outline" />
<Button name="Button" textSize="text-base" btnColor="dark-outline" />
<Button name="Button" textSize="text-base" btnColor="green-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="purple-outline" />
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl'
type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';
type ButtonType = 'button' | 'submit' | 'reset'
let rounded: boolean = false;
let textSize: Textsize = 'text-sm';
let name = 'Read more';
let btnColor: Buttontypes = 'blue';
let btnType: ButtonType = 'button';
```
