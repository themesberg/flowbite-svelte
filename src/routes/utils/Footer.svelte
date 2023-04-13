<script>
  import Footer from '$lib/footer/Footer.svelte';
  import FooterBrand from '$lib/footer/FooterBrand.svelte';
  import FooterCopyright from '$lib/footer/FooterCopyright.svelte';
  import FooterIcon from '$lib/footer/FooterIcon.svelte';
  import FooterLink from '$lib/footer/FooterLink.svelte';
  import FooterLinkGroup from '$lib/footer/FooterLinkGroup.svelte';
  let logo = '/images/flowbite-svelte-icon-logo.svg';
</script>

<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

<Footer footerType="custom" customClass="py-6 bg-white dark:bg-gray-900">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand
        href="https://flowbite-svelte.com"
        src={logo}
        alt="Flowbite-Svelte Logo"
        name="Flowbite-Svelte" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
          <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte">GitHub</FooterLink>
          <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
            >License</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-center">
    <FooterCopyright href="/" by="Flowbite™" />
  </div>
</Footer>
