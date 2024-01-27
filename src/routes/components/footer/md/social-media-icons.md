<script>
	import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon } from 'svelte-5-ui-lib';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
</script>

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