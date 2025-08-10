<script lang="ts">
  import type { LayoutProps } from './$types';
  import modeobserver from './utils/modeobserver';
  import { onMount } from 'svelte';
  import { Runatics } from 'runatics';

  let { children, data }: LayoutProps = $props();
  const analyticsId = data.ANALYTICS_ID as string;
  // console.log('analyticsId', data.ANALYTICS_ID);

  onMount(modeobserver);
</script>

{#if analyticsId}
  <Runatics {analyticsId} />
{/if}
{@render children()}
