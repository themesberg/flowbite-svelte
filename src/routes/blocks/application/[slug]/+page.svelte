<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  // console.log('products: ', data)
</script>

<svelte:component this={data.content} />
