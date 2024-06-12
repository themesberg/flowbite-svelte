<script lang="ts">
	import Playground from '../../../(no-sidebar)/playground/stacked/Playground.svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import Footer from '../../Footer.svelte';

	const path: string = '/playground/sidebar';
  const description: string = 'Playground Sidebar example - Flowbite Svelte Admin Dashboard';
	const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Playground Sidebar';
  const subtitle: string = 'Playground Sidebar';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<div
	id="main-content"
	class="relative mx-auto h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900"
>
	<Playground />
</div>
<Footer />