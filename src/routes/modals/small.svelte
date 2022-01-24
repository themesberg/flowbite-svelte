<script>
  import { SmallModal } from "$lib/index";

  let btnSName = "Small Modal";
  let btnSColor = "blue";
  let textSColor = "gray";
  function openSmallModal() {
    toggleModal("small-modal");
  }
</script>

<div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->
  <button
    on:click={openSmallModal}
    class="block w-full md:w-auto text-white bg-{btnSColor}-700 hover:bg-{btnSColor}-800 focus:ring-4 focus:ring-{btnSColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnSColor}-600 dark:hover:bg-{btnSColor}-700 dark:focus:ring-{btnSColor}-800"
    type="button"
    data-modal-toggle="small-modal"
  >
    {btnSName}
  </button>
</div>

<div class="p-6">
  <SmallModal btnSColor={"pink"} title={"Small Modal Title"} btn1="Yes" btn2="">
    <p
      class="text-base leading-relaxed text-{textSColor}-500 dark:text-{textSColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </SmallModal>
</div>
