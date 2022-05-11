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
				<a href="/timelines/default">Default timeline</a>
			</p>

			<p>
				<a href="/timelines/vertical/">Vetical timeline</a>
			</p>

			<p>
				<a href="/timelines/horizontal">Horizontal timeline</a>
			</p>

			<p>
				<a href="/timelines/activity">Activity log</a>
			</p>

			<p>
				<a href="/timelines/group">Grouped timeline</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/timeline/" target="_blank">Flowbite timeline</a>
			</p>
		</div>
	</div>
</div>
