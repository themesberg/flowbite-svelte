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
			<a href="/alerts/default-alert">Default Alert</a>
		</p>

		<p>
			<a href="/alerts/border-alert">Border Alert</a>
		</p>

		<p>
			<a href="/alerts/information-alert">Information Alert</a>
		</p>

		<p>
			<a href="/alerts/animation">Animation</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/alerts/" target="_blank">Flowbite Alerts</a>
		</p>
	</div>
</div>
