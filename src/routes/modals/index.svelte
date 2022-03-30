<script>
	import { Card } from '$lib/index';
</script>

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
	<div class="p-4">
		<Card img="/images/modals.webp" btnColor="blue" header="All Modals" link="/modals/all-modals" />
	</div>
	<div class="p-4">
		<Card img="/images/modals.webp" btnColor="red" header="Small Modals" link="/modals/small" />
	</div>
	<div class="p-4">
		<Card img="/images/modals.webp" btnColor="green" header="Medium Modals" link="/modals/medium" />
	</div>
	<div class="p-4">
		<Card img="/images/modals.webp" btnColor="purple" header="Large Modals" link="/modals/large" />
	</div>
	<div class="p-4">
		<Card
			img="/images/modals.webp"
			btnColor="pink"
			header="Extra-large Modals"
			link="/modals/extra-large"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/modals.webp"
			btnColor="indigo"
			header="Signin Modals"
			link="/modals/signin"
		/>
	</div>
</div>
