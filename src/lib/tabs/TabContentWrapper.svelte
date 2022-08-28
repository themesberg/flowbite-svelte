<script lang="ts">
	import { getContext } from 'svelte';
	let tabId;
	tabId = getContext('tabId');
</script>

<div id="{tabId}-content">
	<slot />
</div>
