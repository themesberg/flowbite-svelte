<script>
  import { ExtraLargeModal } from "$lib/index";

  let btnExLName = "Extra Large Modal";
  let btnExLColor = "blue";
  let textExLColor = "gray";
  function openExtraLargeModal() {
    toggleModal("extralarge-modal");
  }
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->
  <button
    on:click={openExtraLargeModal}
    class="block w-full md:w-auto text-white bg-{btnExLColor}-700 hover:bg-{btnExLColor}-800 focus:ring-4 focus:ring-{btnExLColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnExLColor}-600 dark:hover:bg-{btnExLColor}-700 dark:focus:ring-{btnExLColor}-800"
    type="button"
    data-modal-toggle="extralarge-modal"
  >
    {btnExLName}
  </button>
</div>

<div class="p-6">
  <ExtraLargeModal
    btnExLColor={"indigo"}
    title={"Default Modal Title"}
    btnExL1="Yes"
    btnExL2="No"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </ExtraLargeModal>
</div>
