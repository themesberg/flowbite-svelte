<script>
  import { SmallModal, ModalButton } from "$lib/index";
  import { goto } from "$app/navigation";

  // common
  const textSColor = "blue";

  // for basic
  const idBasic = "basic-modal";
  const btnBasicName = "Basic Modal";

  // for small modal 1
  const btnName1 = "Small Modal";
  const id1 = "small-modal";
  const btnColor1 = "purple";

  const handlebtnS1 = () => {
    toggleModal(id1, false);
    goto("/dummy-pages/about");
  };

  const handlebtnS2 = () => {
    toggleModal(id1, false);
  };

  // for small modal 2
  const btnName2 = "Small Modal 2";
  const id2 = "small-modal-2";
  const btnColor2 = "red";

  const handlebtnS3 = () => {
    toggleModal(id2, false);
  };

  const handlebtnS4 = () => {
    toggleModal(id2, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Simple  -->
  <ModalButton id={idBasic} btnName={btnBasicName} />

  <ModalButton id={id1} btnName={btnName1} btnColor={btnColor1} />

  <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
</div>

<SmallModal id={idBasic} title={"Basic Modal Title"}>
  Basic Modal Content
</SmallModal>

<SmallModal
  id={id1}
  btnColor={"pink"}
  title={"Small Modal Title"}
  btn1="View"
  btn2="No"
  on:handlebtnS1={handlebtnS1}
  on:handlebtnS2={handlebtnS2}
>
  Modal 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>

<SmallModal
  id={id2}
  btnColor={"yellow"}
  textColor={textSColor}
  title={"Small Modal Title"}
  btn1="Yes"
  btn2="No"
  on:handlebtnS1={handlebtnS3}
  on:handlebtnS2={handlebtnS4}
>
  <p
    class="text-base leading-relaxed text-{textSColor}-500 dark:text-{textSColor}-400"
  >
    Modal 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</SmallModal>
