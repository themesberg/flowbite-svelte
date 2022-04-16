<script lang="ts">
	import type { SiteType, SocialMediaType, SocialMediaLinkType } from '../types';
	export let site: SiteType;
	export let links: SocialMediaLinkType[];
	export let socialMedia: SocialMediaType[];
	export let footerClass: string = 'bg-white dark:bg-gray-800';
	export let linksClass: string = 'grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4';
	export let parentClass: string = 'mb-6 text-sm font-semibold dark:text-gray-400 uppercase';
	export let ulClass: string = 'text-gray-900 dark:text-gray-300';
	export let liClass: string = 'mb-4';
	export let linkClass: string = 'hover:underline';
	export let copyrightDivClass: string =
		'py-6 px-4 text-gray-900 dark:bg-gray-700 md:flex md:items-center md:justify-between';
	export let copyrightClass: string = 'text-sm text-gray-900 dark:text-gray-300 sm:text-center';
	export let socialMediaDivClass: string = 'flex mt-4 space-x-6 sm:justify-center md:mt-0';
	export let socialMediaLinkClass: string =
		'text-gray-900 dark:text-gray-400 hover:text-gray-300 dark:hover:text-white';
	export let iconClass: string = 'h-5 w-5 mr-2';
	export let copyrightYear: string = '© 2022';
	export let allRightsReserved: string = 'All Rights Reserved.';
</script>

<footer class="{footerClass} {$$props.class}">
	<div class={linksClass}>
		{#each links as { parent, children }}
			<div>
				<h2 class={parentClass}>
					{parent}
				</h2>
				<ul class={ulClass}>
					{#each children as { name, href }}
						<li class={liClass}>
							<a {href} class={linkClass}>{name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div class={copyrightDivClass}>
		<span class={copyrightClass}
			>{copyrightYear} <a href={site.href}>{site.name}</a>. {allRightsReserved}
		</span>
		<div class={socialMediaDivClass}>
			{#each socialMedia as { href, icon }}
				<a {href} class={socialMediaLinkClass}>
					<svelte:component this={icon} className={iconClass} />
				</a>
			{/each}
		</div>
	</div>
</footer>
