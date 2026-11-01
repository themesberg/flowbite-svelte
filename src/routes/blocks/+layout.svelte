<script lang="ts">
  import FlowbiteSvelteLayout from "$docs-ui/layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "$docs-ui/layouts/ComponentsLayout.svelte";

  let { data, children } = $props();
  // console.log('data: ', data)
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data} submenu="blocks">
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
