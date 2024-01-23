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
	<main class="w-full min-w-0 flex-auto px-4 pb-20 lg:static lg:max-h-full lg:overflow-visible">
		{@render children()}
	</main>
</div>
<Footer />
