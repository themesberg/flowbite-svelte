<script lang="ts">
  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon } from '$lib';
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
        <FooterUl>
          <FooterLi liClass="mb-4" href="/">Flowbite</FooterLi>
          <FooterLi liClass="mb-4" href="/">Tailwind CSS</FooterLi>
        </FooterUl>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
        <FooterUl>
          <FooterLi liClass="mb-4" href="/">GitHub</FooterLi>
          <FooterLi liClass="mb-4" href="/">Discord</FooterLi>
        </FooterUl>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
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
    </div>
  </div>
</Footer>