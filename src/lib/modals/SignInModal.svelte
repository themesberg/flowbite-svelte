<script>
  // import { createEventDispatcher } from "svelte";
  import { modalIdStore } from "./modalStores.js";
  // const dispatch = createEventDispatcher();

  export let id = "signin-modal";
  export let btnSignInColor = "blue";
  export let textSignInColor = "gray";
  export let titleSignIn = "Sign in to our platform";
  export let lostPasswordLink;
  export let rememberMe = false;
  export let signUpLink;
  export let formLink = "/#";

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  export let showModalId;
  modalIdStore.subscribe((value) => {
    showModalId = value;
  });
  let divClass;
  let buttonClass;
  let h3Class;
  let labelClass;
  let emailClass;
  let passwordLabelClass;
  let passwordClass;
  let rememberMeInputClass;
  let rememberMeLabelClass;
  let lostPasswordClass;
  let submitClass;
  let signupDivClass;
  let signupLinkClass;
  if (textSignInColor === "blue") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-blue-700";
    buttonClass =
      "text-blue-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-blue-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300";
    passwordLabelClass =
      "block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300";
    rememberMeLabelClass = "font-medium text-blue-900 dark:text-blue-300";
    signupDivClass = "text-sm font-medium text-blue-500 dark:text-blue-300";
  } else if (textSignInColor === "gray") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-gray-700";
    buttonClass =
      "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-gray-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";

    rememberMeLabelClass = "font-medium text-gray-900 dark:text-gray-300";

    signupDivClass = "text-sm font-medium text-gray-500 dark:text-gray-300";
  } else if (textSignInColor === "red") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-red-700";
    buttonClass =
      "text-red-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-red-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-red-900 dark:text-red-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-red-900 dark:text-red-300";

    rememberMeLabelClass = "font-medium text-red-900 dark:text-red-300";

    signupDivClass = "text-sm font-medium text-red-500 dark:text-red-300";
  } else if (textSignInColor === "yellow") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-yellow-700";
    buttonClass =
      "text-yellow-400 bg-transparent hover:bg-yellow-200 hover:text-yellow-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-yellow-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-yellow-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-yellow-900 dark:text-yellow-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-yellow-900 dark:text-yellow-300";

    rememberMeLabelClass = "font-medium text-yellow-900 dark:text-yellow-300";

    signupDivClass = "text-sm font-medium text-yellow-500 dark:text-yellow-300";
  } else if (textSignInColor === "green") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-green-700";
    buttonClass =
      "text-green-400 bg-transparent hover:bg-green-200 hover:text-green-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-green-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-green-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-green-900 dark:text-green-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-green-900 dark:text-green-300";

    rememberMeLabelClass = "font-medium text-green-900 dark:text-green-300";

    signupDivClass = "text-sm font-medium text-green-500 dark:text-green-300";
  } else if (textSignInColor === "indigo") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-indigo-700";
    buttonClass =
      "text-indigo-400 bg-transparent hover:bg-indigo-200 hover:text-indigo-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-indigo-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-indigo-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-indigo-900 dark:text-indigo-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-indigo-900 dark:text-indigo-300";

    rememberMeLabelClass = "font-medium text-indigo-900 dark:text-indigo-300";

    signupDivClass = "text-sm font-medium text-indigo-500 dark:text-indigo-300";
  } else if (textSignInColor === "purple") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-purple-700";
    buttonClass =
      "text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-purple-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-purple-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-purple-900 dark:text-purple-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-purple-900 dark:text-purple-300";

    rememberMeLabelClass = "font-medium text-purple-900 dark:text-purple-300";

    signupDivClass = "text-sm font-medium text-purple-500 dark:text-purple-300";
  } else if (textSignInColor === "pink") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-pink-700";
    buttonClass =
      "text-pink-400 bg-transparent hover:bg-pink-200 hover:text-pink-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-pink-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-pink-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-pink-900 dark:text-pink-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-pink-900 dark:text-pink-300";

    rememberMeLabelClass = "font-medium text-pink-900 dark:text-pink-300";

    signupDivClass = "text-sm font-medium text-pink-500 dark:text-pink-300";
  } else {
    divClass = "relative bg-white rounded-lg shadow dark:bg-blue-700";
    buttonClass =
      "text-blue-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-800 dark:hover:text-white";
    h3Class = "text-xl font-medium text-blue-900 dark:text-white";
    labelClass =
      "block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300";

    passwordLabelClass =
      "block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300";

    rememberMeLabelClass = "font-medium text-blue-900 dark:text-blue-300";

    signupDivClass = "text-sm font-medium text-blue-500 dark:text-blue-300";
  }

  if (btnSignInColor === "blue") {
    signupLinkClass = "text-blue-700 hover:underline dark:text-blue-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-blue-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-blue-700 hover:underline dark:text-blue-500";
    submitClass =
      "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else if (btnSignInColor === "gray") {
    signupLinkClass = "text-gray-700 hover:underline dark:text-gray-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-gray-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-gray-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-gray-700 hover:underline dark:text-gray-500";
    submitClass =
      "w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  } else if (btnSignInColor === "red") {
    signupLinkClass = "text-red-700 hover:underline dark:text-red-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-red-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-red-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-red-700 hover:underline dark:text-red-500";
    submitClass =
      "w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  } else if (btnSignInColor === "yellow") {
    signupLinkClass = "text-yellow-700 hover:underline dark:text-yellow-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-yellow-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-yellow-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-yellow-700 hover:underline dark:text-yellow-500";
    submitClass =
      "w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
  } else if (btnSignInColor === "green") {
    signupLinkClass = "text-green-700 hover:underline dark:text-green-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-green-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-green-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-green-700 hover:underline dark:text-green-500";
    submitClass =
      "w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  } else if (btnSignInColor === "indigo") {
    signupLinkClass = "text-indigo-700 hover:underline dark:text-indigo-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-indigo-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-indigo-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-indigo-700 hover:underline dark:text-indigo-500";
    submitClass =
      "w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";
  } else if (btnSignInColor === "purple") {
    signupLinkClass = "text-purple-700 hover:underline dark:text-purple-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-purple-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-purple-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-purple-700 hover:underline dark:text-purple-500";
    submitClass =
      "w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";
  } else if (btnSignInColor === "pink") {
    signupLinkClass = "text-pink-700 hover:underline dark:text-pink-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-pink-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-pink-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-pink-700 hover:underline dark:text-pink-500";
    submitClass =
      "w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";
  } else {
    signupLinkClass = "text-blue-700 hover:underline dark:text-blue-500";
    emailClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    passwordClass =
      "bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-blue-400 dark:text-white";
    rememberMeInputClass =
      "w-4 h-4 bg-blue-50 rounded border border-blue-300 focus:ring-3 focus:ring-blue-300 dark:bg-blue-600 dark:border-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800";
    lostPasswordClass =
      "text-sm text-blue-700 hover:underline dark:text-blue-500";
    submitClass =
      "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
</script>

{#if showModalId === id}
  <div
    {id}
    role="dialog"
    aria-modal="true"
    class="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-20 z-50 justify-center items-center"
  >
    <div class="relative px-4 w-full max-w-md h-full md:h-auto">
      <div class={divClass}>
        <div class="flex justify-end p-2">
          <button type="button" class={buttonClass} on:click={closeModal}>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
            >
          </button>
        </div>
        <form
          class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
          action={formLink}
        >
          <h3 class={h3Class}>
            {titleSignIn}
          </h3>
          <div>
            <label for="email-{id}" class={labelClass}>Your email</label>
            <input
              type="email"
              name="email"
              id="email-{id}"
              class={emailClass}
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label for="password-{id}" class={passwordLabelClass}
              >Your password</label
            >
            <input
              type="password"
              name="password"
              id="password-{id}"
              placeholder="••••••••"
              class={passwordClass}
              required
            />
          </div>
          <div class="flex justify-between">
            {#if rememberMe}
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember-{id}"
                    aria-describedby="remember"
                    type="checkbox"
                    class={rememberMeInputClass}
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class={rememberMeLabelClass}
                    >Remember me</label
                  >
                </div>
              </div>
            {/if}
            {#if lostPasswordLink}
              <a
                href={lostPasswordLink}
                rel="external"
                class={lostPasswordClass}
                ><button type="button" on:click={closeModal}
                  >Lost Password?</button
                ></a
              >
            {/if}
          </div>
          <button type="submit" class={submitClass} on:click={closeModal}
            >Login to your account</button
          >
          {#if signUpLink}
            <div class={signupDivClass}>
              Not registered? <a
                href={signUpLink}
                rel="external"
                class={signupLinkClass}
                ><button type="button" on:click={closeModal}
                  >Create account</button
                ></a
              >
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
  <div
    on:click={closeModal}
    class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 w-full h-full"
  />
{/if}
