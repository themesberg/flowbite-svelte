<script>
  import { SmallModal, ModalButton } from "$lib/index";

  let btnName1 = "Small Modal";
  let btnName2 = "Small Modal 2";
  let btnColor1 = "purple";
  let btnColor2 = "red";
  let textSColor = "gray";
  let id1 = "small-modal";
  let id2 = "small-modal-2";

  const openSmallModal1 = () => {
    toggleModal(id1);
  };

  const openSmallModal2 = () => {
    toggleModal(id2);
  };

  const handlebtnS1 = () => {
    toggleModal(id1, false);
  };

  const handlebtnS2 = () => {
    toggleModal(id1, false);
  };

  const handlebtnS3 = () => {
    toggleModal(id2, false);
  };

  const handlebtnS4 = () => {
    toggleModal(id2, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton
    id={id1}
    btnName={btnName1}
    btnColor={btnColor1}
    openFnName={openSmallModal1}
  />

  <ModalButton
    id={id2}
    btnName={btnName2}
    btnColor={btnColor2}
    openFnName={openSmallModal2}
  />
</div>

<SmallModal
  id={id1}
  btnColor={"pink"}
  title={"Small Modal Title"}
  btn1="Yes"
  btn2="No"
  on:handlebtnS1={handlebtnS1}
  on:handlebtnS2={handlebtnS2}
>
  <p
    class="text-base leading-relaxed text-{textSColor}-500 dark:text-{textSColor}-400"
  >
    Modal 1
  </p>
</SmallModal>

<SmallModal
  id={id2}
  btnColor={"yellow"}
  title={"Small Modal Title"}
  btn1="Yes"
  btn2="No"
  on:handlebtnS1={handlebtnS3}
  on:handlebtnS2={handlebtnS4}
>
  <p
    class="text-base leading-relaxed text-{textSColor}-500 dark:text-{textSColor}-400"
  >
    Modal 2
  </p>
</SmallModal>
