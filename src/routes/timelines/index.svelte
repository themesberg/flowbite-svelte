<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Timeline Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/timeline.webp" btnColor="red" header="Default" link="/timelines/default" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/timeline.webp" btnColor="green" header="Vertical" link="/timelines/vertical" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/timeline.webp" btnColor="purple" header="Horizontal" link="/timelines/horizontal" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/timeline.webp" btnColor="pink" header="Activity" link="/timelines/activity" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/timeline.webp" btnColor="indigo" header="Group" link="/timelines/group" btnLabel="Read more" />
	</div>
</div>
