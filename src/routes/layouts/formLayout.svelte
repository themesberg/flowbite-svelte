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
			<a href="/forms/checkbox">Checkbox</a>
		</p>
		<p>
			<a href="/forms/file-input">File input</a>
		</p>
		<p>
			<a href="/forms/floating-label">Floating label</a>
		</p>
		<p>
			<a href="/forms/input">Input</a>
		</p>
		<p>
			<a href="/forms/radio">Radio</a>
		</p>
		<p>
			<a href="/forms/range">Range</a>
		</p>
		<p>
			<a href="/forms/search">Search</a>
		</p>
		<p>
			<a href="/forms/select">Select</a>
		</p>
		<p>
			<a href="/forms/textarea">Textarea</a>
		</p>
		<p>
			<a href="/forms/toggle">Toggle</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/forms/" target="_blank">Flowbite Forms</a>
		</p>
	</div>
</div>
