<script>
  import { LargeModal, ModalButton } from "$lib/index";

  let id = "my-large-modal";
  let btnName = "Large Modal";
  let btnColor = "red";
  let textLColor = "gray";
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton {id} {btnName} {btnColor} />
</div>

<div class="p-6">
  <LargeModal {id} btnLColor={"red"} title={"Large Modal Title"}>
    <p
      class="text-base leading-relaxed text-{textLColor}-500 dark:text-{textLColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </LargeModal>
</div>
