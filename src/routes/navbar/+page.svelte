<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
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

<h1>Navbar</h1>

<CodeWrapper>
	<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="xl">
		{#snippet brand()}
			<NavBrand siteName="Svelte 5" {closeNav}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>
		{/snippet}

		<NavUl>
			<NavLi href="/" {closeNav}>Home</NavLi>
			<NavLi href="/navbar" {closeNav}>Navbar</NavLi>
			<NavLi href="/footer" {closeNav}>Footer</NavLi>
		</NavUl>
	</Navbar>
</CodeWrapper>

<HighlightCompo code={modules['./md/navbar1.md']} />
