<script>
  import { modalIdStore } from "./modalStores.js";
  import { get } from "svelte/store";
  export let id = "modal-id";
  export let btnName = "Modal Name";
  export let btnColor = "blue";

  let showModalId;
  export let openFn = (modal) => {
    modalIdStore.update((n) => (n = modal.id));
    showModalId = get(modalIdStore);
    console.log("showModalId", showModalId);
  };

  let buttonClass;
  if (btnColor === "blue") {
    buttonClass =
      "block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else if (btnColor === "gray") {
    buttonClass =
      "block w-full md:w-auto text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  } else if (btnColor === "red") {
    buttonClass =
      "block w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  } else if (btnColor === "yellow") {
    buttonClass =
      "block w-full md:w-auto text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
  } else if (btnColor === "green") {
    buttonClass =
      "block w-full md:w-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  } else if (btnColor === "indigo") {
    buttonClass =
      "block w-full md:w-auto text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";
  } else if (btnColor === "purple") {
    buttonClass =
      "block w-full md:w-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";
  } else if (btnColor === "pink") {
    buttonClass =
      "block w-full md:w-auto text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";
  } else {
    buttonClass =
      "block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
</script>

<button on:click={openFn({ id })} class={buttonClass} type="button">
  {btnName}
</button>
