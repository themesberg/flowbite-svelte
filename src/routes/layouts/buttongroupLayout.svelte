<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from '@codewithshin/svelte-sidebar';
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
			<a href="/button-groups/default">Default Button Group</a>
		</p>

		<p>
			<a href="/button-groups/outline">Outline Button Group</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/button-group/" target="_blank">Flowbite Button Group</a>
		</p>
	</div>
</div>
