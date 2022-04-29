<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />

		<p>
			<a href="/tabs/default-tabs">Default Tabs</a>
		</p>

		<p>
			<a href="/tabs/underline-tabs">Underline Tabs</a>
		</p>

		<p>
			<a href="/tabs/icon-tabs">Icon Tabs</a>
		</p>

		<p>
			<a href="/tabs/full-width-tabs">Full width Tabs</a>
		</p>

		<p>
			<a href="/tabs/interactive-tabs">Interactive Tabs</a>
		</p>

		<p>
			<a href="/tabs/interactive-tabs-2">Interactive Tabs 2</a>
		</p>

		<p>
			<a href="/tabs/multiple-interactive-tabs">Multiple Interactive Tabs</a>
		</p>

		<p>
			<a href="/tabs/pilltabs">Pill Tabs</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/tabs/" target="_blank">Flowbite Tabs</a>
		</p>
	</div>
</div>
