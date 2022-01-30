<script>
  import { MediumModal, ModalButton } from "$lib/index";

  const idBasic = "basic-modal";
  const btnBasicName = "Basic Modal";

  let btnMName = "Medium Modal";
  let btnColor = "pink";
  let textMColor = "red";
  let idMedium = "medium-modal";

  let idMedium2 = "medium-modal2";
  let btnName2 = "Medium Modal 2";
  let textMColor2 = "yellow";
  let btnColor2 = "purple";

  const handlebtnM1 = () => {
    toggleModal(idMedium, false);
  };
  const handlebtnM2 = () => {
    toggleModal(idMedium, false);
  };
  const handlebtnM3 = () => {
    toggleModal(idMedium2, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton id={idBasic} btnName={btnBasicName} />
  <ModalButton id={idMedium} btnName={btnMName} {btnColor} />
  <ModalButton id={idMedium2} btnName={btnName2} btnColor={btnColor2} />
</div>

<div class="p-6">
  <MediumModal id={idBasic} title={"Basic Modal Title"}>
    Basic Modal Content: Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Ad odit aspernatur minus deserunt illo error eum temporibus officiis.
    Ab facere dolorem quisquam omnis? Aspernatur, asperiores voluptas quis culpa
    consectetur saepe!
  </MediumModal>

  <MediumModal
    id={idMedium}
    btnColor={"yellow"}
    title={"Medium Modal Title"}
    textColor={textMColor}
    btn1="Yes"
    btn2="No"
    on:handlebtnM1={handlebtnM1}
    on:handlebtnM2={handlebtnM2}
  >
    Modal 2 Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Ad odit aspernatur minus deserunt illo error eum temporibus officiis. Ab
    facere dolorem quisquam omnis? Aspernatur, asperiores voluptas quis culpa
    consectetur saepe!
  </MediumModal>

  <MediumModal
    id={idMedium2}
    btnColor={"indigo"}
    title={"Default Modal Title"}
    textColor={textMColor2}
    btn1="Yes"
    btn2="No"
    on:handlebtnM1={handlebtnM3}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </MediumModal>
</div>
