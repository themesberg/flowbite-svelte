<script>
  export let btnLColor = "blue";
  export let textLColor = "gray";
  export let titleL = "Terms of Service";
  export let btnL1 = "I accept";
  export let btnL2 = "Decline";

  export const closeLargeModal = () => {
    toggleModal("large-modal", false);
  };
</script>

<!-- Large Modal -->
<div
  id="large-modal"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
>
  <div class="relative px-4 w-full max-w-4xl h-full md:h-auto">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-{textLColor}-700">
      <!-- Modal header -->
      <div
        class="flex justify-between items-center p-5 rounded-t border-b dark:border-{textLColor}-600"
      >
        <h3 class="text-xl font-medium text-{textLColor}-900 dark:text-white">
          {titleL}
        </h3>
        <button
          type="button"
          class="text-{textLColor}-400 bg-transparent hover:bg-{textLColor}-200 hover:text-{textLColor}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-{textLColor}-600 dark:hover:text-white"
          data-modal-toggle="large-modal"
          on:click={() => closeLargeModal()}
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
        class="flex items-center p-6 space-x-2 rounded-b border-t border-{textLColor}-200 dark:border-{textLColor}-600"
      >
        {#if btnL1}
          <button
            data-modal-toggle="large-modal"
            type="button"
            class="text-white bg-{btnLColor}-700 hover:bg-{btnLColor}-800 focus:ring-4 focus:ring-{btnLColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnLColor}-600 dark:hover:bg-{btnLColor}-700 dark:focus:ring-{btnLColor}-800"
            on:click={() => closeLargeModal()}>{btnL1}</button
          >
        {/if}
        {#if btnL2}
          <button
            data-modal-toggle="large-modal"
            type="button"
            class="text-{textLColor}-500 bg-white hover:bg-{textLColor}-100 focus:ring-4 focus:ring-{textLColor}-300 rounded-lg border border-{textLColor}-200 text-sm font-medium px-5 py-2.5 hover:text-{textLColor}-900 focus:z-10 dark:bg-{textLColor}-700 dark:text-{textLColor}-300 dark:border-{textLColor}-500 dark:hover:text-white dark:hover:bg-{textLColor}-600"
            on:click={() => closeLargeModal()}>{btnL2}</button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
