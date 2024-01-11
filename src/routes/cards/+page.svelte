<script>
	import { Card, Button } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import card1 from './md/card1.md?raw';
</script>

<Card href="/cards">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		Noteworthy technology acquisitions 2021
	</h5>
	<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</p>
</Card>

<HighlightCompo code={card1} />
