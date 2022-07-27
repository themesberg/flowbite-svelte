<script lang="ts">
	import Card from '$lib/cards/Card.svelte';
	import Button from '$lib/buttons/Button.svelte';
	import { ArrowRight } from 'svelte-heros';

	export let color;
	export let href;
	export let img;
</script>

<Card {img} padding="md">
	<h5 class="mb-2 text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">
		<slot />
	</h5>
	<Button {color} {href}>
		Read more <ArrowRight class="w-5 h-5 ml-2" />
	</Button>
</Card>
