<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
	import Sidemenu from './components/Sidemenu.svelte';
</script>

<Nav />
<div class="lg:flex">
	<Sidemenu />
	<main class="min-w-0 max-w-5xl mx-auto flex-auto px-8 pb-20 lg:static lg:max-h-full lg:overflow-visible">
		{@render children()}
	</main>
</div>
<Footer />
