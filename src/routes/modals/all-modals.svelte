<script>
  import {
    SmallModal,
    MediumModal,
    LargeModal,
    ExtraLargeModal,
    SignInModal,
    ModalButton,
  } from "$lib/index";

  // small
  let smallModalId = "small-modal";
  let btnSName = "Small Modal";

  let titleS = "Small Modal Title";
  let textSColor = "gray";
  let btnS1 = "I accept";
  let btnS2 = "Decline";

  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    toggleModal(smallModalId, false);
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    toggleModal(smallModalId, false);
  };

  // medium
  let mediumModalId = "medium-modal";
  let btnMName = "Medium Modal";
  let btnMColor = "red";
  let textMColor = "yellow";
  let titleM = "Medium Modal Title";
  let btnM1 = "I accept";
  let btnM2 = "Decline";

  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    toggleModal(mediumModalId, false);
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    toggleModal(mediumModalId, false);
  };

  // Large
  let largeModalId = "large-modal";
  let btnLName = "Large Modal";
  let btnLColor = "yellow";
  let textLColor = "green";
  let titleL = "Large Modal Title";
  let btnL1 = "I accept";
  let btnL2 = "Decline";

  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    toggleModal(largeModalId, false);
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    toggleModal(largeModalId, false);
  };

  // Extra Large
  let extraLargeModalId = "extralarge-modal";
  let btnExLName = "Extra Large Modal";
  let btnExLColor = "green";
  let textExLColor = "blue";
  let titleExL = "Exttra Large Modal";
  let btnExL1 = "I accept";
  let btnExL2 = "Decline";

  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    toggleModal(extraLargeModalId, false);
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    toggleModal(extraLargeModalId, false);
  };

  // SignIn Modal
  let signinId = "signin-modal";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "purple";
  let titleSignIn = "Sign in to our platform";
  let lostPasswordLink = "/auth/lost-password";
  let signUpLink = "/auth/signup";
  let formLink = "/auth/login";
</script>

<div class="container mx-auto p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Small Modal Button -->
  <ModalButton id={smallModalId} btnName={btnSName} />

  <!-- Medium Modal Button -->
  <ModalButton id={mediumModalId} btnName={btnMName} btnColor={btnMColor} />

  <!-- Large Modal Button -->
  <ModalButton id={largeModalId} btnName={btnLName} btnColor={btnLColor} />

  <!-- ExtraLarge Modal Button -->
  <ModalButton
    id={extraLargeModalId}
    btnName={btnExLName}
    btnColor={btnExLColor}
  />

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
  on:handlebtnS1={handlebtnS1}
  on:handlebtnS2={handlebtnS2}
>
  <p
    class="text-base leading-relaxed text-{textSColor}-500 dark:text-{textSColor}-400"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </p>
</SmallModal>

<MediumModal
  btnColor={btnMColor}
  textColor={textMColor}
  title={titleM}
  btn1={btnM1}
  btn2={btnM2}
  on:handlebtnM1={handlebtnM1}
  on:handlebtnM2={handlebtnM2}
>
  <p
    class="text-base leading-relaxed text-{textMColor}-500 dark:text-{textMColor}-400"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </p>
</MediumModal>

<LargeModal
  btnColor={btnLColor}
  textColor={textLColor}
  title={titleL}
  btn1={btnL1}
  btn2={btnL2}
  on:handlebtnL1={handlebtnL1}
  on:handlebtnL2={handlebtnL2}
>
  <p
    class="text-base leading-relaxed text-{textLColor}-500 dark:text-{textLColor}-400"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </p>
</LargeModal>

<ExtraLargeModal
  btnColor={btnExLColor}
  textColor={textExLColor}
  title={titleExL}
  btn1={btnExL1}
  btn2={btnExL2}
  on:handlebtnExL1={handlebtnExL1}
  on:handlebtnExL2={handlebtnExL2}
>
  <p
    class="text-base leading-relaxed text-{textExLColor}-500 dark:text-{textExLColor}-400"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </p>
</ExtraLargeModal>

<SignInModal
  {btnSignInColor}
  {titleSignIn}
  {lostPasswordLink}
  {signUpLink}
  {formLink}
/>
