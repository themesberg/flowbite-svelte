<script>
	import modeobserver from './utils/modeobserver';
	import { onMount } from 'svelte';
  export let data;
  const analyticsId = data.ANALYTICS_ID

	onMount(modeobserver);
</script>

<slot />
