<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Form Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" header="CHECKBOX" link="/forms/checkbox" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="green" header="FILE INPUT" link="/forms/file-input" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="red" header="FLOATING LABEL" link="/forms/floating-label" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="yellow" header="INPUT" link="/forms/input" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="indigo" header="RADIO" link="/forms/radio" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="gray" header="RANGE" link="/forms/range" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="purple" header="SEARCH" link="/forms/search" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="pink" header="SELECT" link="/forms/select" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="green" header="TEXTAREA" link="/forms/textarea" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/forms.webp" btnColor="blue" header="TOGGLE" link="/forms/toggle" btnLabel="Read more" />
	</div>
</div>
