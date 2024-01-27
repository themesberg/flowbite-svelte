<script>
	import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon, Skeleton, ImagePlaceholder, TextPlaceholder } from '$lib';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Footer</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

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

<HighlightCompo code={modules['./md/default-footer.md']} />

<H2>Footer with logo</H2>
<CodeWrapper>
	<Footer footerType="logo">
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
			<FooterUl ulclass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
				<FooterLi href="/">About</FooterLi>
				<FooterLi href="/">Privacy Policy</FooterLi>
				<FooterLi href="/">Licensing</FooterLi>
				<FooterLi href="/">Contact</FooterLi>
			</FooterUl>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<FooterCopyright href="/" by="Flowbite™" />
	</Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/footer-with-logo.md']} />

<H2>Social media icons</H2>
<CodeWrapper>
	<Footer footerType="socialmedia">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
			</div>
			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
					<FooterUl>
						<FooterLi liclass="mb-4" href="/">Flowbite</FooterLi>
						<FooterLi liclass="mb-4" href="/">Tailwind CSS</FooterLi>
					</FooterUl>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
					<FooterUl>
						<FooterLi liclass="mb-4" href="/">GitHub</FooterLi>
						<FooterLi liclass="mb-4" href="/">Discord</FooterLi>
					</FooterUl>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
					<FooterUl>
						<FooterLi liclass="mb-4" href="/">Privacy Policy</FooterLi>
						<FooterLi liclass="mb-4" href="/">Terms & Conditions</FooterLi>
					</FooterUl>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterCopyright href="/" by="Flowbite™" />
			<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
				<FooterIcon href="/">
					<FacebookSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
				</FooterIcon>
				<FooterIcon href="/">
					<DiscordSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
				</FooterIcon>
				<FooterIcon href="/">
					<TwitterSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
				</FooterIcon>
				<FooterIcon href="/">
					<GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
				</FooterIcon>
			</div>
		</div>
	</Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/social-media-icons.md']} />

<H2>Sitemap links</H2>
<CodeWrapper>
<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
      <FooterUl ulclass="text-gray-300">
        <FooterLi liclass="mb-4" href="/">About</FooterLi>
        <FooterLi liclass="mb-4" href="/">Careers</FooterLi>
        <FooterLi liclass="mb-4" href="/">Brand Center</FooterLi>
        <FooterLi liclass="mb-4" href="/">Blog</FooterLi>
      </FooterUl>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterUl ulclass="text-gray-300">
        <FooterLi liclass="mb-4" href="/">Discord Server</FooterLi>
        <FooterLi liclass="mb-4" href="/">Twitter</FooterLi>
        <FooterLi liclass="mb-4" href="/">Facebook</FooterLi>
        <FooterLi liclass="mb-4" href="/">Contact Us</FooterLi>
      </FooterUl>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
      <FooterUl ulclass="text-gray-300">
        <FooterLi liclass="mb-4" href="/">Privacy Policy</FooterLi>
        <FooterLi liclass="mb-4" href="/">Licensing</FooterLi>
        <FooterLi liclass="mb-4" href="/">Terms & Conditions</FooterLi>
      </FooterUl>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterUl ulclass="text-gray-300">
        <FooterLi liclass="mb-4" href="/">iOS</FooterLi>
        <FooterLi liclass="mb-4" href="/">Android</FooterLi>
        <FooterLi liclass="mb-4" href="/">Windows</FooterLi>
        <FooterLi liclass="mb-4" href="/">MacOS</FooterLi>
      </FooterUl>
    </div>
  </div>
  <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
    <FooterCopyright spanclass="text-sm text-gray-300 sm:text-center" href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
      <FooterIcon href="/">
        <FacebookSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
    </div>
  </div>
</Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/sitemap-links.md']} />

<H2>Sticky footer</H2>

<CodeWrapper class='h-96'>
	<div class='relative'>
	<div style="height:300px;" class="overflow-scroll pb-16">
		<Skeleton class="my-8" />
		<ImagePlaceholder class="my-8" />
		<TextPlaceholder class="my-8" />
	</div>
	<Footer footerclass="absolute bottom-0 start-0 z-20 w-full">
		<FooterCopyright href="/" by="Flowbite™"/>
		<FooterUl ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
			<FooterLi href="/">About</FooterLi>
			<FooterLi href="/">Privacy Policy</FooterLi>
			<FooterLi href="/">Licensing</FooterLi>
			<FooterLi href="/">Contact</FooterLi>
		</FooterUl>
	</Footer>
</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sticky-footer.md']} />
