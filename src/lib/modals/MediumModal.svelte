<script>
  export let btnMColor = "blue";
  export let textMColor = "gray";
  export let titleM = "Terms of Service";
  export let btnM1 = "I accept";
  export let btnM2 = "Decline";

  export const closeMediumModal = () => {
    toggleModal("medium-modal", false);
  };
</script>

<!-- Main modal -->
<div
  id="medium-modal"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
>
  <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-{textMColor}-700">
      <!-- Modal header -->
      <div
        class="flex justify-between items-start p-5 rounded-t border-b dark:border-{textMColor}-600"
      >
        <h3
          class="text-xl font-semibold text-{textMColor}-900 lg:text-2xl dark:text-white"
        >
          {titleM}
        </h3>
        <button
          type="button"
          class="text-{textMColor}-400 bg-transparent hover:bg-{textMColor}-200 hover:text-{textMColor}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-{textMColor}-600 dark:hover:text-white"
          data-modal-toggle="medium-modal"
          on:click={() => closeMediumModal()}
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
        class="flex items-center p-6 space-x-2 rounded-b border-t border-{textMColor}-200 dark:border-{textMColor}-600"
      >
        {#if btnM1}
          <button
            data-modal-toggle="medium-modal"
            type="button"
            class="text-white bg-{btnMColor}-700 hover:bg-{btnMColor}-800 focus:ring-4 focus:ring-{btnMColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnMColor}-600 dark:hover:bg-{btnMColor}-700 dark:focus:ring-{btnMColor}-800"
            on:click={() => closeMediumModal()}
          >
            {btnM1}
          </button>
        {/if}
        {#if btnM2}
          <button
            data-modal-toggle="medium-modal"
            type="button"
            class="text-{textMColor}-500 bg-white hover:bg-{textMColor}-100 focus:ring-4 focus:ring-{textMColor}-300 rounded-lg border border-{textMColor}-200 text-sm font-medium px-5 py-2.5 hover:text-{textMColor}-900 focus:z-10 dark:bg-{textMColor}-700 dark:text-{textMColor}-300 dark:border-{textMColor}-500 dark:hover:text-white dark:hover:bg-{textMColor}-600"
            on:click={() => closeMediumModal()}>{btnM2}</button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
