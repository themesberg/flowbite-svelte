<script lang="ts">
  import type { LayoutProps } from './$types';
  import modeobserver from './utils/modeobserver';
  import { onMount } from 'svelte';

  let { children, data }: LayoutProps = $props();

  // console.log('data.FATHOM_ID', data.FATHOM_ID);

  onMount(modeobserver);
</script>

{@render children()}
