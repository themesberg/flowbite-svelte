<script>
  import { LargeModal } from "$lib/index";

  let btnLName = "Large Modal";
  let btnLColor = "blue";
  let textLColor = "gray";
  function openLargeModal() {
    toggleModal("large-modal");
  }
</script>

<div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
  <button
    on:click={openLargeModal}
    class="block w-full md:w-auto text-white bg-{btnLColor}-700 hover:bg-{btnLColor}-800 focus:ring-4 focus:ring-{btnLColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnLColor}-600 dark:hover:bg-{btnLColor}-700 dark:focus:ring-{btnLColor}-800"
    type="button"
    data-modal-toggle="large-modal"
  >
    {btnLName}
  </button>
</div>

<div class="p-6">
  <LargeModal
    btnLColor={"red"}
    title={"Large Modal Title"}
    btnL1="Yes"
    btnL2="No"
  >
    <p
      class="text-base leading-relaxed text-{textLColor}-500 dark:text-{textLColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </LargeModal>
</div>
