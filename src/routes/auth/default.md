---
layout: doc
---

<script lang="ts">
	import { Register, Login, ForgotPassword, Reset } from '$lib/index';
	const fields = [
		{
			label: 'name',
			fieldtype: 'text',
			required: true,
			placeholder: 'Your name'
		},
		{
			label: 'email',
			fieldtype: 'email',
			required: true,
			placeholder: 'Your email'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
	let loginfield = [
		{
			label: 'username',
			fieldtype: 'text',
			required: true,
			placeholder: 'Username'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
</script>

<h1 class="text-3xl w-full text-gray-900 dark:text-white my-8">Auth</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Register</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<Register {fields} />
</div>

```html
<script>
	import { Register } from 'flowbite-svelte';
	const fields = [
		{
			label: 'name',
			fieldtype: 'text',
			required: true,
			placeholder: 'Your name'
		},
		{
			label: 'email',
			fieldtype: 'email',
			required: true,
			placeholder: 'Your email'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
</script>

<Register {fields} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Login</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<Login fields={loginfield} />
</div>

```html
<script>
	import {  Login } from 'flowbite-svelte';
	let loginfield = [
		{
			label: 'email',
			fieldtype: 'email',
			required: true,
			placeholder: 'Your email'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
</script>

	<Login fields={loginfield} />

```

<h2 class="text-2xl w-full dark:text-white py-8">Forgot password</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<ForgotPassword />
</div>

```html
<script>
	import { ForgotPassword } from 'flowbite-svelte';
</script>

<ForgotPassword />
```

<h2 class="text-2xl w-full dark:text-white py-8">Reset</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<Reset />
</div>

```html
<script>
	import { Reset } from 'flowbite-svelte';
</script>

<Reset />
```
