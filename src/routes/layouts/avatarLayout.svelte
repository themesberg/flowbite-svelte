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
				<a href="https://flowbite.com/docs/components/avatar/" target="_blank" class="link">Flowbite Avatar</a>
			</p>
		</div>
	</div>
</div>

<style>
	.link:hover {
		color: #3277ff;
		text-decoration: underline;
	}
</style>
