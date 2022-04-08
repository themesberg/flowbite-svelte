---
layout: modalLayout
---

<script>
  import { LargeModal, ModalButton, Table, TableDefaultRow }from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/LargeModal.json'
  export let items1 = componentProps1.props
  export let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let modal1;
  let modal2;

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    modal1.closeModal()
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    modal2.closeModal()
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    modal2.closeModal()
  };
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Large Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white py-4 text-lg">Import LargeModal, ModalButton, modalIdStor components and set variables in the script tag. To close a modal, use `closeModal` function in your event handler.</p>


```html
<script>
  import { LargeModal, ModalButton } from "flowbite-svelte";

  modal1;
  modal2;

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    modal1.closeModal()
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    modal2.closeModal()
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    modal2.closeModal()
  };
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id="modal1" btnName="Large Modal" />
</div>

<LargeModal id="modal1" title="Large Modal Title">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</LargeModal>

<p class=" dark:text-white py-4"> Create a button and modal.

```html
<ModalButton id="modal1" btnName="Large Modal" />

<LargeModal id="modal1" title="Large Modal Title">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</LargeModal>
```

<h2 class="text-2xl w-full dark:text-white py-8">Large Modal with an action button</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id="id1" btnName="Large Modal with one button" btnColor="pink" />
</div>

<LargeModal
  bind:this={modal1}
  id="id1"
  title="Default Modal Title"
  btn1="Go home"
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</LargeModal>

```html
<ModalButton id="id1" btnName="Large Modal with one button" btnColor="pink" />

<LargeModal
  bind:this={modal1}
  id="id1"
  title="Default Modal Title"
  btn1="Go home"
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</LargeModal>
```

<h2 class="text-2xl w-full dark:text-white py-8">Large Modal with two action buttons</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id="id2" btnName="Large Modal with two buttons" btnColor="indigo" />
</div>

<LargeModal
  bind:this={modal2}
  id="id2"
  btnColor="indigo"
  title="Default Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtn2}
  on:handlebtn2={handlebtn3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</LargeModal>


```html
<ModalButton id="id2" btnName="Large Modal with two buttons" btnColor="indigo" />

<LargeModal
  bind:this={modal2}
  id="id2"
  btnColor="indigo"
  title="Default Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtn2}
  on:handlebtn2={handlebtn3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</LargeModal>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3 class="text-xl w-full dark:text-white py-8">ModalButton</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3 class="text-xl w-full dark:text-white py-8">LargeModal</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>