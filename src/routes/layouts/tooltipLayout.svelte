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
			<a href="/tooltips/default">- Default Tooltip</a>
		</p>

		<p>
			<a href="/tooltips/light">- Light Tooltip</a>
		</p>

		<Htwo label="References" />

		<p>
			- Read more about <a href="/buttons">Buttons</a>
		</p>
		<p>
			<a href="https://flowbite.com/docs/components/tooltips/" target="_blank">- Flowbite Tooltip</a>
		</p>
	</div>
</div>
