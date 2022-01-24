<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let btnColor = "blue";
  export let textColor = "gray";
  export let title = "Terms of Service";
  export let btn1 = "Yes";
  export let btn2 = "No";

  export const closeLargeModal = () => {
    toggleModal("large-modal", false);
  };

  const handlebtn1 = () => {
    dispatch("handlebtnL1");
  };

  const handlebtn2 = () => {
    dispatch("handlebtnL2");
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
    <div class="relative bg-white rounded-lg shadow dark:bg-{textColor}-700">
      <!-- Modal header -->
      <div
        class="flex justify-between items-center p-5 rounded-t border-b dark:border-{textColor}-600"
      >
        <h3 class="text-xl font-medium text-{textColor}-900 dark:text-white">
          {title}
        </h3>
        <button
          type="button"
          class="text-{textColor}-400 bg-transparent hover:bg-{textColor}-200 hover:text-{textColor}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-{textColor}-600 dark:hover:text-white"
          data-modal-toggle="large-modal"
          on:click={closeLargeModal}
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
        class="flex items-center p-6 space-x-2 rounded-b border-t border-{textColor}-200 dark:border-{textColor}-600"
      >
        {#if btn1}
          <button
            data-modal-toggle="large-modal"
            type="button"
            class="text-white bg-{btnColor}-700 hover:bg-{btnColor}-800 focus:ring-4 focus:ring-{btnColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnColor}-600 dark:hover:bg-{btnColor}-700 dark:focus:ring-{btnColor}-800"
            on:click={handlebtn1}>{btn1}</button
          >
        {/if}
        {#if btn2}
          <button
            data-modal-toggle="large-modal"
            type="button"
            class="text-{textColor}-500 bg-white hover:bg-{textColor}-100 focus:ring-4 focus:ring-{textColor}-300 rounded-lg border border-{textColor}-200 text-sm font-medium px-5 py-2.5 hover:text-{textColor}-900 focus:z-10 dark:bg-{textColor}-700 dark:text-{textColor}-300 dark:border-{textColor}-500 dark:hover:text-white dark:hover:bg-{textColor}-600"
            on:click={handlebtn2}>{btn2}</button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
