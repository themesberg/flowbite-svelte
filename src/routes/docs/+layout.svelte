<script lang="ts">
  import type { PageProps } from "../$types";
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
