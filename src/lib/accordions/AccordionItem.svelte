<script>
  import { getContext } from "svelte";
  import collapse from "svelte-collapse";
  export let id;
  const store = getContext("svelte-collapsible-accordion");
  $: params = {
    open: $store.id === id,
    duration: $store.duration,
    easing: $store.easing,
  };
  function handleToggle() {
    if (params.open) {
      store.update((s) => Object.assign(s, { id: null }));
    } else {
      store.update((s) => Object.assign(s, { id }));
    }
  }
</script>

<h2 aria-expanded={params.open}>
  <button
    on:click={handleToggle}
    type="button"
    class:rounded-t-xl={id === "1"}
    class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <span><slot name="header" /></span>
    <svg
      data-accordion-icon
      class="w-6 h-6 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
</h2>
<div use:collapse={params}>
  <div class="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
    <slot name="body" />
  </div>
</div>
