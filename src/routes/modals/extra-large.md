---
layout: doc
---

<script>
  import { ModalButton, ExtraLargeModal } from "$lib/index";

  // simple modal
  let id = "simple";

  // Modal 1
  let id1 = "extra-large-modal";
  let btnExLName = "Extra Large Modal with one button";
  let btnExLColor = "blue";

  // Modal 2
  let id2 = "extra-large-modal-2";
  let btnExLName2 = "Extra Large Modal with two buttons";
  let btnExLColor2 = "purple";
  let btn1 = "Read more";
  let btn2 = "Close";

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    toggleModal(id1, false);
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    toggleModal(id2, false);
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    toggleModal(id2, false);
  };
</script>

<h1 class="text-3xl w-full dark:text-white pt-16">Extra-large Modals: Setup</h1>

<p class=" dark:text-white"> Import ModalButton, ExtraLargeModal components and set variables in the script tag.</p>

```svelte
import { ModalButton, ExtraLargeModal } from "svelte-flow";

// simple modal
let id = "simple";

// Modal 1
let id1 = "extra-large-modal";
let btnExLName = "Extra Large Modal with one button";
let btnExLColor = "blue";

// Modal 2
let id2 = "extra-large-modal-2";
let btnExLName2 = "Extra Large Modal with two buttons";
let btnExLColor2 = "purple";
let btn1 = "Read more";
let btn2 = "Close";

const handlebtn1 = () => {
  alert("handlebtn1 is clicked from a parent page.");
  toggleModal(id1, false);
};

const handlebtn2 = () => {
  alert("handlebtn2 is clicked from a parent page.");
  toggleModal(id2, false);
};

const handlebtn3 = () => {
  alert("handlebtn3 is clicked from a parent page.");
  toggleModal(id2, false);
};
```

<h1 class="text-3xl w-full dark:text-white">Extra-large Modals for Information</h1>

<div class="container flex flex-wrap my-8 mx-auto justify-center">
  <ModalButton {id} btnName="Info Modal" />
</div>

<p class="dark:text-white"> Create a button and modal.</p>

```svelte
<ModalButton {id} btnName="Info Modal" />

<ExtraLargeModal {id} title="Info Modal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</ExtraLargeModal>
```

<h1 class="text-3xl w-full dark:text-white">Extra-large Modals with One Button</h1>

<div class="container flex flex-wrap my-8 mx-auto justify-center">
  <ModalButton id={id1} btnName={btnExLName} btnColor={btnExLColor} />
</div>

<p class=" dark:text-white"> Create a button and modal.</p>

```svelte
<ModalButton id={id1} btnName={btnExLName} btnColor={btnExLColor} />

<ExtraLargeModal
  id={id1}
  title="Default Modal Title"
  {btn1}
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</ExtraLargeModal>
```

<h1 class="text-3xl w-full dark:text-white">Extra-large Modals with Two Buttons</h1>

<div class="container flex flex-wrap my-8 mx-auto justify-center">
  <ModalButton id={id2} btnName={btnExLName2} btnColor={btnExLColor2} />
</div>

<p class=" dark:text-white">Create a button and modal.</p>

```svelte
<ModalButton id={id2} btnName={btnExLName2} btnColor={btnExLColor2} />

<ExtraLargeModal
  id={id2}
  btnColor="indigo"
  textColor="red"
  title="Default Modal Title"
  {btn1}
  {btn2}
  on:handlebtn1={handlebtn2}
  on:handlebtn2={handlebtn3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</ExtraLargeModal>
```

  <ExtraLargeModal {id} title="Info Modal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </ExtraLargeModal>

  <ExtraLargeModal
    id={id1}
    title="Default Modal Title"
    {btn1}
    on:handlebtn1={handlebtn1}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </ExtraLargeModal>

  <ExtraLargeModal
    id={id2}
    btnColor="indigo"
    textColor="red"
    title="Default Modal Title"
    {btn1}
    {btn2}
    on:handlebtn1={handlebtn2}
    on:handlebtn2={handlebtn3}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </ExtraLargeModal>

<h1 class="text-3xl w-full dark:text-white pb-8">References</h1>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/modal/" target="_blank">- Flowbite Modal</a></p>

<div class="giscus"></div>