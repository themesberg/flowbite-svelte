<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
	import Responsive from '../utils/Responsive.svelte';
</script>

<Responsive />

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Button-group Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/buttongroups.webp" btnColor="pink" header="DEFAULT BUTTON GROUP" link="/button-groups/default" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/buttongroups.webp" btnColor="green" header="OUTLINE BUTTON GROUP" link="/button-groups/outline" btnLabel="Read more" />
	</div>
</div>
