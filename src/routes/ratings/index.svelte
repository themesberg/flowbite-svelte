<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Rating Components</h1>
	<div class="p-4">
		<Card img="/images/rating.webp" btnColor="blue" header="Rating" link="/ratings/rating" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card img="/images/rating.webp" btnColor="red" header="Advanced rating" link="/ratings/advanced-rating" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card img="/images/rating.webp" btnColor="green" header="Score rating" link="/ratings/score-rating" btnLabel="Read more" />
	</div>
</div>
