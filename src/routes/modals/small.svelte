<script>
  import { SmallModal, ModalButton, modalIdStore } from "$lib/index";
  import { goto } from "$app/navigation";

  const closeModal = () => {
    modalIdStore.update((value) => {
      value = null;
    });
  };

  // common
  const textSColor = "blue";

  // for basic
  const id1 = "modal-1";
  const btnName1 = "Modal 1";

  // for small modal 2
  const id2 = "modal-2";
  const btnName2 = "Modal 2";
  const btnColor2 = "purple";

  const handlebtnS1 = () => {
    alert("You clicked btnS1");
    closeModal();
    goto("/dummy-pages/about");
  };

  const handlebtnS2 = () => {
    closeModal();
  };

  // for small modal 2
  const id3 = "modal-3";
  const btnName3 = "Modal 3";
  const btnColor3 = "red";

  const handlebtnS3 = () => {
    console.log("Sending to about page.");
    closeModal();
    goto("/dummy-pages/about");
  };

  const handlebtnS4 = () => {
    console.log("Sending to about page.");
    closeModal();
  };
</script>

<div class="block p-8 space-y-4 md:flex md:space-y-0 md:space-x-4">
  <!-- Simple  -->
  <ModalButton id={id1} btnName={btnName1} />
  <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
  <ModalButton id={id3} btnName={btnName3} btnColor={btnColor3} />
</div>
<h1>Hi there from small.svelte</h1>
<!-- Small Modal body -->
<SmallModal id={id1} title={"Modal 1 Title"}>Modal 1 Content</SmallModal>
<SmallModal
  id={id2}
  btnColor={"pink"}
  title={"Modal 2 Title"}
  btn1="Go to a page"
  on:handlebtn1={handlebtnS1}
>
  Modal 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>

<SmallModal
  id={id3}
  btnColor={"yellow"}
  textColor={textSColor}
  title={"Modal 3 Title"}
  btn1="Go to ..."
  btn2="Close"
  on:handlebtn1={handlebtnS3}
  on:handlebtn2={handlebtnS4}
>
  Modal 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
</SmallModal>
