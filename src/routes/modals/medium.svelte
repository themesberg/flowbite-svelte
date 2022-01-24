<script>
  import { MediumModal } from "$lib/index";

  let btnMName = "Medium Modal";
  let btnMColor = "blue";
  let textMColor = "gray";
  function openMediumModal() {
    toggleModal("medium-modal");
  }
</script>

<div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Modal toggle -->
  <button
    on:click={openMediumModal}
    class="block text-white bg-{btnMColor}-700 hover:bg-{btnMColor}-800 focus:ring-4 focus:ring-{btnMColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnMColor}-600 dark:hover:bg-{btnMColor}-700 dark:focus:ring-{btnMColor}-800"
    type="button"
    data-modal-toggle="medium-modal"
  >
    {btnMName}
  </button>
</div>

<div class="p-6">
  <MediumModal
    btnMColor={"indigo"}
    title={"Default Modal Title"}
    btn1="Yes"
    btn2=""
  >
    <p
      class="text-base leading-relaxed text-{textMColor}-500 dark:text-{textMColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </MediumModal>
</div>
