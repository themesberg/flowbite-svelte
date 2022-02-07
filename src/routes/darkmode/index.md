---
layout: doc
---

<h1 class="text-3xl w-full dark:text-white">Dark mode</h1>

<p class=" dark:text-white">The best place to import is in the `__layout.svelte.</p>

```html
<script>
import { Darkmode } from "svelte-flow";
</script>

<Darkmode />
```

<p class="dark:text-white">The default value of `btnClass` is:</p>

```html
let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed left-2 top-16 z-50"
```

<p class="dark:text-white">Set your CSS and add it to the prop.:</p>

```html
<script>
import { Darkmode } from "svelte-flow";

let btnClass="Add your class here"
</script>

<Darkmode {btnClass} />
```

