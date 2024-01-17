<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div>
	<Nav />

	<div class="max-w-5xl mx-auto p-4 pb-32 border-b border-gray-700">
		{@render children()}
	</div>

	<Footer />
</div>
