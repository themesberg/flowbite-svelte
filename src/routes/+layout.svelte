<script>
	import '../app.pcss';
	let { children } = $props();
	import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
</script>

<Nav />

<div class="container">
	{@render children()}
</div>

<Footer />
