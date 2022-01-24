<script>
  import Modal from "$lib/modals/Modal.svelte";
  let showPopup = false;
  const onShowPopup = (ev) => {
    showPopup = true;
  };
  const onPopupClose = (data) => {
    showPopup = false;
    console.log(data);
  };

  export let btnColor = "blue";
</script>

<main>
  <div class="container">
    <button
      class="block text-white bg-{btnColor}-700 hover:bg-{btnColor}-800 focus:ring-4 focus:ring-{btnColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnColor}-600 dark:hover:bg-{btnColor}-700 dark:focus:ring-{btnColor}-800 btn-success"
      type="button"
      on:click={onShowPopup}>Show Popup</button
    >

    <Modal open={showPopup} onClosed={(data) => onPopupClose(data)}>
      <h2>Testing</h2>
    </Modal>
  </div>
</main>
