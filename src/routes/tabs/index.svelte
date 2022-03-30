<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
	<div class="p-4">
		<Card
			img="/images/tabs.webp"
			btnColor="green"
			header="Default Tabs"
			link="/tabs/default-tabs"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/tabs.webp"
			btnColor="indigo"
			header="Interactive Tabs"
			link="/tabs/interactive-tabs"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/tabs.webp"
			btnColor="red"
			header="Multiple Interactive Tabs"
			link="/tabs/multiple-interactive-tabs"
		/>
	</div>
	<div class="p-4">
		<Card img="/images/tabs.webp" btnColor="gray" header="Pill Tabs" link="/tabs/pilltabs" />
	</div>
</div>
