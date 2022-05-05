---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { ModalButton, ExtraLargeModal, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/ExtraLargeModal.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let modal2;
  let modal3;

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    modal2.closeModal()
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    modal3.closeModal()
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    modal3.closeModal()
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
      label:'Extra-large modals',
      href:'/modals/extra-large'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Extra-large Modals</h1>

<Htwo label="Set up" />

<p>Import ExtraLargeModal and ModalButton components and set variables in the script tag. To close a modal, use `closeModal` function in your event handler.</p>


```html
<script>
  import { ModalButton, ExtraLargeModal }from '$lib/index';

  let modal2;
  let modal3;

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    modal2.closeModal()
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    modal3.closeModal()
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    modal3.closeModal()
  };
</script>
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="exm1" btnName="Info Modal" />
</ExampleDiv>

<ExtraLargeModal id="exm1" title="Info Modal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</ExtraLargeModal>

<p> Create a button and modal.</p>

```html
<script>
 import { ModalButton, ExtraLargeModal } from "flowbite-svelte";
</script>

<ModalButton id="exm1" btnName="Info Modal" />

<ExtraLargeModal id="exm1" title="Info Modal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</ExtraLargeModal>
```

<Htwo label="Extra-large modals with on button" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="id1" btnName="Extra Large Modal with one button" btnColor="green" />
</ExampleDiv>

<ExtraLargeModal
  bind:this={modal2}
  id="id1"
  title="Default Modal Title"
  btn1="Go home"
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</ExtraLargeModal>

<p class=" dark:text-white py-4"> Create a button and modal.</p>

```html
<script>
import { ModalButton, ExtraLargeModal } from "flowbite-svelte";
let modal2;
const handlebtn1 = () => {
  alert("handlebtn1 is clicked from a parent page.");
  extraLargModal.closeModal()
};
</script>  
<ModalButton id="id1" btnName="Extra Large Modal with one button" btnColor="green" />

<ExtraLargeModal
  bind:this={modal2}
  id="id1"
  title="Default Modal Title"
  btn1="Go home"
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</ExtraLargeModal>
```

<Htwo label="Extra-large modal with two buttons" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="id2" btnName="Extra Large Modal with two buttons" btnColor="purple" />
</ExampleDiv>

<p class=" dark:text-white py-4">Create a button and modal.</p>

```html
<ModalButton id="id2" btnName="Extra Large Modal with two buttons" btnColor="purple" />

<ExtraLargeModal
  bind:this={modal3}
  id="id2"
  btnColor="indigo"
  title="Default Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtn2}
  on:handlebtn2={handlebtn3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</ExtraLargeModal>
```

  <ExtraLargeModal
    bind:this={modal3}
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
  </ExtraLargeModal>


<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<h3>ModalButton</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>ExtraLargeModal</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>