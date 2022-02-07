<script>
  import { MediumModal, ModalButton } from "$lib/index";

  // modal 1
  const id = "basic-modal";
  const btnBasicName = "Medium Modal for information";

  // modal 2
  let id1 = "medium-modal";
  let btnMName = "Medium Modal with one button";
  let btnColor = "pink";
  let textMColor = "red";

  const handlebtnM1 = () => {
    toggleModal(id1, false);
  };

  // modal 3
  let id2 = "medium-modal2";
  let btnName2 = "Medium Modal with two buttons";
  let textMColor2 = "yellow";
  let btnColor2 = "purple";

  const handlebtnM2 = () => {
    toggleModal(id2, false);
  };
  const handlebtnM3 = () => {
    toggleModal(id2, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton {id} btnName={btnBasicName} />
  <ModalButton id={id1} btnName={btnMName} {btnColor} />
  <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
</div>

<MediumModal {id} title={"Basic Modal Title"}>
  Basic Modal Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Ad odit aspernatur minus deserunt illo error eum temporibus officiis. Ab
  facere dolorem quisquam omnis? Aspernatur, asperiores voluptas quis culpa
  consectetur saepe!
</MediumModal>

<MediumModal
  id={id1}
  btnColor={"yellow"}
  title={"Medium Modal Title"}
  textColor={textMColor}
  btn1="Yes"
  on:handlebtn1={handlebtnM1}
>
  Modal 2 Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
  odit aspernatur minus deserunt illo error eum temporibus officiis. Ab facere
  dolorem quisquam omnis? Aspernatur, asperiores voluptas quis culpa consectetur
  saepe!
</MediumModal>

<MediumModal
  id={id2}
  btnColor={"indigo"}
  title={"Default Modal Title"}
  textColor={textMColor2}
  btn1="Yes"
  btn2="No"
  on:handlebtn1={handlebtnM2}
  on:handlebtn2={handlebtnM3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco.
</MediumModal>
