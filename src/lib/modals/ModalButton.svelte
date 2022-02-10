<script>
  import { toggleModal } from "./modalHelper";
  // required
  export let id = "modal-id";
  // optional
  export let btnName = "Modal Name";
  export let btnColor = "blue";

  export let openFn = () => {
    toggleModal(id);
  };
</script>

<button
  on:click={openFn}
  class="block w-full md:w-auto text-white bg-{btnColor}-700 hover:bg-{btnColor}-800 focus:ring-4 focus:ring-{btnColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnColor}-600 dark:hover:bg-{btnColor}-700 dark:focus:ring-{btnColor}-800"
  type="button"
  data-modal-toggle={id}
>
  {btnName}
</button>
