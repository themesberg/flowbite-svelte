<script lang="ts">
	import type { LinksType, SiteType, SocialMediaType } from '../types';
	export let site: SiteType;
	export let links: LinksType[];
	export let socialMedia: SocialMediaType[];
	export let footerClass = 'bg-gray-800';
	export let linksClass = 'grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4';
	export let parentClass = 'mb-6 text-sm font-semibold text-gray-400 uppercase';
	export let ulClass = 'text-gray-300';
	export let linkClass = 'hover:underline';
	export let copyrightDivClass = 'py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between';
	export let copyrightClass = 'text-sm text-gray-300 sm:text-center';
	export let socialMediaDivClass = 'flex mt-4 space-x-6 sm:justify-center md:mt-0';
	export let socialMediaLinkClass = 'text-gray-400 hover:text-white';
	export let iconClass = 'h-5 w-5 mr-2';
	export let copyrightYear = '© 2022';
	export let allRightsReserved = 'All Rights Reserved.';
</script>

<footer class={footerClass}>
	<div class={linksClass}>
		{#each links as { parent, children }}
			<div>
				<h2 class={parentClass}>
					{parent}
				</h2>
				<ul class={ulClass}>
					{#each children as { name, link }}
						<li class="mb-4">
							<a href={link} class={linkClass}>{name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div class={copyrightDivClass}>
		<span class={copyrightClass}
			>{copyrightYear} <a href={site.link}>{site.name}</a>. {allRightsReserved}
		</span>
		<div class={socialMediaDivClass}>
			{#each socialMedia as { link, icon }}
				<a href={link} class={socialMediaLinkClass}>
					<svelte:component this={icon} className={iconClass} />
				</a>
			{/each}
		</div>
	</div>
</footer>
