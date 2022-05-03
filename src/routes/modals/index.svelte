<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Modal Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/modals.webp" btnColor="blue" header="All Modals" link="/modals/all-modals" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/modals.webp" btnColor="red" header="Small Modals" link="/modals/small" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/modals.webp" btnColor="green" header="Medium Modals" link="/modals/medium" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/modals.webp" btnColor="purple" header="Large Modals" link="/modals/large" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/modals.webp" btnColor="pink" header="Extra-large Modals" link="/modals/extra-large" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/modals.webp" btnColor="indigo" header="Signin Modals" link="/modals/signin" btnLabel="Read more" />
	</div>
</div>
