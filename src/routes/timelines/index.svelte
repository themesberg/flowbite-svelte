<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
	<div class="p-4">
		<Card img="/images/timeline.webp" btnColor="red" header="Default" link="/timelines/default" />
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="green"
			header="Vertical"
			link="/timelines/vertical"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="purple"
			header="Horizontal"
			link="/timelines/horizontal"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/timeline.webp"
			btnColor="pink"
			header="Activity"
			link="/timelines/activity"
		/>
	</div>
	<div class="p-4">
		<Card img="/images/timeline.webp" btnColor="indigo" header="Group" link="/timelines/group" />
	</div>
</div>
