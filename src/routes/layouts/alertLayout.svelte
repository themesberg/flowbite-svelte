<script>
	import Htwo from '../utils/Htwo.svelte';
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from '@codewithshin/svelte-sidebar';
	import 'prism-themes/themes/prism-holi-theme.css';

	let width;
	$: if (width > 1024) {
		sidebarOpen.update((n) => (n = true));
		sidebarIsInert.update((n) => (n = false));
		sidebarStayOpen.update((n) => (n = true));
	} else {
		sidebarOpen.update((n) => (n = false));
		sidebarIsInert.update((n) => (n = true));
		sidebarStayOpen.update((n) => (n = false)); // when open a sidebar clicking outside closes it
	}
</script>

<svelte:window bind:innerWidth={width} />

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
