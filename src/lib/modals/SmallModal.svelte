<script>
  // export let btnName = "Small modal";
  export let btnSColor = "blue";
  export let textSColor = "gray";
  export let titleS = "Terms of Service";
  export let btnS1 = "I accept";
  export let btnS2 = "Decline";
  // export let content = "Lorem ipsum dolor sit amet.";
  export const closeSmallModal = () => {
    toggleModal("small-modal", false);
  };
</script>

<!-- Small Modal -->
<div
  id="small-modal"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
>
  <div class="relative px-4 w-full max-w-md h-full md:h-auto">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-{textSColor}-700">
      <!-- Modal header -->
      <div
        class="flex justify-between items-center p-5 rounded-t border-b dark:border-{textSColor}-600"
      >
        <h3 class="text-xl font-medium text-{textSColor}-900 dark:text-white">
          {titleS}
        </h3>
        <button
          type="button"
          class="text-{textSColor}-400 bg-transparent hover:bg-{textSColor}-200 hover:text-{textSColor}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-{textSColor}-600 dark:hover:text-white"
          data-modal-toggle="small-modal"
          on:click={() => closeSmallModal()}
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
      <!-- Modal body -->
      <div class="p-6 space-y-6">
        <slot />
      </div>
      <!-- Modal footer -->
      <div
        class="flex items-center p-6 space-x-2 rounded-b border-t border-{textSColor}-200 dark:border-{textSColor}-600"
      >
        {#if btnS1}
          <button
            data-modal-toggle="small-modal"
            type="button"
            class="text-white bg-{btnSColor}-700 hover:bg-{btnSColor}-800 focus:ring-4 focus:ring-{btnSColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnSColor}-600 dark:hover:bg-{btnSColor}-700 dark:focus:ring-{btnSColor}-800"
            on:click={() => closeSmallModal()}>{btnS1}</button
          >
        {/if}
        {#if btnS2}
          <button
            data-modal-toggle="small-modal"
            type="button"
            class="text-{textSColor}-500 bg-white hover:bg-{textSColor}-100 focus:ring-4 focus:ring-{textSColor}-300 rounded-lg border border-{textSColor}-200 text-sm font-medium px-5 py-2.5 hover:text-{textSColor}-900 focus:z-10 dark:bg-{textSColor}-700 dark:text-{textSColor}-300 dark:border-{textSColor}-500 dark:hover:text-white dark:hover:bg-{textSColor}-600"
            on:click={() => closeSmallModal()}>{btnS2}</button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
