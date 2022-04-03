---
layout: cardLayout
---

<script>
  import { SignInCard } from '$lib/index';
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

<h1 class="text-3xl w-full dark:text-white py-8">SignInCard</h1>

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

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type AuthFunctionType = () => Promise<void>;
interface LinkType {
    name: string;
    href: string;
    rel?: string;
}
let login: AuthFunctionType;
let title = 'Sign in';
let btnSignInColor = 'blue';
let rememberMe = false;
let signup: LinkType;
let lostPassword: LinkType;
```
