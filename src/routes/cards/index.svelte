<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Card Components</h1>
	<div class="p-4">
		<Card img="/images/cards.webp" btnColor="blue" header="CARD" link="/cards/card" />
	</div>
	<div class="p-4">
		<Card img="/images/cards.webp" btnColor="green" header="CTA CARD" link="/cards/cta" />
	</div>
	<div class="p-4">
		<Card img="/images/cards.webp" btnColor="red" header="ECOMMERCE CARD" link="/cards/ecommerce" />
	</div>
	<div class="p-4">
		<Card
			img="/images/cards.webp"
			btnColor="gray"
			header="INTERACTIVE CARD"
			link="/cards/interactive"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/cards.webp"
			btnColor="purple"
			header="HORIAONTAL CARD"
			link="/cards/horizontal"
		/>
	</div>
	<div class="p-4">
		<Card img="/images/cards.webp" btnColor="pink" header="LIST CARD" link="/cards/list" />
	</div>
</div>
