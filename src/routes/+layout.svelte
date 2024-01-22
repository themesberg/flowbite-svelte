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
	<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible px-4">
		{@render children()}
	</main>
</div>
<Footer />
