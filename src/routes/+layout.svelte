<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte';
	import Sidemenu from './components/Sidemenu.svelte';
</script>

<div>
	<Nav />
<Sidemenu class="hidden lg:block"/>
	<div class="mx-auto max-w-5xl border-b lg:ml-64 border-gray-700 p-4 pb-32">
		{@render children()}
	</div>

	<Footer />
</div>
