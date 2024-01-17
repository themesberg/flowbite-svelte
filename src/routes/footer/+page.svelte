<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import footer1 from './md/footer1.md?raw';
</script>

<h1>Footer</h1>

<CodeWrapper>
<Footer class="shadow-none" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" name="Svelt 5 UI Lib" />
		<FooterUl
			ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLi href="https://github.com/shinokada/svelte-5-ui-lib">Repo</FooterLi>
			<FooterLi href="">About</FooterLi>
		</FooterUl>
	</div>
</Footer>
</CodeWrapper>

<HighlightCompo code={footer1} />
