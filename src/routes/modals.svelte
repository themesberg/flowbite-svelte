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
  let btnSName = "Small Modal";
  let titleS = "Small Modal Title";
  let btnSColor = "gray";
  let textSColor = "red";
  let btnS1 = "I accept";
  let btnS2 = "Decline";
  let smallModalId = "small-modal";

  const openSmallModal = () => {
    toggleModal(smallModalId);
  };

  const handlebtnS1 = () => {
    alert("handlebtnS1 is clicked from a parent page.");
    toggleModal(smallModalId, false);
  };

  const handlebtnS2 = () => {
    alert("handlebtnS2 is clicked from a parent page.");
    toggleModal(smallModalId, false);
  };

  // medium
  let btnMName = "Medium Modal";
  let btnMColor = "red";
  let textMColor = "yellow";
  let titleM = "Medium Modal Title";
  let btnM1 = "I accept";
  let btnM2 = "Decline";
  let mediumModalId = "medium-modal";

  const openMediumModal = () => {
    toggleModal("medium-modal");
  };

  const handlebtnM1 = () => {
    alert("handlebtnM1 is clicked from a parent page.");
    toggleModal("medium-modal", false);
  };

  const handlebtnM2 = () => {
    alert("handlebtnM2 is clicked from a parent page.");
    toggleModal("medium-modal", false);
  };

  // Large
  let btnLName = "Large Modal";
  let btnLColor = "yellow";
  let textLColor = "green";
  let titleL = "Large Modal Title";
  let btnL1 = "I accept";
  let btnL2 = "Decline";
  let largeModalId = "large-modal";

  const openLargeModal = () => {
    toggleModal("large-modal");
  };

  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    toggleModal("large-modal", false);
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    toggleModal("large-modal", false);
  };

  // Extra Large
  let btnExLName = "Extra Large Modal";
  let btnExLColor = "green";
  let textExLColor = "blue";
  let titleExL = "Terms of Service";
  let btnExL1 = "I accept";
  let btnExL2 = "Decline";
  let extraLargeModalId = "extralarge-modal";

  const openExtraLargeModal = () => {
    toggleModal("extralarge-modal");
  };

  const handlebtnExL1 = () => {
    alert("handlebtnExL1 is clicked from a parent page.");
    toggleModal("medium-modal", false);
  };

  const handlebtnExL2 = () => {
    alert("handlebtnExL2 is clicked from a parent page.");
    toggleModal("medium-modal", false);
  };

  // SignIn Modal
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "purple";
  let titleSignIn = "Sign in to our platform";
  let lostPasswordLink = "/#";
  let signUpLink = "/#";
  let formLink = "/#";

  const openSignInModal = () => {
    toggleModal("signin-modal");
  };

  const handleLostPassword = () => {
    alert("handleLostPassword is clicked from a parent page.");
    toggleModal("signin-modal", false);
  };

  const handleLogin = () => {
    alert("handleLogin is clicked from a parent page.");
    toggleModal("signin-modal", false);
  };

  const handleRegister = () => {
    alert("handleRegister is clicked from a parent page.");
    toggleModal("signin-modal", false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Small Modal Button -->
  <ModalButton
    id={smallModalId}
    btnName={btnSName}
    btnColor={btnSColor}
    openFnName={openSmallModal}
  />

  <!-- Medium Modal Button -->
  <ModalButton
    id={mediumModalId}
    btnName={btnMName}
    btnColor={btnMColor}
    openFnName={openMediumModal}
  />

  <!-- Large Modal Button -->
  <ModalButton
    id={largeModalId}
    btnName={btnLName}
    btnColor={btnLColor}
    openFnName={openLargeModal}
  />

  <!-- ExtraLarge Modal Button -->
  <ModalButton
    id={extraLargeModalId}
    btnName={btnExLName}
    btnColor={btnExLColor}
    openFnName={openExtraLargeModal}
  />

  <!-- SignInModal Button -->
  <ModalButton
    id={extraLargeModalId}
    btnName={btnSignInName}
    btnColor={btnSignInColor}
    openFnName={openSignInModal}
  />
</div>

<SmallModal
  id={smallModalId}
  btnColor={btnSColor}
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
  on:handleLostPassword={handleLostPassword}
  on:handleLogin={handleLogin}
  on:handleRegister={handleRegister}
/>
