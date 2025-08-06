<script lang="ts">
  import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "../layouts/ComponentsLayout.svelte";

  let { data, children } = $props();
  // console.log('data: ', data)
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data} submenu="blocks">
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
