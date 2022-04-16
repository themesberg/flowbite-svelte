<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Navbar Components</h1>
	<div class="p-4">
		<Card
			img="/images/navbar.webp"
			btnColor="pink"
			header="DEFAULT NAVBAR"
			link="/navbars/default"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/navbar.webp"
			btnColor="gray"
			header="DROPDOWN NAVBAR"
			link="/navbars/dropdown"
		/>
	</div>
</div>
