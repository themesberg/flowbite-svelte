<script lang="ts">
	import {
		Navbar,
		NavLi,
		NavBrand,
		NavUl,
		uiHelpers,
		ImagePlaceholder,
		Skeleton,
		TextPlaceholder
	} from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';

	const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
	let nav1 = uiHelpers();
	let navStatus1 = $state(false);
	let toggleNav1 = nav1.toggle;
	let closeNav1 = nav1.close;

	let nav2 = uiHelpers();
	let navStatus2 = $state(false);
	let toggleNav2 = nav2.toggle;
	let closeNav2 = nav2.close;

	let navLg = uiHelpers();
	let navStatusLg = $state(false);
	let toggleNavLg = navLg.toggle;
	let closeNavLg = navLg.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus1 = nav1.isOpen;
		navStatus2 = nav2.isOpen;
		navStatusLg = navLg.isOpen;
	});
</script>

<H1>Navbar</H1>

<H2>Default Nav</H2>

<CodeWrapper>
	<Navbar toggleNav={toggleNav1} closeNav={closeNav1} navStatus={navStatus1} breakPoint="md">
		{#snippet brand()}
			<NavBrand siteName="Svelte 5" closeNav={closeNav1}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>
		{/snippet}

		<NavUl>
			<NavLi href="/" closeNav={closeNav1}>Home</NavLi>
			<NavLi href="/components/navbar" closeNav={closeNav1}>Navbar</NavLi>
			<NavLi href="/components/footer" closeNav={closeNav1}>Footer</NavLi>
		</NavUl>
	</Navbar>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-nav.md']} />

<H2>Breakpoint</H2>

<CodeWrapper>
	<Navbar toggleNav={toggleNavLg} closeNav={closeNavLg} navStatus={navStatusLg} breakPoint="lg">
		{#snippet brand()}
			<NavBrand siteName="Svelte 5" closeNav={closeNavLg}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>
		{/snippet}

		<NavUl>
			<NavLi href="/" closeNav={closeNavLg}>Home</NavLi>
			<NavLi href="/components/navbar" closeNav={closeNavLg}>Navbar</NavLi>
			<NavLi href="/components/footer" closeNav={closeNavLg}>Footer</NavLi>
		</NavUl>
	</Navbar>
</CodeWrapper>

<H2>Sticky navbar</H2>
<CodeWrapper class="p-2">
	<div class="relative">
		<Navbar
			toggleNav={toggleNav2}
			closeNav={closeNav2}
			navStatus={navStatus2}
			breakPoint="md"
			navclass="absolute w-full z-20 top-0 start-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
		>
			{#snippet brand()}
				<NavBrand siteName="Svelte 5" closeNav={closeNav2}>
					<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
				</NavBrand>
			{/snippet}

			<NavUl>
				<NavLi href="/" closeNav={closeNav2}>Home</NavLi>
				<NavLi href="/components/navbar" closeNav={closeNav2}>Navbar</NavLi>
				<NavLi href="/components/footer" closeNav={closeNav2}>Footer</NavLi>
			</NavUl>
		</Navbar>
		<div style="height:300px;" class="overflow-scroll px-8 py-24">
			<Skeleton divclass="mt-16 mb-8" />
			<ImagePlaceholder divclass="my-8" />
			<TextPlaceholder divclass="my-8" />
		</div>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sticky-navbar.md']} />
