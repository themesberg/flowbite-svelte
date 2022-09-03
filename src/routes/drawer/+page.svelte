<script>
  import Htwo from '../utils/Htwo.svelte';
  import ExampleDiv from '../utils/ExampleDiv.svelte';
  import { Drawer, Button } from '$lib';
  import { sineIn } from 'svelte/easing';
  let defaultDrawer = false;
  let transitionParams = {
    x: -200,
    duration: 300,
    easing: sineIn
  };
  let hidden = true;
</script>

<h1 class="my-40">TEst</h1>
<ExampleDiv
  class="h-96 relative rounded-xl w-full m-0 mx-auto p-0 bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
  <div class="text-center">
    <Button on:click={() => (hidden = false)}>Show drawer</Button>
  </div>
  <!-- drawer component -->
  <Drawer transitionType="fly" {transitionParams} bind:hidden class="h-72">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <svg
        class="mr-2 w-5 h-5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" /></svg
      >Info
    </h5>
    <button
      type="button"
      data-drawer-dismiss="drawer-example"
      aria-controls="drawer-example"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd" /></svg>
      <span class="sr-only">Close menu</span>
    </button>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a
        href="/"
        class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
      Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
      job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <a
        href="/"
        class="py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >Learn more</a>
      <a
        href="/"
        class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >Get access <svg
          class="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd" /></svg
        ></a>
    </div>
  </Drawer>
</ExampleDiv>
