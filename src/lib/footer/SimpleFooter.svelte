<script lang="ts">
	import type { LinksType, SiteType } from '../types';
	export let site: SiteType;
	export let links: LinksType[];
	export let footerClass =
		'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800';
	export let siteNameClass = 'text-sm text-gray-500 sm:text-center dark:text-gray-400';
	export let ulClass = 'flex flex-wrap items-center mt-3 sm:mt-0';
	export let aClass = 'mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400';
	export let siteNameLinkClass = 'hover:underline';
	export let copyrightYear = '© 2022';
	export let allRightsReserved = 'All Rights Reserved.';
</script>

<footer class={footerClass}>
	<span class={siteNameClass}
		>{copyrightYear}
		<a href={site.link} class={siteNameLinkClass} target="_blank">{site.name}</a>. {allRightsReserved}
	</span>
	<ul class={ulClass}>
		{#each links as { name, link, rel }}
			<li>
				<a href={link} {rel} class={aClass}>{name}</a>
			</li>
		{/each}
	</ul>
</footer>
