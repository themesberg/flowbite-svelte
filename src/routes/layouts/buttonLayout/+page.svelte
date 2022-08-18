<script>
	import Htwo from '../../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />

<div class="max-w-3xl mx-auto mt-8">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="link"
					>Flowbite Buttons</a
				>
			</p>
		</div>
	</div>
</div>

<style>
	.link {
		color: #f83c00;
	}
	.link:hover {
		color: #fc7146;
		text-decoration: underline;
	}
</style>
