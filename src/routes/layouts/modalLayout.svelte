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
			<a href="/modals/small">Small Modal</a>
		</p>

		<p>
			<a href="/modals/medium">Medium Modal</a>
		</p>

		<p>
			<a href="/modals/large">Large Modal</a>
		</p>

		<p>
			<a href="/modals/extra-large">Extra Large Modal</a>
		</p>

		<p>
			<a href="/modals/signin">Signin Modal</a>
		</p>

		<p>
			<a href="/modals/all-modals">All Modals</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/modal/" target="_blank">Flowbite Modal</a>
		</p>
	</div>
</div>
