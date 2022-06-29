---
layout: modalLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import {
    SmallModal,
    MediumModal,
    LargeModal,
    ExtraLargeModal,
    SignInModal,
    ModalButton,
    modalIdStore,
    Breadcrumb,
    BreadcrumbItem
  }from '$lib/index';
  import { Home } from 'svelte-heros'
  // small
  let smallModalId = "small-modal";
  let btnSName = "Small Modal";
  let titleS = "Small Modal Title";
  let btnS1 = "I accept";
  let btnS2 = "Decline";
  let smallModal;

  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    smallModal.closeModal()
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    smallModal.closeModal()
  };

  // medium
  let mediumModalId = "medium-modal";
  let btnMName = "Medium Modal";
  let btnMColor = "red";
  let titleM = "Medium Modal Title";
  let btnM1 = "I accept";
  let btnM2 = "Decline";
  let mediumModal;

  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    mediumModal.closeModal()
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    mediumModal.closeModal()
  };

  // Large
  let largeModalId = "large-modal";
  let btnLName = "Large Modal";
  let btnLColor = "yellow";
  let titleL = "Large Modal Title";
  let btnL1 = "I accept";
  let btnL2 = "Decline";
  let largeModal;

  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    largeModal.closeModal()
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    largeModal.closeModal()
  };

  // Extra Large
  let extraLargeModalId = "extralarge-modal";
  let btnExLName = "Extra Large Modal";
  let btnExLColor = "green";
  let titleExL = "Exttra Large Modal";
  let btnExL1 = "I accept";
  let btnExL2 = "Decline";
  let extraLargeModal;

  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };

  // SignIn Modal
  let signinId = "signin-modal";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "purple";
  let titleSignIn = "Sign in to our platform";
  let lostPasswordLink = "/";
  let signUpLink = "/about";
  let formLink = "/modals";

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
      label:'All modals',
      href:'/modals/all-modals'
    },
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/modals">Modals</BreadcrumbItem>
  <BreadcrumbItem>All modals</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">All Modals</h1>

<Htwo label="Small modals" />

```html
<script>
  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    smallModal.closeModal()
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    smallModal.closeModal()
  };
</script>
<ModalButton id={smallModalId} btnName={btnSName} />
<SmallModal
  bind:this={smallModal}
  title={titleS}
  btn1={btnS1}
  btn2={btnS2}
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</SmallModal>
```

<ExampleDiv class="flex justify-center">
  <!-- Small Modal Button -->
  <ModalButton id={smallModalId} btnName={btnSName} />
</ExampleDiv>

<Htwo label="Medium modals" />

```html
<script>
  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    mediumModal.closeModal()
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    mediumModal.closeModal()
  };
</script>
<ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />
<MediumModal
  bind:this={mediumModal}
  btnColor={btnMColor}
  title={titleM}
  btn1={btnM1}
  btn2={btnM2}
  on:handlebtn1={handlebtnM1}
  on:handlebtn2={handlebtnM2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</MediumModal>
```

<ExampleDiv class="flex justify-center">
  <!-- Medium Modal Button -->
  <ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />
</ExampleDiv>

<Htwo label="Large modals" />

```html
<script>
  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    largeModal.closeModal()
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    largeModal.closeModal()
  };
</script>
<ModalButton id={largeModalId} btnName={btnLName} btnColor={btnLColor} />
<LargeModal
  btnColor={btnLColor}
  title={titleL}
  btn1={btnL1}
  btn2={btnL2}
  on:handlebtn1={handlebtnL1}
  on:handlebtn2={handlebtnL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</LargeModal>
```

<ExampleDiv class="flex justify-center">
  <!-- Large Modal Button -->
  <ModalButton id={largeModalId} btnName={btnLName} btnColor={btnLColor} />
</ExampleDiv>

<Htwo label="Extra-large modals" />

```html
<script>
  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    extraLargeModal.closeModal()
  };
</script>
<ModalButton
  id={extraLargeModalId}
  btnName={btnExLName}
  btnColor={btnExLColor}
/>
<ExtraLargeModal
  bind:this={extraLargModal}
  btnColor={btnExLColor}
  title={titleExL}
  btn1={btnExL1}
  btn2={btnExL2}
  on:handlebtn1={handlebtnExL1}
  on:handlebtn2={handlebtnExL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</ExtraLargeModal>   
```

<ExampleDiv class="flex justify-center">
  <!-- ExtraLarge Modal Button -->
  <ModalButton
    id={extraLargeModalId}
    btnName={btnExLName}
    btnColor={btnExLColor}
  />
</ExampleDiv>

<Htwo label="Sign-In modals" />

```html
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
<SignInModal
  {btnSignInColor}
  {titleSignIn}
  {lostPasswordLink}
  {signUpLink}
  {formLink}
/>
```

<ExampleDiv class="flex justify-center">
  <!-- SignInModal Button -->
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
</ExampleDiv>

<SmallModal
  bind:this={smallModal}
  title={titleS}
  btn1={btnS1}
  btn2={btnS2}
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</SmallModal>

<MediumModal
  bind:this={mediumModal}
  btnColor={btnMColor}
  title={titleM}
  btn1={btnM1}
  btn2={btnM2}
  on:handlebtn1={handlebtnM1}
  on:handlebtn2={handlebtnM2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</MediumModal>

<LargeModal
  bind:this={largeModal}
  btnColor={btnLColor}
  title={titleL}
  btn1={btnL1}
  btn2={btnL2}
  on:handlebtn1={handlebtnL1}
  on:handlebtn2={handlebtnL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</LargeModal>

<ExtraLargeModal
  bind:this={extraLargeModal}
  btnColor={btnExLColor}
  title={titleExL}
  btn1={btnExL1}
  btn2={btnExL2}
  on:handlebtn1={handlebtnExL1}
  on:handlebtn2={handlebtnExL2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco.
</ExtraLargeModal>

<SignInModal
  {btnSignInColor}
  {titleSignIn}
  {lostPasswordLink}
  {signUpLink}
  {formLink}
/>
