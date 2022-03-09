---
layout: doc
---

<script>
  import { Button } from "flowbite-svelte";
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white py-4">Button Props</h1>

```js
let rounded = true;
let textSize = "text-sm";
let name = "Read more";
let type = "blue"; // | light | green | red | yellow | puple
```

<h1 class="text-3xl w-full dark:text-white my-8">Size xs Rounded Buttons</h1>

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



<h1 class="text-3xl w-full dark:text-white my-8">Size sm Rounded Buttons</h1>

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


<h1 class="text-3xl w-full dark:text-white my-8">Size base Rounded Buttons</h1>

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
