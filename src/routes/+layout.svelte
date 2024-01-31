<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './utils/Nav.svelte';
	import Footer from './utils/Footer.svelte';
	import Sidemenu from './utils/Sidemenu.svelte';
	import MetaTag from './utils/MetaTag.svelte';
	
</script>

<MetaTag />
<Nav />
<div class="lg:flex">
	<Sidemenu />
	<main
		class="mx-auto min-w-0 max-w-5xl flex-auto px-8 pb-20 lg:static lg:max-h-full lg:overflow-visible"
	>
		{@render children()}
	</main>
</div>
<Footer />
