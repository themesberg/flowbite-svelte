---
layout: doc
---

<script>
  import { Button } from "flowbite-svelte";
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white">Button Props</h1>

```js
let rounded = false;
let textSize = "text-sm";
let name = "Read more";
let type = "blue-outline"; // blue-outline | dark-outline | light-outline| green-outline | red-outline | yellow -outline| puple-outline
```

<h1 class="text-3xl w-full dark:text-white py-4">Size xs Outlined Buttons</h1>

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


<h1 class="text-3xl w-full dark:text-white my-8">Size sm Outlined Buttons</h1>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-sm" type="blue-outline" />
  <Button name="Button" textSize="text-sm" type="dark-outline" />
  <Button name="Button" textSize="text-sm" type="green-outline" />
  <Button name="Button" textSize="text-sm" type="red-outline" />
  <Button name="Button" textSize="text-sm" type="red-outline" />
  <Button name="Button" textSize="text-sm" type="purple-outline" />
</div>

```svelte
<Button name="Button" textSize="text-sm" type="blue-outline" />
<Button name="Button" textSize="text-sm" type="dark-outline" />
<Button name="Button" textSize="text-sm" type="green-outline" />
<Button name="Button" textSize="text-sm" type="red-outline" />
<Button name="Button" textSize="text-sm" type="red-outline" />
<Button name="Button" textSize="text-sm" type="purple-outline" />
```


<h1 class="text-3xl w-full dark:text-white my-8">Size sm Outlined Buttons</h1>

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
