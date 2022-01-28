<script>
  import { SignInModal, ModalButton } from "$lib/index";

  let signinId = "signin-modal2";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "blue";

  const handleLostPassword = () => {
    alert("LostPassword is clicked from a parent page.");
    toggleModal(signinId, false);
  };

  const handleLogin = () => {
    // alert("Login is clicked from a parent page.");
    toggleModal(signinId, false);
  };

  const handleRegister = () => {
    // alert("Register is clicked from a parent page.");
    toggleModal(signinId, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->

  <ModalButton
    id={signinId}
    btnName={btnSignInName}
    btnColor={btnSignInColor}
  />
</div>

<div class="p-6">
  <SignInModal
    id={signinId}
    btnSignInColor={"pink"}
    titleSignIn={"SignIn Modal Title"}
    textSignInColor="pink"
    lostPasswordLink={"/auth/lost-password"}
    signUpLink={"/auth/signup"}
    formLink={"/auth/signin"}
    on:{handleLostPassword}
    on:{handleLogin}
    on:{handleRegister}
  />
</div>
