<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
  let Content = $derived(data.content);
</script>

<Content />
