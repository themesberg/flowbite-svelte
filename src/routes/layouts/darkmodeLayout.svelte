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
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/customize/dark-mode/" target="_blank">Flowbite Dark mode</a>
			</p>
		</div>
	</div>
</div>
