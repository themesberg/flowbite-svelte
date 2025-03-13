<script lang="ts">
	import { Tooltip, Button } from '$lib';
</script>

<div class="mt-20 flex justify-center">
	<Button id="btn">Click me</Button>
	<Tooltip showOn="click" triggeredBy="#btn" color="blue" position="top" class="p-4"
		>Click anywhere to hide me.</Tooltip
	>
</div>
