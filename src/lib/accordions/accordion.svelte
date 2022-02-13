<script>
  import { onDestroy } from "svelte";
  import { setContext } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  export let duration = 0.2;
  export let easing = "ease";
  export let id = null;
  const dispatch = createEventDispatcher();
  // create a store for the children to access
  const store = writable({ id, duration, easing });
  // when the store changes, update the id prop
  const unsubscribe = store.subscribe((s) => {
    id = s.id;
    dispatch("change", { id });
  });
  // when the id prop changes, update the store
  $: store.update((s) => Object.assign(s, { id }));
  // make the store available to children
  setContext("svelte-collapsible-accordion", store);
  onDestroy(unsubscribe);
</script>

<div>
  <slot />
</div>
