<script>
  export let btnExLColor = "blue";
  export let textExLColor = "gray";
  export let titleExL = "Terms of Service";
  export let btnExL1 = "I accept";
  export let btnExL2 = "Decline";

  export const closeExtraLargeModal = () => {
    toggleModal("extralarge-modal", false);
  };
</script>

<!-- Extra Large Modal -->
<div
  id="extralarge-modal"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
>
  <div class="relative px-4 w-full max-w-7xl h-full md:h-auto">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-{textExLColor}-700">
      <!-- Modal header -->
      <div
        class="flex justify-between items-center p-5 rounded-t border-b dark:border-{textExLColor}-600"
      >
        <h3 class="text-xl font-medium text-{textExLColor}-900 dark:text-white">
          {titleExL}
        </h3>
        <button
          type="button"
          class="text-{textExLColor}-400 bg-transparent hover:bg-{textExLColor}-200 hover:text-{textExLColor}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-{textExLColor}-600 dark:hover:text-white"
          data-modal-toggle="extralarge-modal"
          on:click={() => closeExtraLargeModal()}
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
        class="flex items-center p-6 space-x-2 rounded-b border-t border-{textExLColor}-200 dark:border-{textExLColor}-600"
      >
        {#if btnExL1}
          <button
            data-modal-toggle="extralarge-modal"
            type="button"
            class="text-white bg-{btnExLColor}-700 hover:bg-{btnExLColor}-800 focus:ring-4 focus:ring-{btnExLColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnExLColor}-600 dark:hover:bg-{btnExLColor}-700 dark:focus:ring-{btnExLColor}-800"
            on:click={() => closeExtraLargeModal()}>{btnExL1}</button
          >
        {/if}
        {#if btnExL2}
          <button
            data-modal-toggle="extralarge-modal"
            type="button"
            class="text-{textExLColor}-500 bg-white hover:bg-{textExLColor}-100 focus:ring-4 focus:ring-{textExLColor}-300 rounded-lg border border-{textExLColor}-200 text-sm font-medium px-5 py-2.5 hover:text-{textExLColor}-900 focus:z-10 dark:bg-{textExLColor}-700 dark:text-{textExLColor}-300 dark:border-{textExLColor}-500 dark:hover:text-white dark:hover:bg-{textExLColor}-600"
            on:click={() => closeExtraLargeModal()}>{btnExL2}</button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
