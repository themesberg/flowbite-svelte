<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />
<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/sidebar/" target="_blank">Flowbite Sidebar</a>
		</p>
	</div>
</div>
