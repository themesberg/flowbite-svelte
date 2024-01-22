<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div>
	<Nav />

	<div class="mx-auto max-w-5xl border-b border-gray-700 p-4 pb-32">
		{@render children()}
	</div>

	<Footer />
</div>
