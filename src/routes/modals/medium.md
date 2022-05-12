---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { MediumModal, ModalButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/MediumModal.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'


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
      label:'Medium modals',
      href:'/modals/medium'
    },
  ]
</script>

<Breadcrumb {crumbs}/>



<h1 class="text-3xl w-full dark:text-white py-8">Medium Modals</h1>

<Htwo label="Set up" />

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

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="modal1" btnName="Medium Modal" />
</ExampleDiv>

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

<Htwo label="Medium modals with an action button" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="id1" btnName="Medium Modal with one action button" btnColor="gray" />
</ExampleDiv>

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

<Htwo label="Medium modal with an action button" />

<ExampleDiv>
  <ModalButton id="id2" btnName="Medium Modal with two action buttons" btnColor="blue" />
</ExampleDiv>

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>ModalButton</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>MediumModal</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>