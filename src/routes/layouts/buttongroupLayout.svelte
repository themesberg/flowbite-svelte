<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />
		<div class="related-components">
			<p>
				<a href="/button-groups/default" class="link">Default Button Group</a>
			</p>

			<p>
				<a href="/button-groups/outline" class="link">Outline Button Group</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/button-group/" target="_blank" class="link">Flowbite Button Group</a>
			</p>
		</div>
	</div>
</div>

<style>
	.link {
		color: #256cfa;
	}
	.link:hover {
		color: #6599ff;
		text-decoration: underline;
	}
</style>
