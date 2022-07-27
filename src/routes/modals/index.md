---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Button, Modal, SmallModal, MediumModal, LargeModal, ExtraLargeModal, SignInModal, ModalButton, modalIdStore, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
  import { goto } from "$app/navigation";
  import componentProps1 from '../props/ModalButton.json'
  import componentProps2 from '../props/SmallModal.json'
	import componentProps3 from '../props/MediumModal.json'
	import componentProps4 from '../props/LargeModal.json'
  import componentProps5 from '../props/ExtraLargeModal.json'
  import componentProps6 from '../props/SignInModal.json'


  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let items3 = componentProps3.props
	let items4 = componentProps4.props
  let items5 = componentProps5.props
  let items6 = componentProps6.props

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

  let exModal1;
  let exModal2;

  let defModal = false;
  let popModal = false;
  let sizesModal = false;
  let size;
  let placement;
  let plModal = false;
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Modals</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Modals</h1>

<Htwo label="Default modal" />

You can also use the `visible=true` attribute to show open the modal by default.

<ExampleDiv>
  <Button on:click={() => defModal = !defModal}>Default modal</Button>
  <Modal title="Terms of Service" bind:visible={defModal}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</ExampleDiv>

<Htwo label="Pop-up modal" />

You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.

<ExampleDiv>
<Button on:click={() => popModal = !popModal}>Pop-up modal</Button>
<Modal bind:visible={popModal}>
  <div class="text-center">
      <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
      <Button color="red" class="mr-2">Yes, I'm sure</Button>
      <Button color='alternative'>No, cancel</Button>
  </div>
</Modal>
</ExampleDiv>

<Htwo label="Form element" />

Use this modal example with form input element to receive information from your users with the advantage of not having to link to another page but keeping the user on the currently active page. A great example would be a login or a register form.

<Htwo label="Sizes" />

You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

<ExampleDiv class="flex gap-2">
  <Button on:click={()=> {size = 'sm'; sizesModal = !sizesModal} }>Small modal</Button>
  <Button on:click={()=> {size = 'lg'; sizesModal = !sizesModal} }>Large modal</Button>

  <Modal title="Terms of Service" bind:visible={sizesModal} {size}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</ExampleDiv>

<Htwo label="Placement" />

<ExampleDiv>
<div class="grid grid-cols-3 grid-rows-3 gap-4">
  <Button on:click={() => {placement='top-left'; plModal = !plModal} }>top-left</Button>
	<Button on:click={() => {placement='top-center'; plModal = !plModal} }>top-center</Button>
	<Button on:click={() => {placement='top-right'; plModal = !plModal} }>top-right</Button>
	<Button on:click={() => {placement='center-left'; plModal = !plModal} }>center-left</Button>
	<Button on:click={() => {placement='center'; plModal = !plModal} }>center</Button>
	<Button on:click={() => {placement='center-right'; plModal = !plModal} }>center-right</Button>
	<Button on:click={() => {placement='bottom-left'; plModal = !plModal} }>bottom-left</Button>
	<Button on:click={() => {placement='bottom-center'; plModal = !plModal} }>bottom-center</Button>
	<Button on:click={() => {placement='bottom-right'; plModal = !plModal} }>bottom-right</Button>

  <Modal title="Terms of Service" bind:visible={plModal} {placement}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</div>

</ExampleDiv>

Use the data-modal-placement data attribute on the modal element to set the position relative to the document body based on the available values from `top|center|bottom-left|center|right` (eg. top-left or bottom-right).

The default position is the center of the page.

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

<Htwo label="Medium modal" />


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

<Htwo label="Medium modals with action buttons" />

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

<Htwo label="Medium modal with action buttons" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="id2" btnName="Medium modal with two action buttons" btnColor="blue" />
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
<ModalButton id="id2" btnName="Medium modal with two action buttons" btnColor="blue" />
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

<Htwo label="Large modal" />

<h3>Set up</h3>

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

<Htwo label="Large modal with action buttons" />

<ExampleDiv class="flex justify-center">
  <ModalButton id="lid2" btnName="Large modal with action buttons" color="purple" />
</ExampleDiv>

<LargeModal
  bind:this={modal2}
  id="lid2"
  btnColor="purple"
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

<Htwo label="Extra-large Modals" />

<h3>Set up</h3>

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

<Htwo label="Extra-large modals with action buttons" />

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
  bind:this={exModal1}
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
  bind:this={exModal2}
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

```html

<ExtraLargeModal
  bind:this={exModal2}
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
```

<Htwo label="Sign-in Modals" />
<h3>Set up</h3>

<p class="dark:text-white text-base py-4">Import SignInModal, ModalButton components and set variables in the script tag.</p>

```html
import { SignInModal, ModalButton } from "flowbite-svelte";
```

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

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>ModalButton</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3>SmallModal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>MediumModal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3>LargeModal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3>ExtraLargeModal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3>SignInModal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>