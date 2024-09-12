<script lang="ts">
  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright } from '$lib';
</script>

<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
    <FooterUl class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLi href="/">About</FooterLi>
      <FooterLi href="/">Privacy Policy</FooterLi>
      <FooterLi href="/">Licensing</FooterLi>
      <FooterLi href="/">Contact</FooterLi>
    </FooterUl>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
  <FooterCopyright href="/" by="Flowbite™" />
</Footer>
