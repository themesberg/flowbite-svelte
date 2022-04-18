<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Dropdown Components</h1>
	<div class="p-4">
		<Card
			img="/images/dropdown.webp"
			header="DEFAULT"
			link="/dropdowns/default"
			btnLabel="Read more"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/dropdown.webp"
			btnColor="green"
			header="IMAGE DROPDOWN"
			link="/dropdowns/image"
			btnLabel="Read more"
		/>
	</div>
</div>
