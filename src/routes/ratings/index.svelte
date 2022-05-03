<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Rating Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/rating.webp" btnColor="blue" header="Rating" link="/ratings/rating" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/rating.webp" btnColor="red" header="Advanced rating" link="/ratings/advanced-rating" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/rating.webp" btnColor="green" header="Score rating" link="/ratings/score-rating" btnLabel="Read more" />
	</div>
</div>
