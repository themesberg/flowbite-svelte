<script>
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, ImagePlaceholder, TextPlaceholder, Skeleton } from "$lib";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
  import Dribble from "../../utils/icons/Dribble.svelte";
</script>

<h1 class="my-4 text-3xl">Footer</h1>

<h2 class="my-4 text-2xl">Default footer</h2>

<div class="example-container mb-8">
  <Footer>
    <FooterCopyright href="/" by="Flowbite™" year={2022} />
    <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </Footer>
</div>

<h2 class="my-4 text-2xl">Footer with logo</h2>

<div class="example-container mb-8">
  <Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
      <FooterLinkGroup class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <FooterCopyright href="/" by="Flowbite™" />
  </Footer>
</div>

<h2 class="my-4 text-2xl">Social media icons</h2>

<div class="example-container mb-8">
  <Footer footerType="socialmedia">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
      </div>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
            <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
            <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Flowbite™" />
      <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
        <FooterIcon href="/">
          <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <Dribble />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</div>

<h2 class="my-4 text-2xl">Sitemap links</h2>

<div class="example-container mb-8">
  <Footer footerType="sitemap">
    <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
        <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
          <FooterLink liClass="mb-4" href="/">About</FooterLink>
          <FooterLink liClass="mb-4" href="/">Careers</FooterLink>
          <FooterLink liClass="mb-4" href="/">Brand Center</FooterLink>
          <FooterLink liClass="mb-4" href="/">Blog</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
        <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
          <FooterLink liClass="mb-4" href="/">Discord Server</FooterLink>
          <FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
          <FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
          <FooterLink liClass="mb-4" href="/">Contact Us</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
        <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
          <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
          <FooterLink liClass="mb-4" href="/">Licensing</FooterLink>
          <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
        <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
          <FooterLink liClass="mb-4" href="/">iOS</FooterLink>
          <FooterLink liClass="mb-4" href="/">Android</FooterLink>
          <FooterLink liClass="mb-4" href="/">Windows</FooterLink>
          <FooterLink liClass="mb-4" href="/">MacOS</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
    <div class="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700">
      <FooterCopyright spanClass="text-sm text-gray-900 dark:text-gray-200 sm:text-center" href="/" by="Flowbite™" />
      <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">
        <FooterIcon href="/">
          <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <Dribble />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</div>

<h2 class="my-4 text-2xl">Sticky footer</h2>

<div class="example-container relative mb-8">
  <div style="height:300px;" class="overflow-scroll pb-16">
    <Skeleton class="my-8" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>
  <Footer class="absolute start-0 bottom-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800">
    <FooterCopyright href="/" by="Flowbite™" year={2022} />
    <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </Footer>
</div>
