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
				<a href="/tabs/default-tabs" class="link">Default Tabs</a>
			</p>

			<p>
				<a href="/tabs/underline-tabs" class="link">Underline Tabs</a>
			</p>

			<p>
				<a href="/tabs/icon-tabs" class="link">Icon Tabs</a>
			</p>

			<p>
				<a href="/tabs/full-width-tabs" class="link">Full width Tabs</a>
			</p>

			<p>
				<a href="/tabs/interactive-tabs" class="link">Interactive Tabs</a>
			</p>

			<p>
				<a href="/tabs/interactive-tabs-2" class="link">Interactive Tabs 2</a>
			</p>

			<p>
				<a href="/tabs/multiple-interactive-tabs" class="link">Multiple Interactive Tabs</a>
			</p>

			<p>
				<a href="/tabs/pilltabs" class="link">Pill Tabs</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/tabs/" target="_blank" class="link">Flowbite Tabs</a>
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
