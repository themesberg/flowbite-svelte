---
layout: modalLayout
---

<script>
  import { SignInModal, ModalButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/SignInModal.json'
  export let items1 = componentProps1.props
  export let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let signmodal;
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sign-in Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white text-base py-4">Import SignInModal, ModalButton components and set variables in the script tag.</p>

```html
import { SignInModal, ModalButton } from "flowbite-svelte";
```

<h2 class="text-2xl w-full dark:text-white py-8">SignIn Modals</h2>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton
    id="signin1"
    btnName="Sign In Modal"
    btnColor="green"
  />
</div>

<SignInModal
  id="signin1"
  titleSignIn="SignIn Modal Title"
  lostPasswordLink="/"
  signUpLink="/about"
  formLink="/modals"
/>


<p class="dark:text-white text-base py-4">Create a button and modal.</p>

```html
 <ModalButton
    id="signin1"
    btnName="Sign In Modal"
    btnColor="green"
/>
<SignInModal
  id="signin1"
  titleSignIn="SignIn Modal Title"
  lostPasswordLink="/"
  signUpLink="/about"
  formLink="/modals"
/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>ModalButton</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>SignInModal</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>