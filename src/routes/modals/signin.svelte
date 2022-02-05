<script>
  import { SignInModal, ModalButton } from "$lib/index";
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";

  let signinId = "signin-modal2";
  let btnSignInName = "Sign In Modal";
  let btnSignInColor = "blue";
</script>

<div class="max-w-3xl mx-auto">
  <div class="container my-8 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">Sign-in Modals: Setup</h1>
    <p>
      Import SignInModal, ModalButton components and set variables in the script
      tag.
    </p>

    <div class="code">
      {@html Prism.highlight(
        `
import { SignInModal, ModalButton } from "svelte-flow";

let signinId = "signin-modal2";
let btnSignInName = "Sign In Modal";
let btnSignInColor = "blue";
  `,
        Prism.languages["javascript"]
      )}
    </div>
  </div>

  <div class="container mt-4 flex flex-wrap mx-auto">
    <h1 class="text-3xl w-full">SignIn Modals</h1>

    <div class="container flex flex-wrap my-8 mx-auto justify-center">
      <ModalButton
        id={signinId}
        btnName={btnSignInName}
        btnColor={btnSignInColor}
      />
    </div>

    <p>Create a button and modal.</p>
    <div class="code">
      {@html Prism.highlight(
        `
<ModalButton
  id={signinId}
  btnName={btnSignInName}
  btnColor={btnSignInColor}
/>
<SignInModal
  id={signinId}
  btnSignInColor={"pink"}
  titleSignIn={"SignIn Modal Title"}
  textSignInColor="pink"
  lostPasswordLink={"/auth/lost-password"}
  signUpLink={"/auth/signup"}
  formLink={"/auth/signin"}
/>
      `,
        Prism.languages["html"]
      )}
    </div>
  </div>

  <SignInModal
    id={signinId}
    btnSignInColor={"pink"}
    titleSignIn={"SignIn Modal Title"}
    textSignInColor="pink"
    lostPasswordLink={"/auth/lost-password"}
    signUpLink={"/auth/signup"}
    formLink={"/auth/signin"}
  />
</div>
