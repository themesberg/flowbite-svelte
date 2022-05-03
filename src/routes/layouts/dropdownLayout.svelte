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
			<a href="/dropdowns/default">Default dropdown</a>
		</p>

		<p>
			<a href="/dropdowns/image">Image dropdown</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/dropdowns/" target="_blank">Flowbite Dropdown</a>
		</p>
	</div>
</div>
