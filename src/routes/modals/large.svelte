<script>
  import { LargeModal, ModalButton } from "$lib/index";

  let id = "my-large-modal";
  let btnName = "Large Modal";
  let btnColor = "red";
  let textLColor = "blue";
  let btnL1 = "I accept";
  let btnL2 = "Decline";

  const handlebtnL1 = () => {
    alert("handlebtnL1 is clicked from a parent page.");
    toggleModal(id, false);
  };

  const handlebtnL2 = () => {
    alert("handlebtnL2 is clicked from a parent page.");
    toggleModal(id, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton {id} {btnName} {btnColor} />
</div>

<div class="p-8">
  <LargeModal
    {id}
    btnColor={"red"}
    title={"Large Modal Title"}
    textColor={textLColor}
    btn1={btnL1}
    btn2={btnL2}
    on:handlebtnL1={handlebtnL1}
    on:handlebtnL2={handlebtnL2}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </LargeModal>
</div>
