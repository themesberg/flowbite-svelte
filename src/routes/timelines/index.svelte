<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Timeline Components</h1>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="red"
			header="Default"
			link="/timelines/default"
			btnLabel="Read more"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="green"
			header="Vertical"
			link="/timelines/vertical"
			btnLabel="Read more"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="purple"
			header="Horizontal"
			link="/timelines/horizontal"
			btnLabel="Read more"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="pink"
			header="Activity"
			link="/timelines/activity"
			btnLabel="Read more"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="indigo"
			header="Group"
			link="/timelines/group"
			btnLabel="Read more"
		/>
	</div>
</div>
