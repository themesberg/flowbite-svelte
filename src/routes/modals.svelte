<script>
  import {
    SmallModal,
    MediumModal,
    LargeModal,
    ExtraLargeModal,
    SignInModal,
  } from "$lib/index";

  // small
  let btnSName = "Small Modal";
  let btnSColor = "blue";
  let textSColor = "gray";
  function openSmallModal() {
    toggleModal("small-modal");
  }
  // medium
  let btnMName = "Medium Modal";
  let btnMColor = "blue";
  let textMColor = "gray";
  function openMediumModal() {
    toggleModal("medium-modal");
  }

  // Large
  let btnLName = "Large Modal";
  let btnLColor = "blue";
  let textLColor = "gray";
  function openLargeModal() {
    toggleModal("large-modal");
  }

  // Extra Large
  let btnExLName = "Extra Large Modal";
  let btnExLColor = "blue";
  let textExLColor = "gray";
  function openExtraLargeModal() {
    toggleModal("extralarge-modal");
  }

  // SignIn Modal
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "blue";
  let textSignInColor = "gray";

  function openSignInModal() {
    toggleModal("signin-modal");
  }
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Small Modal Button -->
  <button
    on:click={openSmallModal}
    class="block w-full md:w-auto text-white bg-{btnSColor}-700 hover:bg-{btnSColor}-800 focus:ring-4 focus:ring-{btnSColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnSColor}-600 dark:hover:bg-{btnSColor}-700 dark:focus:ring-{btnSColor}-800"
    type="button"
    data-modal-toggle="small-modal"
  >
    {btnSName}
  </button>

  <!-- Medium Modal Button -->
  <button
    on:click={openMediumModal}
    class="block text-white bg-{btnMColor}-700 hover:bg-{btnMColor}-800 focus:ring-4 focus:ring-{btnMColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnMColor}-600 dark:hover:bg-{btnMColor}-700 dark:focus:ring-{btnMColor}-800"
    type="button"
    data-modal-toggle="medium-modal"
  >
    {btnMName}
  </button>

  <!-- Large Modal Button -->
  <button
    on:click={openLargeModal}
    class="block w-full md:w-auto text-white bg-{btnLColor}-700 hover:bg-{btnLColor}-800 focus:ring-4 focus:ring-{btnLColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnLColor}-600 dark:hover:bg-{btnLColor}-700 dark:focus:ring-{btnLColor}-800"
    type="button"
    data-modal-toggle="large-modal"
  >
    {btnLName}
  </button>

  <!-- ExtraLarge Modal Button -->
  <button
    on:click={openExtraLargeModal}
    class="block w-full md:w-auto text-white bg-{btnExLColor}-700 hover:bg-{btnExLColor}-800 focus:ring-4 focus:ring-{btnExLColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnExLColor}-600 dark:hover:bg-{btnExLColor}-700 dark:focus:ring-{btnExLColor}-800"
    type="button"
    data-modal-toggle="extralarge-modal"
  >
    {btnExLName}
  </button>

  <!-- SignInModal Button -->
  <button
    on:click={openSignInModal}
    class="block text-white bg-{btnSignInColor}-700 hover:bg-{btnSignInColor}-800 focus:ring-4 focus:ring-{btnSignInColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnSignInColor}-600 dark:hover:bg-{btnSignInColor}-700 dark:focus:ring-{btnSignInColor}-800"
    type="button"
    data-modal-toggle="signin-modal"
  >
    {btnSignInName}
  </button>
</div>

<div class="p-6">
  <SmallModal
    btnSColor={"pink"}
    titleS={"Small Modal Title"}
    btnS1="Yes"
    btnS2="No"
  >
    <p
      class="text-base leading-relaxed text-{textSColor}-500 dark:text-{textSColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </SmallModal>
</div>

<div class="p-6">
  <MediumModal
    btnMColor={"indigo"}
    titleM={"Default Modal Title"}
    btnM1="Yes"
    btnM2="No"
  >
    <p
      class="text-base leading-relaxed text-{textMColor}-500 dark:text-{textMColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </MediumModal>
</div>

<div class="p-6">
  <LargeModal
    btnLColor={"red"}
    titleL={"Large Modal Title"}
    btnL1="Yes"
    btnL2="No"
  >
    <p
      class="text-base leading-relaxed text-{textLColor}-500 dark:text-{textLColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </LargeModal>
</div>

<div class="p-6">
  <ExtraLargeModal
    btnExLColor={"indigo"}
    titleExL={"Default Modal Title"}
    btnExL1="Yes"
    btnExL2="No"
  >
    <h1>Hello</h1>
    <p
      class="text-base leading-relaxed text-{textExLColor}-500 dark:text-{textExLColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </ExtraLargeModal>
</div>

<div class="p-6">
  <SignInModal
    btnSignInColor={"pink"}
    titleSignIn={"SignIn Modal Title"}
    lostPasswordLink={"/lost-password"}
    signUpLink={"/signup"}
    formLink={"/signin"}
  />
</div>
