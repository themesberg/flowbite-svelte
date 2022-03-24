<script lang="ts">
	import type { LinkType, SiteType } from '../types';
	export let site: SiteType;

	export let links: LinkType[];
	export let footerClass = 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800';
	export let divClass = 'sm:flex sm:items-center sm:justify-between';
	export let siteNameClass = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
	export let ulClass =
		'flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400';
	export let aClass = 'mr-4 hover:underline md:mr-6';
	export let siteNameLinkClass = 'flex items-center mb-4 sm:mb-0';
	export let imgClass = 'mr-3 h-8';
	export let hrClass = 'my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8';
	export let copyRightSpanClass = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
	export let copyRightLinkClass = 'hover:underline';
	export let copyrightYear = '© 2022';
	export let allRightsReserved = 'All Rights Reserved.';
</script>

<footer class="{footerClass} {$$props.class}">
	<div class={divClass}>
		<a href={site.href} class={siteNameLinkClass}>
			<img src={site.img} class={imgClass} alt={site.name} />
			<span class={siteNameClass}>{site.name}</span>
		</a>
		<ul class={ulClass}>
			{#each links as { name, href, rel }}
				<li>
					<a {href} {rel} class={aClass}>{name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<hr class={hrClass} />
	<span class={copyRightSpanClass}
		>{copyrightYear}
		<a href={site.href} class={copyRightLinkClass}>{site.name}</a>. {allRightsReserved}
	</span>
</footer>
