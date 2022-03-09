---
layout: doc
---

<script>
  import { SignInCard }from '$lib/index';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">SignInCard</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white py-4">Import SignInCard in the script tag.</p>

```svelte
<script>
  import { SignInCard } from "flowbite-svelte";
</script>
```

<h2 class="text-xl w-full mt-8 dark:text-white py-8">SignInCard</h2>

```svelte
 <SignInCard id="id1" btnSignInColor="red" />
```

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <SignInCard id="id1" btnSignInColor="red" />
</div>



```svelte
<SignInCard id="id2" btnSignInColor="purple" />
```

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <SignInCard id="id2" btnSignInColor="purple" />
</div>


<h1 class="text-3xl w-full dark:text-white py-8">References</h1>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Flowbite Card</a></p>