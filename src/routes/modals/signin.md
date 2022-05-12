---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { SignInModal, ModalButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/SignInModal.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let signmodal;

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Modals',
      href:'/modals/'
    },
    {
      label:'Signin modals',
      href:'/modals/signin'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Sign-in Modals</h1>

<Htwo label="Set up" />

<p class="dark:text-white text-base py-4">Import SignInModal, ModalButton components and set variables in the script tag.</p>

```html
import { SignInModal, ModalButton } from "flowbite-svelte";
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <ModalButton
    id="signin1"
    btnName="Sign In Modal"
    btnColor="green"
  />
</ExampleDiv>

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>

<h3>ModalButton</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>SignInModal</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>