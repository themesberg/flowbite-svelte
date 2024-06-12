<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from './utils/pages/NotFound.svelte';
	import Maintenance from './utils/pages/Maintenance.svelte';
	import ServerError from './utils/pages/ServerError.svelte';

	const pages = {
		400: Maintenance,
		404: NotFound,
		500: ServerError
	};

	const status = +$page.status;
	const index = Object.keys(pages)
		.map((x) => +x)
		.reduce((p, c) => (p < status ? c : p));
	const component = pages[index];

	import MetaTag from './utils/MetaTag.svelte';

	const path: string = `/errors/${index}`;
	const description: string = `${index} - Flowbite Svelte Admin Dashboard`;
	const title: string = `Flowbite Svelte Admin Dashboard - ${index} page`;
	const subtitle: string = `${index} page`;
</script>

<MetaTag {path} {description} {title} {subtitle} />


<svelte:component this={component}></svelte:component>
