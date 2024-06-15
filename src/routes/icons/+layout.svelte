<script lang="ts">
  import type { PageData } from '../$types';
  import FlowbiteSvelteLayout from '../layouts/FlowbiteSvelteLayout.svelte';
  import ComponentsLayout from '../layouts/ComponentsLayout.svelte';
  export let data: PageData;
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data}>
    <slot />
  </ComponentsLayout>
</FlowbiteSvelteLayout>
