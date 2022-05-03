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
			<a href="/accordions/default">Default Accordion</a>
		</p>

		<p>
			<a href="/accordions/icon-accordion">Icon Accordion</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/accordion/" target="_blank">Flowbite Accordion</a>
		</p>
	</div>
</div>
