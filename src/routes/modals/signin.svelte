<script>
  import { SignInModal } from "$lib/index";

  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "blue";
  let textSignInColor = "gray";

  function openSignInModal() {
    toggleModal("signin-modal");
  }
</script>

<div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->
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
  <SignInModal
    btnSignInColor={"pink"}
    titleSignIn={"SignIn Modal Title"}
    lostPasswordLink={"/lost-password"}
    signUpLink={"/signup"}
    formLink={"/signin"}
  />
</div>
