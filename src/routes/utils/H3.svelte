<script>
	import { Heading } from '$lib';
	let { children } = $props();
</script>

<Heading tag="h3" class="my-4 text-xl">
	{@render children()}
</Heading>
