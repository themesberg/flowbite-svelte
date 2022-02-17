<script>
  import { SignInModal, ModalButton } from "$lib/index";

  let signinId = "signin-modal2";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "blue";
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->

  <ModalButton
    id={signinId}
    btnName={btnSignInName}
    btnColor={btnSignInColor}
  />
</div>

<div class="p-8">
  <SignInModal
    id={signinId}
    btnSignInColor={"blue"}
    titleSignIn={"SignIn Modal Title"}
    textSignInColor="gray"
    lostPasswordLink={"/auth/lost-password"}
    signUpLink={"/auth/signup"}
    formLink={"/auth/signin"}
  />
</div>
