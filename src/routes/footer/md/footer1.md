<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer footerClass="shadow-none" footerType="logo">
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
