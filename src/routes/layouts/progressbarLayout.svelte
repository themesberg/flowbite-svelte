<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/progress/" target="_blank">Flowbite Progress bar</a>
		</p>
	</div>
</div>
