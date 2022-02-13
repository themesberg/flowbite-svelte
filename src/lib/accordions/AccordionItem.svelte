<script>
  import { getContext } from "svelte";
  // import collapse from "svelte-collapse";
  export let key;
  const store = getContext("svelte-collapsible-accordion");
  $: params = {
    open: $store.key === key,
    duration: $store.duration,
    easing: $store.easing,
  };
  function handleToggle() {
    if (params.open) {
      store.update((s) => Object.assign(s, { key: null }));
    } else {
      store.update((s) => Object.assign(s, { key }));
    }
  }
</script>

<li class="accordion-item" aria-expanded={params.open}>
  <div class="accordion-item-header" on:click={handleToggle}>
    <slot name="header" />
  </div>

  <div class="accordion-item-body">
    <slot name="body" />
  </div>

  <slot />
</li>

<style>
  .accordion-item-header {
    user-select: none;
    cursor: pointer;
  }
</style>
