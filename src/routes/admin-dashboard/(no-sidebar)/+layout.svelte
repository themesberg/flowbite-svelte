<script>
	import Footer from '../(no-sidebar)/Footer.svelte';
	import Navbar from '../(sidebar)/Navbar.svelte';
</script>

<header
	class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar />
</header>
<div class="w-full bg-gray-50">
	<slot />
	<Footer />
</div>
