---
layout: modalLayout
---

<script>
  import { SignInModal, ModalButton, modalIdStore }from '$lib/index';

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  let signinId = "signin-modal2";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "blue";
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sign-in Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white text-base py-4">Import SignInModal, ModalButton components and set variables in the script tag.</p>

```html
import { SignInModal, ModalButton, modalIdStore } from "flowbite-svelte";

let signinId = "signin-modal2";
let btnSignInName = "Sign In Modal";
let btnSignInColor = "blue";
```

<h2 class="text-2xl w-full dark:text-white py-8">SignIn Modals</h2>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';
let id = 'signin-modal';
let btnSignInColor: Colors = 'blue';
let titleSignIn = 'Sign in to our platform';
let lostPasswordLink: string;
let rememberMe = false;
let signUp: string;
let action: string;
let showModalId: string;
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton
    id={signinId}
    btnName={btnSignInName}
    btnColor={btnSignInColor}
  />
</div>

<p class="dark:text-white text-base py-4">Create a button and modal.</p>

```html
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
<SignInModal
  id={signinId}
  titleSignIn=SignIn Modal Title"
  lostPasswordLink="/auth/lost-password"
  signUpLink="/auth/signup"
  formLink="/auth/signin"
/>
```

<SignInModal
  id={signinId}
  titleSignIn="SignIn Modal Title"
  lostPasswordLink="/"
  signUpLink="/about"
  formLink="/modals"
/>

