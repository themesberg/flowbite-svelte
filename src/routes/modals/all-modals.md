---
layout: modalLayout
---

<script>
  import {
    SmallModal,
    MediumModal,
    LargeModal,
    ExtraLargeModal,
    SignInModal,
    ModalButton,
    modalIdStore
  }from '$lib/index';

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  // small
  let smallModalId = "small-modal";
  let btnSName = "Small Modal";
  let titleS = "Small Modal Title";
  let btnS1 = "I accept";
  let btnS2 = "Decline";

  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    closeModal()
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    closeModal()
  };

  // medium
  let mediumModalId = "medium-modal";
  let btnMName = "Medium Modal";
  let btnMColor = "red";
  let titleM = "Medium Modal Title";
  let btnM1 = "I accept";
  let btnM2 = "Decline";

  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    closeModal()
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    closeModal()
  };

  // Large
  let largeModalId = "large-modal";
  let btnLName = "Large Modal";
  let btnLColor = "yellow";
  let titleL = "Large Modal Title";
  let btnL1 = "I accept";
  let btnL2 = "Decline";

  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    closeModal()
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    closeModal()
  };

  // Extra Large
  let extraLargeModalId = "extralarge-modal";
  let btnExLName = "Extra Large Modal";
  let btnExLColor = "green";
  let titleExL = "Exttra Large Modal";
  let btnExL1 = "I accept";
  let btnExL2 = "Decline";

  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    closeModal()
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    closeModal()
  };

  // SignIn Modal
  let signinId = "signin-modal";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "purple";
  let titleSignIn = "Sign in to our platform";
  let lostPasswordLink = "/";
  let signUpLink = "/about";
  let formLink = "/modals";
</script>

<h1 class="text-3xl w-full dark:text-white">All Modals</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Small Modals</h2>

```html
<ModalButton id={smallModalId} btnName={btnSName} />
<SmallModal
  title={titleS}
  btn1={btnS1}
  btn2={btnS2}
  on:handlebtn1={handlebtnS1}
  on:handlebtn2={handlebtnS2}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</SmallModal>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- Small Modal Button -->
  <ModalButton id={smallModalId} btnName={btnSName} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Medium Modals</h2>

```html
<ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />
<MediumModal
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

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- Medium Modal Button -->
  <ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Large Modals</h2>

```html
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

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- Large Modal Button -->
  <ModalButton id={largeModalId} btnName={btnLName} btnColor={btnLColor} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Extra-Large Modals</h2>

```html
<ModalButton
  id={extraLargeModalId}
  btnName={btnExLName}
  btnColor={btnExLColor}
/>
<ExtraLargeModal
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

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- ExtraLarge Modal Button -->
  <ModalButton
    id={extraLargeModalId}
    btnName={btnExLName}
    btnColor={btnExLColor}
  />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">SingIn Modals</h2>

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

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <!-- SignInModal Button -->
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
</div>

<SmallModal
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
