<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div class="m-4">
	<Nav />

	<div class="p-4 pb-32 border-b border-gray-700">
		{@render children()}
	</div>

	<Footer />
</div>
