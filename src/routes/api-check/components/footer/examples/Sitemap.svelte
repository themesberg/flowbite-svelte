<script>
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
  import Dribble from "../../../../utils/icons/Dribble.svelte";
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">About</FooterLink>
        <FooterLink class="mb-4" href="/">Careers</FooterLink>
        <FooterLink class="mb-4" href="/">Brand Center</FooterLink>
        <FooterLink class="mb-4" href="/">Blog</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">Discord Server</FooterLink>
        <FooterLink class="mb-4" href="/">Twitter</FooterLink>
        <FooterLink class="mb-4" href="/">Facebook</FooterLink>
        <FooterLink class="mb-4" href="/">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
        <FooterLink class="mb-4" href="/">Licensing</FooterLink>
        <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">iOS</FooterLink>
        <FooterLink class="mb-4" href="/">Android</FooterLink>
        <FooterLink class="mb-4" href="/">Windows</FooterLink>
        <FooterLink class="mb-4" href="/">MacOS</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700">
    <FooterCopyright class="text-sm text-gray-900 dark:text-gray-200 sm:text-center" href="/" by="Flowbite™" />
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