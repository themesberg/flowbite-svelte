<script>
  import { getContext } from "svelte";
  import collapse from "svelte-collapse";
  import {
    ChevronDownIconSolid,
    ChevronUpIconSolid,
  } from "@codewithshin/svelte-heroicons";
  export let id;
  const store = getContext("svelte-collapsible-accordion");
  $: params = {
    open: $store.id === id,
    duration: $store.duration,
    easing: $store.easing,
  };
  const handleToggle = () => {
    if (params.open) {
      store.update((s) => Object.assign(s, { id: null }));
    } else {
      store.update((s) => Object.assign(s, { id }));
    }
  };
</script>

<h2 aria-expanded={params.open}>
  <button
    on:click={handleToggle}
    type="button"
    class:rounded-t-xl={id === "1"}
    class:border-t-0={id !== "1"}
    class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <span><slot name="header" /></span>
    {#if params.open}
      <ChevronUpIconSolid />
    {:else}
      <ChevronDownIconSolid />
    {/if}
  </button>
</h2>
<div use:collapse={params}>
  <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <slot name="body" />
  </div>
</div>
