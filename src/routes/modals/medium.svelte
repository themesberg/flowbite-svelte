<script>
  import { MediumModal, ModalButton } from "$lib/index";
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";
  // import "prism-themes/themes/prism-duotone-light.css";

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

<div class="container my-8 flex flex-wrap mx-auto">
  <h1 class="text-3xl w-full">Medium Modals: Setup</h1>
  <p>
    Import SmallModal and ModalButton components and set variables in the script
    tag.
  </p>

  <div class="code">
    {@html Prism.highlight(
      `
  import { SmallModal, ModalButton } from "svelte-flow";
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
      `,
      Prism.languages["javascript"]
    )}
  </div>
</div>

<div class="container mt-4 flex flex-wrap mx-auto">
  <h1 class="text-3xl w-full">Medium Modals for Information</h1>

  <div class="container flex flex-wrap my-8 mx-auto justify-center">
    <ModalButton {id} btnName={btnBasicName} />
  </div>

  <p>Create a button and modal.</p>
  <div class="code">
    {@html Prism.highlight(
      `
<ModalButton {id} btnName={btnBasicName} />
<MediumModal {id} title={"Basic Modal Title"}>
  Basic Modal Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Ad odit aspernatur minus deserunt illo error eum temporibus officiis. 
</MediumModal>
      `,
      Prism.languages["html"]
    )}
  </div>
</div>

<div class="container my-8 flex flex-wrap mx-auto">
  <h1 class="text-3xl w-full">Medium Modals with an Action Button</h1>

  <div class="container flex flex-wrap my-8 mx-auto justify-center">
    <ModalButton id={id1} btnName={btnMName} {btnColor} />
  </div>

  <div class="code">
    {@html Prism.highlight(
      `
<ModalButton id={id1} btnName={btnMName} {btnColor} />
<MediumModal
  id={id1}
  btnColor={"yellow"}
  title={"Medium Modal Title"}
  textColor={textMColor}
  btn1="Yes"
  on:handlebtn1={handlebtnM1}
>
  Modal 2 Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
  odit aspernatur minus deserunt illo error eum temporibus officiis. 
</MediumModal>
      `,
      Prism.languages["html"]
    )}
  </div>
</div>

<div class="container my-8 flex flex-wrap mx-auto">
  <h1 class="text-3xl w-full">Medium Modals with action buttons</h1>

  <div class="container flex flex-wrap my-8 mx-auto justify-center">
    <ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
  </div>

  <div class="code">
    {@html Prism.highlight(
      `
<ModalButton id={id2} btnName={btnName2} btnColor={btnColor2} />
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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</MediumModal>
      `,
      Prism.languages["html"]
    )}
  </div>
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

<div class="container mt-4 flex flex-wrap mx-auto pb-48">
  <a href="/modals" class="text-blue-700 text-lg"> See more different sizes.</a>
</div>
