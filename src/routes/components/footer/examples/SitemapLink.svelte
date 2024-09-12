<script lang="ts">
  import { Footer, FooterLi, FooterUl, FooterCopyright, FooterIcon } from '$lib';
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>
      <FooterUl class="text-gray-300">
        <FooterLi liClass="mb-4" href="/">About</FooterLi>
        <FooterLi liClass="mb-4" href="/">Careers</FooterLi>
        <FooterLi liClass="mb-4" href="/">Brand Center</FooterLi>
        <FooterLi liClass="mb-4" href="/">Blog</FooterLi>
      </FooterUl>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterUl class="text-gray-300">
        <FooterLi liClass="mb-4" href="/">Discord Server</FooterLi>
        <FooterLi liClass="mb-4" href="/">Twitter</FooterLi>
        <FooterLi liClass="mb-4" href="/">Facebook</FooterLi>
        <FooterLi liClass="mb-4" href="/">Contact Us</FooterLi>
      </FooterUl>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
      <FooterUl class="text-gray-300">
        <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>
        <FooterLi liClass="mb-4" href="/">Licensing</FooterLi>
        <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>
      </FooterUl>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterUl class="text-gray-300">
        <FooterLi liClass="mb-4" href="/">iOS</FooterLi>
        <FooterLi liClass="mb-4" href="/">Android</FooterLi>
        <FooterLi liClass="mb-4" href="/">Windows</FooterLi>
        <FooterLi liClass="mb-4" href="/">MacOS</FooterLi>
      </FooterUl>
    </div>
  </div>
  <div class="bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between">
    <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Flowbite™" />
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
    </div>
  </div>
</Footer>