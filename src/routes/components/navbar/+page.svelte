<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';

	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});
</script>

<H1>Navbar</H1>

<H2>Default Nav</H2>

<CodeWrapper>
	<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
		{#snippet brand()}
			<NavBrand siteName="Svelte 5" {closeNav}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>
		{/snippet}

		<NavUl>
			<NavLi href="/" {closeNav}>Home</NavLi>
			<NavLi href="/components/navbar" {closeNav}>Navbar</NavLi>
			<NavLi href="/components/footer" {closeNav}>Footer</NavLi>
		</NavUl>
	</Navbar>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-nav.md']} />
