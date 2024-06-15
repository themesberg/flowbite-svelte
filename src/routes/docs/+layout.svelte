<script lang="ts">
  import type { PageData } from '../$types';
  import FlowbiteSvelteLayout from '../layouts/FlowbiteSvelteLayout.svelte';
  import ComponentsLayout from '../layouts/ComponentsLayout.svelte';
  export let data: PageData;
  // console.log('data.posts: ', data.posts)
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data}>
    <slot />
  </ComponentsLayout>
</FlowbiteSvelteLayout>
