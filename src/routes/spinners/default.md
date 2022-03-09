---
layout: doc
---

<script>
  import { Spinner }from '$lib/index';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Spinner</h1>


```svelte
<script>
  import { Spinner } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Default Props</h2>

```js
let color = "blue"; // {blue|gray|green|red|yellow|pink|purple}
let bg = "text-gray-200";
let size = "w-8 h-8";
let align; // text-{left|center|right}
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Colors</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
</div>

```svelte
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Sizing</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Spinner size="w-4 h-4"/>
<Spinner size="w-6 h-6" />
<Spinner size="w-8 h-8"/>
</div>

```svelte
<Spinner size="w-4 h-4"/>
<Spinner size="w-6 h-6" />
<Spinner size="w-8 h-8"/>
```


<h2 class="text-2xl mt-8 dark:text-white py-8">Alignment</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Spinner align="text-left"/>
<Spinner align="text-center" />
<Spinner align="text-right"/>
</div>

```svelte
<Spinner align="text-left"/>
<Spinner align="text-center" />
<Spinner align="text-right"/>
```