<script>
  import { onDestroy } from "svelte";
  import { setContext } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  export let duration = 0.2;
  export let easing = "ease";
  export let key = null;
  const dispatch = createEventDispatcher();
  // create a store for the children to access
  const store = writable({ key, duration, easing });
  // when the store changes, update the key prop
  const unsubscribe = store.subscribe((s) => {
    key = s.key;
    dispatch("change", { key });
  });
  // when the key prop changes, update the store
  $: store.update((s) => Object.assign(s, { key }));
  // make the store available to children
  setContext("svelte-collapsible-accordion", store);
  onDestroy(unsubscribe);
</script>

<slot />
