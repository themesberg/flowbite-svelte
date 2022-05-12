---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { SmallModal, ModalButton, modalIdStore, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import { goto } from "$app/navigation";
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/SmallModal.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  // for basic
  const idBasic = "basic-modal";
  const btnBasicName = "Basic Modal";

  // for small modal 1
  const btnName1 = "Small Modal";
  const id1 = "small-modal";
  const btnColor1 = "purple";
  let smallModal1;

  const handlebtnS1 = () => {
    goto("/");
    smallModal1.closeModal();
  };

  const handlebtnS2 = () => {
    smallModal1.closeModal();
  };

  // for small modal 2
  const btnName2 = "Small Modal 2";
  const id2 = "small-modal-2";
  const btnColor2 = "red";
  let smallModal2;

  const handlebtnS3 = () => {
    goto("/");
    smallModal1.closeModal();
  };

  const handlebtnS4 = () => {
    smallModal2.closeModal();
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
      label:'Small modals',
      href:'/modals/small'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Small Modals</h1>

<Htwo label="Set up" />

<p>Import SmallModal, ModalButton, modalIdStor components and set variables in the script tag. Add `closeModal` method if you want to close the modal in a button.</p>

```html
<script>
  import { SmallModal, ModalButton } from "flowbite-svelte";
  import { goto } from "$app/navigation";

  // for basic
  const idBasic = "basic-modal";
  const btnBasicName = "Basic Modal";

  // for small modal 1
  const btnName1 = "Small Modal";
  const id1 = "small-modal";
  const btnColor1 = "purple";
  let smallModal1;

  const handlebtnS1 = () => {
    goto("/");
  };

  const handlebtnS2 = () => {
    smallModal1.closeModal()
  };

  // for small modal 2
  const btnName2 = "Small Modal 2";
  const id2 = "small-modal-2";
  const btnColor2 = "red";
  let smallModal2;

  const handlebtnS3 = () => {
    goto("/");
  };

  const handlebtnS4 = () => {
    smallModal2.closeModal()
  };
</script>
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <ModalButton id={idBasic} btnName={btnBasicName} />
</ExampleDiv>

<p>Create a button and modal.</p>

```html
<ModalButton id={idBasic} btnName={btnBasicName} />
<SmallModal
  id={idBasic}
  title="Basic Modal Title">
  Basic Modal Content
</SmallModal>
```

<Htwo label="Small modal with action buttons" />

<ExampleDiv class="flex justify-center">
  <ModalButton id={id1} btnName={btnName1} btnColor={btnColor1} />
</ExampleDiv>

```html
<ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
<SmallModal
  bind:this={smallModal1}
  id={id1}
  btnColor="pink"
  title="Small Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Modal 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>
```

<Htwo label="Small modal with different colors" />

<ExampleDiv class="flex justify-center">
  <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
</ExampleDiv>

```html
<ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
<SmallModal
  bind:this={smallModal2}
  id={id2}
  btnColor="yellow"
  title="Small Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnS3}
  on:handlebtn2={handlebtnS4}
>
  Modal 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>
```

<SmallModal id={idBasic} title="Basic Modal Title">
  Basic Modal Content
</SmallModal>

<SmallModal
  bind:this={smallModal1}
  id={id1}
  btnColor="pink"
  title="Small Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Modal 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>

<SmallModal
  bind:this={smallModal2}
  id={id2}
  btnColor="yellow"
  title="Small Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnS3}
  on:handlebtn2={handlebtnS4}
>
  Modal 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>


<Htwo label="Props" />

<p>The component has the following props, type, and default values:</p>

```js
type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';
let id = 'small-modal';
let btnColor: Colors = 'blue';
let textColor: Colors = 'gray';
let title = 'Terms of Service';
let btn1: string;
let btn2: string;
const closeModal = () => {
  modalIdStore.update((value) => (value = null));
};
```

<p>To close a modal, use `closeModal` function in your event handler.</p>

```html
<script>
//...
let smallModal; // create a variable
const handlebtnS2 = () => {
  smallModal1.closeModal() // calling closeModal function
};
</script>

<SmallModal
  bind:this={smallModal1} // bind using the variable
  id={id1}
  btnColor="pink"
  title="Small Modal Title"
  btn1="Go home"
  btn2="Close"
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>

<h3>ModalButton</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>SmallModal</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>