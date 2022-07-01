<script lang="ts">
	import classNames from 'classnames';
	import type { LinkType, SiteType } from '../types';
	export let site: SiteType;
	export let links: LinkType[];
	export let siteNameClass: string = 'text-sm text-gray-500 sm:text-center dark:text-gray-400';
	export let ulClass: string = 'flex flex-wrap items-center mt-3 sm:mt-0';
	export let aClass: string =
		'mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400';
	export let siteNameLinkClass: string = 'hover:underline';
	export let copyrightYear: string = '© 2022';
	export let allRightsReserved: string = 'All Rights Reserved.';
</script>

<span class={siteNameClass}
	>{copyrightYear}
	<a href={site.href} class={siteNameLinkClass} target="_blank">{site.name}</a>. {allRightsReserved}
</span>
<ul class={ulClass}>
	{#each links as { name, href, rel }}
		<li>
			<a {href} {rel} class={aClass}>{name}</a>
		</li>
	{/each}
</ul>
