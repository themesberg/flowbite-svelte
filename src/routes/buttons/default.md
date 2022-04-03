---
layout: buttonLayout
---

<script>
  import { Button }from '$lib/index';
  import {ArrowCircleRightIconOutline} from '@codewithshin/svelte-heroicons'
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Buttons</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Sizes</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" />
  <Button name="Button text-sm" textSize="text-sm" />
  <Button name="Button text-base" textSize="text-base" />
  <Button name="Button text-lg" textSize="text-lg" />
  <Button name="Button text-xl" textSize="text-xl" />
  <Button name="Button text-2xl" textSize="text-2xl" />
  <Button name="Button text-3xl" textSize="text-3xl" />
  <Button name="Button text-4xl" textSize="text-4xl" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" />
<Button name="Button text-sm" textSize="text-sm" />
<Button name="Button text-base" textSize="text-base" />
<Button name="Button text-lg" textSize="text-lg" />
<Button name="Button text-xl" textSize="text-xl" />
<Button name="Button text-2xl" textSize="text-2xl" />
<Button name="Button text-3xl" textSize="text-3xl" />
<Button name="Button text-4xl" textSize="text-4xl" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Colors</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-sm" />
  <Button name="Button" textSize="text-sm" btnColor="dark" />
  <Button name="Button" textSize="text-sm" btnColor="light" />
  <Button name="Button" textSize="text-sm" btnColor="red" />
  <Button name="Button" textSize="text-sm" btnColor="green" />
  <Button name="Button" textSize="text-sm" btnColor="yellow" />
  <Button name="Button" textSize="text-sm" btnColor="purple" />
</div>

```html
<Button name="Button" textSize="text-sm" />
<Button name="Button" textSize="text-sm" btnColor="dark" />
<Button name="Button" textSize="text-sm" btnColor="light" />
<Button name="Button" textSize="text-sm" btnColor="red" />
<Button name="Button" textSize="text-sm" btnColor="green" />
<Button name="Button" textSize="text-sm" btnColor="yellow" />
<Button name="Button" textSize="text-sm" btnColor="purple" />
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

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
