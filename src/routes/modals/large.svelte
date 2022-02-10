<script>
  import { LargeModal, ModalButton, toggleModal } from "$lib/index";

  // modal 1
  let id = "large-modal-1";
  let btnName = "Large Modal Simple";

  // Modal 1
  let id1 = "large-modal-2";
  let btnName1 = "Large modal with one button";
  let btnColor1 = "yellow";
  let btn1 = "Close";

  // Modal 2
  let id2 = "large-modal-3";
  let btnName2 = "Large modal with two buttons";
  let btnColor2 = "red";
  let btn2 = "Read more";
  let btn3 = "Close";

  const handlebtn1 = () => {
    alert("handlebtn1 is clicked from a parent page.");
    toggleModal(id1, false);
  };

  const handlebtn2 = () => {
    alert("handlebtn2 is clicked from a parent page.");
    toggleModal(id2, false);
  };

  const handlebtn3 = () => {
    alert("handlebtn3 is clicked from a parent page.");
    toggleModal(id2, false);
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <ModalButton {id} {btnName} />
  <ModalButton id={id1} btnName={btnName1} btnColor={btnColor1} />
  <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
</div>

<LargeModal {id} title={"Large Modal Title"}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco.
</LargeModal>

<LargeModal
  id={id1}
  title="Default Modal Title"
  {btn1}
  on:handlebtn1={handlebtn1}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco.
</LargeModal>

<LargeModal
  id={id2}
  btnColor="indigo"
  textColor="red"
  title="Default Modal Title"
  btn1={btn2}
  btn2={btn3}
  on:handlebtn1={handlebtn2}
  on:handlebtn2={handlebtn3}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco.
</LargeModal>
