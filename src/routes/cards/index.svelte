<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Card Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/cards.webp" btnColor="blue" header="CARD" link="/cards/card" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/cards.webp" btnColor="green" header="CTA CARD" link="/cards/cta" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/cards.webp" btnColor="red" header="ECOMMERCE CARD" link="/cards/ecommerce" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/cards.webp" btnColor="gray" header="INTERACTIVE CARD" link="/cards/interactive" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/cards.webp" btnColor="purple" header="HORIAONTAL CARD" link="/cards/horizontal" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/cards.webp" btnColor="pink" header="LIST CARD" link="/cards/list" btnLabel="Read more" />
	</div>
</div>
