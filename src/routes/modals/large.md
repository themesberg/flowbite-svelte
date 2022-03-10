---
layout: doc
---

<script>
  import { LargeModal, ModalButton, modalIdStore }from '$lib/index';

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  // modal 1
  let id = "large-modal-1";
  let btnName = "Large Modal Simple";

  // Modal 1
  let id1 = "large-modal-2";
  let btnName1 = "Large modal with one button";
  let btnColor1 = "yellow";
  let btn1 = "Close";

  // Modal 2
  let id2 = "large-modal-3";
  let btnName2 = "Large modal with two buttons";
  let btnColor2 = "red";
  let btn2 = "Read more";
  let btn3 = "Close";

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    closeModal()
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    closeModal()
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    closeModal()
  };
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Large Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white py-4 text-lg">Import LargeModal, ModalButton, modalIdStor components and set variables in the script tag. Add `closeModal` method if you want to close the modal in a button.</p>


```svelte
<script>
  import { LargeModal, ModalButton, modalIdStore } from "flowbite-svelte";

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  // modal 1
  let id = "large-modal-1";
  let btnName = "Large Modal Simple";

  // Modal 1
  let id1 = "large-modal-2";
  let btnName1 = "Large modal with one button";
  let btnColor1 = "yellow";
  let btn1 = "Close";

  // Modal 2
  let id2 = "large-modal-3";
  let btnName2 = "Large modal with two buttons";
  let btnColor2 = "red";
  let btn2 = "Read more";
  let btn3 = "Close";

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    closeModal()
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    closeModal()
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    closeModal()
  };
</script>
```

<h1 class="text-3xl w-full dark:text-white py-8">Large Modals</h1>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton {id} {btnName} />
</div>

<p class=" dark:text-white py-4"> Create a button and modal.

```svelte
<ModalButton {id} {btnName} />

<LargeModal {id} title={"Large Modal Title"}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</LargeModal>
```

<h1 class="text-3xl w-full dark:text-white py-8">Large Modal with an action button</h1>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id={id1} btnName={btnName1} btnColor={btnColor1} />
</div>

```svelte
<ModalButton id={id1} btnName={btnName1} btnColor={btnColor1} />

<LargeModal
  id={id1}
  title="Default Modal Title"
  {btn1}
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</LargeModal>
```

<h1 class="text-3xl w-full dark:text-white py-8">Large Modal with two action buttons</h1>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
</div>

```svelte
<ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />

<LargeModal
  id={id2}
  btnColor="indigo"
  textColor="red"
  title="Default Modal Title"
  btn1={btn2}
  btn2={btn3}
  on:handlebtn1={handlebtn2}
  on:handlebtn2={handlebtn3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</LargeModal>
```

  <LargeModal {id} title={"Large Modal Title"}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </LargeModal>

  <LargeModal
    id={id1}
    title="Default Modal Title"
    {btn1}
    on:handlebtn1={handlebtn1}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </LargeModal>

  <LargeModal
    id={id2}
    btnColor="indigo"
    textColor="red"
    title="Default Modal Title"
    btn1={btn2}
    btn2={btn3}
    on:handlebtn1={handlebtn2}
    on:handlebtn2={handlebtn3}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </LargeModal>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/modal/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Modal</a></p>
