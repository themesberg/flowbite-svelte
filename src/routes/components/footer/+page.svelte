<script lang="ts">
  import {
    Footer,
    FooterBrand,
    FooterLi,
    FooterUl,
    FooterCopyright,
    FooterIcon,
    Skeleton,
    ImagePlaceholder,
    TextPlaceholder
  } from '$lib';
  import {
    FacebookSolid,
    GithubSolid,
    DiscordSolid,
    TwitterSolid
  } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Footer</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default footer</H2>
<CodeWrapper>
  <Footer class="shadow-none" footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Flowbite" year={2022} />
      <FooterUl
        class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
      >
        <FooterLi href="/">About</FooterLi>
        <FooterLi href="/">Privacy Policy</FooterLi>
        <FooterLi href="/">Licensing</FooterLi>
        <FooterLi href="/">Contact</FooterLi>
      </FooterUl>
    </div>
  </Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-footer.md'] as string} />

<H2>Footer with logo</H2>
<CodeWrapper>
  <Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand
        href="https://flowbite.com"
        src="/images/flowbite-svelte-icon-logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
      />
      <FooterUl
        class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        <FooterLi href="/">About</FooterLi>
        <FooterLi href="/">Privacy Policy</FooterLi>
        <FooterLi href="/">Licensing</FooterLi>
        <FooterLi href="/">Contact</FooterLi>
      </FooterUl>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <FooterCopyright href="/" by="Flowbite™" />
  </Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/footer-with-logo.md'] as string} />

<H2>Social media icons</H2>
<CodeWrapper class="p-2">
  <Footer footerType="socialmedia">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <FooterBrand
          href="https://flowbite.com"
          src="/images/flowbite-svelte-icon-logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />
      </div>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Resources
          </h2>
          <FooterUl>
            <FooterLi liClass="mb-4" href="/">Flowbite</FooterLi>
            <FooterLi liClass="mb-4" href="/">Tailwind CSS</FooterLi>
          </FooterUl>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Follow us
          </h2>
          <FooterUl>
            <FooterLi liClass="mb-4" href="/">GitHub</FooterLi>
            <FooterLi liClass="mb-4" href="/">Discord</FooterLi>
          </FooterUl>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Legal
          </h2>
          <FooterUl>
            <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>
            <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>
          </FooterUl>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Flowbite™" />
      <div
        class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse"
      >
        <FooterIcon href="/">
          <FacebookSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/social-media-icons.md'] as string} />

<H2>Sitemap links</H2>
<CodeWrapper>
  <Footer footerType="sitemap">
    <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Company
        </h2>
        <FooterUl class="text-gray-300">
          <FooterLi liClass="mb-4" href="/">About</FooterLi>
          <FooterLi liClass="mb-4" href="/">Careers</FooterLi>
          <FooterLi liClass="mb-4" href="/">Brand Center</FooterLi>
          <FooterLi liClass="mb-4" href="/">Blog</FooterLi>
        </FooterUl>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Download
        </h2>
        <FooterUl class="text-gray-300">
          <FooterLi liClass="mb-4" href="/">Discord Server</FooterLi>
          <FooterLi liClass="mb-4" href="/">Twitter</FooterLi>
          <FooterLi liClass="mb-4" href="/">Facebook</FooterLi>
          <FooterLi liClass="mb-4" href="/">Contact Us</FooterLi>
        </FooterUl>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Legal
        </h2>
        <FooterUl class="text-gray-300">
          <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>
          <FooterLi liClass="mb-4" href="/">Licensing</FooterLi>
          <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>
        </FooterUl>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Download
        </h2>
        <FooterUl class="text-gray-300">
          <FooterLi liClass="mb-4" href="/">iOS</FooterLi>
          <FooterLi liClass="mb-4" href="/">Android</FooterLi>
          <FooterLi liClass="mb-4" href="/">Windows</FooterLi>
          <FooterLi liClass="mb-4" href="/">MacOS</FooterLi>
        </FooterUl>
      </div>
    </div>
    <div
      class="bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between"
    >
      <FooterCopyright
        spanClass="text-sm text-gray-300 sm:text-center"
        href="/"
        by="Flowbite™"
      />
      <div
        class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse"
      >
        <FooterIcon href="/">
          <FacebookSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</CodeWrapper>

<HighlightCompo code={modules['./md/sitemap-links.md'] as string} />

<H2>Sticky footer</H2>

<CodeWrapper class="p-0">
  <div class="relative">
    <div style="height:300px;" class="overflow-scroll pb-16 p-6">
      <Skeleton class="my-8" />
      <ImagePlaceholder class="my-8" />
      <TextPlaceholder class="my-8" />
    </div>
    <Footer footerType="sticky" class="absolute">
      <FooterCopyright href="/" by="Flowbite™" />
      <FooterUl
        class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
      >
        <FooterLi href="/">About</FooterLi>
        <FooterLi href="/">Privacy Policy</FooterLi>
        <FooterLi href="/">Licensing</FooterLi>
        <FooterLi href="/">Contact</FooterLi>
      </FooterUl>
    </Footer>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/sticky-footer.md'] as string} />
