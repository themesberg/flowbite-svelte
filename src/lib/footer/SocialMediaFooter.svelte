<script lang="ts">
	import type { SocialMediaLinkType, SocialMediaType, SiteType } from '../types';
	export let site: SiteType;
	export let links: SocialMediaLinkType[];
	export let socialMedia: SocialMediaType[];
	export let footerClass = 'p-4 bg-white sm:p-6 dark:bg-gray-800';
	export let divClass = 'md:flex md:justify-between';
	export let divClass2 = 'mb-6 md:mb-0';
	export let siteLinkClass = 'flex items-center';
	export let siteNameSpanClass =
		'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
	export let imgClass = 'mr-3 h-8';
	export let linksDivClass = 'grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3';
	export let parentClass = 'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white';
	export let ulClass = 'text-gray-600 dark:text-gray-400';
	export let linkClass = 'hover:underline';
	export let hrClass = 'my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8';
	export let copyrightDivClass = 'sm:flex sm:items-center sm:justify-between';
	export let copyrightClass = 'text-sm text-gray-500 sm:text-center dark:text-gray-400';
	export let socialMediaDivClass = 'flex mt-4 space-x-6 sm:justify-center sm:mt-0';
	export let socialMediaLinkClass = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
	export let iconClass = 'h-5 w-5 mr-2';
	export let copyrightYear = '© 2022';
	export let allRightsReserved = 'All Rights Reserved.';
</script>

<footer class="{footerClass} {$$props.class}">
	<div class={divClass}>
		<div class={divClass2}>
			<a href={site.href} class={siteLinkClass}>
				<img src={site.img} class={imgClass} alt={site.name} />
				<span class={siteNameSpanClass}>{site.name}</span>
			</a>
		</div>
		<div class={linksDivClass}>
			{#each links as { parent, children }}
				<div>
					<h2 class={parentClass}>
						{parent}
					</h2>
					<ul class={ulClass}>
						{#each children as { name, href }}
							<li class="mb-4">
								<a {href} class={linkClass}>{name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<hr class={hrClass} />
	<div class={copyrightDivClass}>
		<span class={copyrightClass}
			>{copyrightYear}
			<a href={site.href} class="hover:underline">{site.name}</a>. {allRightsReserved}
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
