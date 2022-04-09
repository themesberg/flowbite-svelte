---
layout: cardLayout
---

<script>
  import { SignInCard, Table, TableDefaultRow } from '$lib/index';
  import componentProps from '../props/SignInCard.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let title = 'Sign in';
  let action='/';
  let btnSignInColor = 'red';
	let rememberMe = true;
	let signupLink = {
		href: '/',
		rel: 'external'
	};
	let lostPasswordLink = {
		href: '/'
	};
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sign In Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white py-4 text-lg">Import SignInCard in the script tag.</p>

```html
<script>
  import { SignInCard } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <SignInCard id="id1" {btnSignInColor} {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
</div>

```html
 <SignInCard id="id1" {btnSignInColor} {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <SignInCard id="id2" btnSignInColor="purple" {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
</div>

```html
<SignInCard id="id2" btnSignInColor="purple" {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>