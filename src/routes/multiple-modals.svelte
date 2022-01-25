<script>
  import { SmallModal, ModalButton } from "$lib/index";

  // // buttons
  let btnName = "Modal Name 2";
  let btnColor = "red";
  let id = "modal-id";
  let openFnName = "openModal";

  // small
  let title = "Small Modal Title";
  let textColor = "red";
  // let modalId = "modal-id-1";
  let btn1 = "I accept";
  let btn2 = "Decline";

  const handleS1 = () => {
    toggleModal(id, false);
  };

  const handleS2 = () => {
    toggleModal(modalId, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton {openFnName} {btnName} {id} {btnColor} />
</div>

<div class="p-6">
  <SmallModal
    {id}
    {btnColor}
    {title}
    {btn1}
    {btn2}
    on:handlebtn1={handleS1}
    on:handlebtn2={handleS2}
  >
    <p
      class="text-base leading-relaxed text-{textColor}-500 dark:text-{textColor}-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </SmallModal>

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo
  consectetur explicabo deleniti tenetur laudantium accusamus laboriosam?
  Quisquam, adipisci nihil! Nobis, similique. Maxime animi maiores possimus!
  Ipsam, ipsa rerum. Debitis!
</div>
