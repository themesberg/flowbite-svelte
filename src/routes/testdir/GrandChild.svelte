<script>
	import { getContext } from 'svelte';

	let ctx = getContext('ctx');
</script>

<p>Disabled in Grandchild: {ctx.disabled}</p>
<p>Disabled in Grandchild striped: {ctx.striped}</p>