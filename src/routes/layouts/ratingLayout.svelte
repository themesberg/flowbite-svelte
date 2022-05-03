<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import Responsive from '../utils/Responsive.svelte';
</script>

<Responsive />
<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />

		<p>
			<a href="/ratings/rating">Rating</a>
		</p>

		<p>
			<a href="/ratings/advanced-rating">Advanced Rating</a>
		</p>

		<p>
			<a href="/ratings/score-rating">Score Rating</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/rating/" target="_blank">Flowbite Rating</a>
		</p>
	</div>
</div>
