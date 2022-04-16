---
layout: modalLayout
---

<script>
  import { MediumModal, ModalButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/MediumModal.json'
  export let items1 = componentProps1.props
  export let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let modal1;
  let modal2;

  const handlebtnM1 = () => {
    modal1.closeModal()
  };

  const handlebtnM2 = () => {
    modal2.closeModal()
  };
  const handlebtnM3 = () => {
    modal2.closeModal()
  };
</script>


<h1 class="text-3xl w-full dark:text-white py-8">Medium Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

<p>Import MediumModal, ModalButton, modalIdStor components and set variables in the script tag. To close a modal, use `closeModal` function in your event handler.</p>

```html
<script>
  import { MediumModal, ModalButton } from "flowbite-svelte";

  let modal1;
  let modal2;

  const handlebtnM1 = () => {
    modal1.closeModal()
  };

  const handlebtnM2 = () => {
    modal2.closeModal()
  };
  const handlebtnM3 = () => {
    modal2.closeModal()
  };
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id="modal1" btnName="Medium Modal" />
</div>

<MediumModal id="modal1" title="Basic Modal Title">
  Basic Modal Content: Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Ad odit aspernatur minus deserunt illo error eum temporibus officiis.
  Ab facere dolorem quisquam omnis? Aspernatur, asperiores voluptas quis culpa
  consectetur saepe!
</MediumModal>

<p> Create a button and modal.</p>

```html
<ModalButton id="modal1" btnName="Medium Modal" />
<MediumModal id="modal1" title="Basic Modal Title">
  Basic Modal Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Ad odit aspernatur minus deserunt illo error eum temporibus officiis. 
</MediumModal>
```

<h2 class="text-2xl w-full dark:text-white py-4">Medium Modals with an Action Button</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id="id1" btnName="Medium Modal with one action button" btnColor="gray" />
</div>

<MediumModal
  bind:this={modal1}
  id="id1"
  btnColor="yellow"
  title="Medium Modal Title"
  btn1="Close"
  on:handlebtn1={handlebtnM1}
>
  Modal 2 Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Ad odit aspernatur minus deserunt illo error eum temporibus officiis. Ab
  facere dolorem quisquam omnis? Aspernatur, asperiores voluptas quis culpa
  consectetur saepe!
</MediumModal>

```html
<ModalButton id="id1" btnName="Medium Modal with one action button" btnColor="gray" />
<MediumModal
  bind:this={modal1}
  id="id1"
  btnColor="yellow"
  title="Medium Modal Title"
  btn1="Close"
  on:handlebtn1={handlebtnM1}
>
  Modal 2 Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
  odit aspernatur minus deserunt illo error eum temporibus officiis. 
</MediumModal>
```

<h2 class="text-2xl w-full dark:text-white py-4">Medium Modals with action buttons</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id="id2" btnName="Medium Modal with two action buttons" btnColor="blue" />
</div>

<MediumModal
  bind:this={modal2}
  id="id2"
  btnColor="indigo"
  title="Default Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnM2}
  on:handlebtn2={handlebtnM3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</MediumModal>


```html
<ModalButton id="id2" btnName="Medium Modal with two action buttons" btnColor="blue" />
<MediumModal
  bind:this={modal2}
  id="id2"
  btnColor="indigo"
  title="Default Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnM2}
  on:handlebtn2={handlebtnM3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</MediumModal>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>ModalButton</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>MediumModal</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>