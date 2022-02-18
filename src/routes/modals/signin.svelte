<script>
  import { SignInModal, ModalButton } from "$lib/index";

  let signinId = "signin-modal2";
  let btnSignInName = "Sign In Modal";
  let btnColor = "yellow";
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->

  <ModalButton id={signinId} btnName={btnSignInName} {btnColor} />
  <ModalButton id="id2" btnName={btnSignInName} btnColor="red" />
</div>

<div class="p-8">
  <SignInModal
    id={signinId}
    btnSignInColor={"indigo"}
    titleSignIn={"SignIn Modal Title"}
    lostPasswordLink={"/auth/lost-password"}
    signUpLink={"/auth/signup"}
    formLink={"/auth/signin"}
  />
</div>

<div class="p-8">
  <SignInModal
    id="id2"
    btnSignInColor="purple"
    titleSignIn="SignIn Modal Title 2"
    lostPasswordLink="/auth/lost-password"
    signUpLink="/auth/signup"
    formLink="/auth/signin"
  />
</div>
