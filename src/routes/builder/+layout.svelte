<script lang="ts">
  import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "../layouts/ComponentsLayout.svelte";

  let { data, children } = $props();
  // console.log('data.posts: ', data.posts)
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data}>
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
