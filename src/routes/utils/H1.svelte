<script>
	import { Heading } from '$lib';
	let { children } = $props();
</script>

<Heading tag="h1" class="my-8 text-3xl">
	{@render children()}
</Heading>
