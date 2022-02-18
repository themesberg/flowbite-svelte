<script>
  import { createEventDispatcher } from "svelte";
  import { modalIdStore } from "./modalStores.js";
  const dispatch = createEventDispatcher();

  export let id = "extralarge-modal";
  export let btnColor = "blue";
  export let textColor = "gray";
  export let title = "Terms of Service";
  export let btn1;
  export let btn2;

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  export let showModalId;
  modalIdStore.subscribe((value) => {
    showModalId = value;
  });

  const handlebtn1 = () => {
    dispatch("handlebtn1");
  };

  const handlebtn2 = () => {
    dispatch("handlebtn2");
  };

  let divClass;
  let headDivClass;
  let h3Class;
  let buttonClass;
  let pClass;
  let footerClass;
  let btn2Class;
  if (textColor === "blue") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-blue-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-blue-600";
    h3Class = "text-xl font-medium text-blue-900 dark:text-white";
    buttonClass =
      "text-blue-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-blue-500 dark:text-blue-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-blue-200 dark:border-blue-600";
    btn2Class =
      "text-blue-500 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 rounded-lg border border-blue-200 text-sm font-medium px-5 py-2.5 hover:text-blue-900 focus:z-10 dark:bg-blue-700 dark:text-blue-300 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-600";
  } else if (textColor === "gray") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-gray-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600";
    h3Class = "text-xl font-medium text-gray-900 dark:text-white";
    buttonClass =
      "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-gray-500 dark:text-gray-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600";
    btn2Class =
      "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600";
  } else if (textColor === "red") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-red-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-red-600";
    h3Class = "text-xl font-medium text-red-900 dark:text-white";
    buttonClass =
      "text-red-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-red-500 dark:text-red-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-red-200 dark:border-red-600";
    btn2Class =
      "text-red-500 bg-white hover:bg-red-100 focus:ring-4 focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-red-900 focus:z-10 dark:bg-red-700 dark:text-red-300 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600";
  } else if (textColor === "yellow") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-yellow-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-yellow-600";
    h3Class = "text-xl font-medium text-yellow-900 dark:text-white";
    buttonClass =
      "text-yellow-400 bg-transparent hover:bg-yellow-200 hover:text-yellow-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-yellow-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-yellow-500 dark:text-yellow-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-yellow-200 dark:border-yellow-600";
    btn2Class =
      "text-yellow-500 bg-white hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 rounded-lg border border-yellow-200 text-sm font-medium px-5 py-2.5 hover:text-yellow-900 focus:z-10 dark:bg-yellow-700 dark:text-yellow-300 dark:border-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600";
  } else if (textColor === "green") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-green-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-green-600";
    h3Class = "text-xl font-medium text-green-900 dark:text-white";
    buttonClass =
      "text-green-400 bg-transparent hover:bg-green-200 hover:text-green-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-green-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-green-500 dark:text-green-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-green-200 dark:border-green-600";
    btn2Class =
      "text-green-500 bg-white hover:bg-green-100 focus:ring-4 focus:ring-green-300 rounded-lg border border-green-200 text-sm font-medium px-5 py-2.5 hover:text-green-900 focus:z-10 dark:bg-green-700 dark:text-green-300 dark:border-green-500 dark:hover:text-white dark:hover:bg-green-600";
  } else if (textColor === "indigo") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-indigo-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-indigo-600";
    h3Class = "text-xl font-medium text-indigo-900 dark:text-white";
    buttonClass =
      "text-indigo-400 bg-transparent hover:bg-indigo-200 hover:text-indigo-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-indigo-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-indigo-500 dark:text-indigo-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-indigo-200 dark:border-indigo-600";
    btn2Class =
      "text-indigo-500 bg-white hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 rounded-lg border border-indigo-200 text-sm font-medium px-5 py-2.5 hover:text-indigo-900 focus:z-10 dark:bg-indigo-700 dark:text-indigo-300 dark:border-indigo-500 dark:hover:text-white dark:hover:bg-indigo-600";
  } else if (textColor === "purple") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-purple-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-purple-600";
    h3Class = "text-xl font-medium text-purple-900 dark:text-white";
    buttonClass =
      "text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-purple-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-purple-500 dark:text-purple-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-purple-200 dark:border-purple-600";
    btn2Class =
      "text-purple-500 bg-white hover:bg-purple-100 focus:ring-4 focus:ring-purple-300 rounded-lg border border-purple-200 text-sm font-medium px-5 py-2.5 hover:text-purple-900 focus:z-10 dark:bg-purple-700 dark:text-purple-300 dark:border-purple-500 dark:hover:text-white dark:hover:bg-purple-600";
  } else if (textColor === "pink") {
    divClass = "relative bg-white rounded-lg shadow dark:bg-pink-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-pink-600";
    h3Class = "text-xl font-medium text-pink-900 dark:text-white";
    buttonClass =
      "text-pink-400 bg-transparent hover:bg-pink-200 hover:text-pink-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-pink-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-pink-500 dark:text-pink-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-pink-200 dark:border-pink-600";
    btn2Class =
      "text-pink-500 bg-white hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 rounded-lg border border-pink-200 text-sm font-medium px-5 py-2.5 hover:text-pink-900 focus:z-10 dark:bg-pink-700 dark:text-pink-300 dark:border-pink-500 dark:hover:text-white dark:hover:bg-pink-600";
  } else {
    divClass = "relative bg-white rounded-lg shadow dark:bg-blue-700";
    headDivClass =
      "flex justify-between items-center p-5 rounded-t border-b dark:border-blue-600";
    h3Class = "text-xl font-medium text-blue-900 dark:text-white";
    buttonClass =
      "text-blue-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white";
    pClass = "text-base leading-relaxed text-blue-500 dark:text-blue-400";
    footerClass =
      "flex items-center p-6 space-x-2 rounded-b border-t border-blue-200 dark:border-blue-600";
    btn2Class =
      "text-blue-500 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 rounded-lg border border-blue-200 text-sm font-medium px-5 py-2.5 hover:text-blue-900 focus:z-10 dark:bg-blue-700 dark:text-blue-300 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-600";
  }

  let button1Class;
  if (btnColor === "blue") {
    button1Class =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else if (btnColor === "gray") {
    button1Class =
      "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  } else if (btnColor === "red") {
    button1Class =
      "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  } else if (btnColor === "yellow") {
    button1Class =
      "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
  } else if (btnColor === "green") {
    button1Class =
      "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  } else if (btnColor === "indigo") {
    button1Class =
      "text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";
  } else if (btnColor === "purple") {
    button1Class =
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";
  } else if (btnColor === "pink") {
    button1Class =
      "text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";
  } else {
    button1Class =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
</script>

{#if showModalId === id}
  <div
    {id}
    role="dialog"
    aria-modal="true"
    class="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-20 z-50 justify-center items-center"
  >
    <div class="relative px-4 w-full max-w-7xl h-full md:h-auto">
      <!-- Modal content -->
      <div class={divClass}>
        <!-- Modal header -->
        <div class={headDivClass}>
          <h3 class={h3Class}>
            {title}
          </h3>
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
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class={pClass}>
            <slot />
          </p>
        </div>
        <!-- Modal footer -->
        <div class={footerClass}>
          {#if btn1}
            <button type="button" class={button1Class} on:click={handlebtn1}
              >{btn1}</button
            >
          {/if}
          {#if btn2}
            <button type="button" class={btn2Class} on:click={handlebtn2}
              >{btn2}</button
            >
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div
    on:click={closeModal}
    class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 w-full h-full"
  />
{/if}
