<script lang="ts">
  import Footer from '../(no-sidebar)/Footer.svelte';
  import Navbar from '../(sidebar)/Navbar.svelte';
  import type { Snippet } from 'svelte';
  // import '../../app.css';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<header class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
  <Navbar />
</header>
<div class="mx-auto max-w-screen-2xl pt-[70px]">
  {@render children()}
  <Footer />
</div>
