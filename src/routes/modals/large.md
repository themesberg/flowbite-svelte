---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { LargeModal, ModalButton, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/LargeModal.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'


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
      label:'Large modals',
      href:'/modals/large'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Large Modals</h1>

<Htwo label="Set up" />

<p>Import LargeModal, ModalButton, modalIdStor components and set variables in the script tag. To close a modal, use `closeModal` function in your event handler.</p>


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

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="modal1" btnName="Large Modal" />
</ExampleDiv>

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

<Htwo label="Large modal with an action button" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="id1" btnName="Large Modal with one button" btnColor="pink" />
</ExampleDiv>

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

<Htwo label="Large modal with two action buttons" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="id2" btnName="Large Modal with two buttons" btnColor="indigo" />
</ExampleDiv>

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>ModalButton</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3>LargeModal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>