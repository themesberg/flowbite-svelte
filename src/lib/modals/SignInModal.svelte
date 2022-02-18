<script>
  // import { createEventDispatcher } from "svelte";
  import { modalIdStore } from "./modalStores.js";
  // const dispatch = createEventDispatcher();

  export let id = "signin-modal";
  export let btnSignInColor = "blue";
  export let titleSignIn = "Sign in to our platform";
  export let lostPasswordLink;
  export let rememberMe = false;
  export let signUp;
  export let action;

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  export let showModalId;
  modalIdStore.subscribe((value) => {
    showModalId = value;
  });

  let submitClass;

  if (btnSignInColor === "blue") {
    submitClass =
      "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else if (btnSignInColor === "gray") {
    submitClass =
      "w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  } else if (btnSignInColor === "red") {
    submitClass =
      "w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  } else if (btnSignInColor === "yellow") {
    submitClass =
      "w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
  } else if (btnSignInColor === "green") {
    submitClass =
      "w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  } else if (btnSignInColor === "indigo") {
    submitClass =
      "w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";
  } else if (btnSignInColor === "purple") {
    submitClass =
      "w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";
  } else if (btnSignInColor === "pink") {
    submitClass =
      "w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";
  } else {
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
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex justify-end p-2">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            on:click={closeModal}
          >
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
        <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" {action}>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            {titleSignIn}
          </h3>
          <div>
            <label
              for="email-{id}"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your email</label
            >
            <input
              type="email"
              name="email"
              id="email-{id}"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password-{id}"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your password</label
            >
            <input
              type="password"
              name="password"
              id="password-{id}"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="remember"
                    class="font-medium text-gray-900 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
            {/if}
            {#if lostPasswordLink}
              <a
                href={lostPasswordLink}
                rel="external"
                class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                ><button type="button" on:click={closeModal}
                  >Lost Password?</button
                ></a
              >
            {/if}
          </div>
          <button type="submit" class={submitClass} on:click={closeModal}
            >Login to your account</button
          >
          {#if signUp}
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <a
                href={signUp}
                rel="external"
                class="text-blue-700 hover:underline dark:text-blue-500"
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
