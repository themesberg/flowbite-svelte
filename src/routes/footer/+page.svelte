<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import H1 from '../components/H1.svelte'
	import H2 from '../components/H2.svelte'
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Footer</H1>

<H2>Default footer</H2>

<CodeWrapper>
	<Footer footerclass="shadow-none" footerType="logo">
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterBrand href="/" name="Svelt 5 UI Lib" />
			<FooterUl
				ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
			>
				<FooterLi href="https://github.com/shinokada/svelte-5-ui-lib">Repo</FooterLi>
				<FooterLi href="">About</FooterLi>
			</FooterUl>
		</div>
	</Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/footer1.md']} />
