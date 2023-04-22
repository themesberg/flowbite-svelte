<script>
  import { Section } from '$lib';
  import {
    ExampleDiv,
    SectionHeader,
    Facebook,
    Instagram,
    Github,
    Twitter,
    MetaTag,
    SectionBlock
  } from '../utils';
  import {
    Footer,
    FooterBrand,
    FooterLinkGroup,
    FooterLink,
    FooterCopyright,
    FooterIcon
  } from 'flowbite-svelte';
  const breadcrumb_title = 'Footer Sections';
  const title = 'Footer';
  const dir = 'marketing';
  const description =
    'Get started with footer sections coded in Tailwind CSS to use at the bottom of every page of your website and showcase your logo, sitemap links, and more.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default footer section">
  Use this example of a footer section to show the logo of your brand, a description, links, and the
  copyright notice.
</SectionBlock>

<ExampleDiv>
  <Footer footerType="socialmedia">
    <div class="mx-auto max-w-screen-xl text-center">
      <FooterBrand
        href="https://flowbite.com"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
        aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      />
      <p class="my-6 text-gray-500 dark:text-gray-400">
        Open-source library of over 400+ web components and interactive elements built for better
        web.
      </p>
      <FooterLinkGroup
        ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">About</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Premium</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Campaigns</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Blog</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
          >Affiliate Program</FooterLink
        >
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">FAQs</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Contact</FooterLink>
      </FooterLinkGroup>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2021-2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All
        Rights Reserved.</span
      >
    </div>
  </Footer>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Sitemap with logo and social media
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this footer section to show the logo of your brand, the sitemap, social media accounts,
        and the copyright notice.
      </p>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Footer footerType="socialmedia">
    <div class="grid gap-12 lg:grid-cols-6 lg:gap-24">
      <div class="col-span-2">
        <FooterBrand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
          aClass="flex mb-6"
        />
        <p class="text-gray-600 dark:text-gray-400">
          Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block
          sections, a Figma design system and other resources.
        </p>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
          Resources
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
          <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
          <FooterLink liClass="mb-4" href="https://flowbite-svelte.com/">Flowbite-Svelte</FooterLink
          >
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
          HELP & SUPPORT
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
          <FooterLink
            liClass="mb-4"
            href="https://github.com/shinokada/flowbite-svelte-blocks/issues">GitHub</FooterLink
          >
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
          Follow us
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://github.com/shinokada/flowbite-svelte-blocks"
            >Gihub</FooterLink
          >
          <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
        <FooterLinkGroup>
          <FooterLink
            liClass="mb-4"
            href="https://github.com/shinokada/flowbite-svelte-blocks/LICENSE">LICENSE</FooterLink
          >
        </FooterLinkGroup>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Flowbite™" />
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Facebook} />
        <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Instagram} />
        <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Twitter} />
        <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Github} />
      </div>
    </div>
  </Footer>
</ExampleDiv>
