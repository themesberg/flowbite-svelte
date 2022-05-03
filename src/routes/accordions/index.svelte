<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Accordion Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/accordions.webp" btnColor="green" header="DEFAULT ACCORDION" link="/accordions/default" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/accordions.webp" btnColor="blue" header="ICON ACCORDION" link="/accordions/icon-accordion" btnLabel="Read more" />
	</div>
</div>
