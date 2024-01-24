<script>
	import { Heading } from '$lib';
	let { children } = $props();
</script>

<Heading tag="h2" class="my-6 text-2xl">
	{@render children()}
</Heading>
