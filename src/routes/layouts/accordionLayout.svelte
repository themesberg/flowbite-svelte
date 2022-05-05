<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from '@codewithshin/svelte-sidebar';
</script>

<Responsive />
<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />

		<p>
			<a href="/accordions/default">Default Accordion</a>
		</p>

		<p>
			<a href="/accordions/icon-accordion">Icon Accordion</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/accordion/" target="_blank">Flowbite Accordion</a>
		</p>
	</div>
</div>
