<script>
  import Footer from '$lib/footer/Footer.svelte';
  import FooterBrand from '$lib/footer/FooterBrand.svelte';
  import FooterCopyright from '$lib/footer/FooterCopyright.svelte';
  import FooterIcon from '$lib/footer/FooterIcon.svelte';
  import FooterLink from '$lib/footer/FooterLink.svelte';
  import FooterLinkGroup from '$lib/footer/FooterLinkGroup.svelte';
  let logo = '/images/flowbite-svelte-icon-logo.svg';
</script>

<Footer footerType="custom" customClass="bg-white dark:bg-gray-900 p-4">
  <div class="flex flex-col py-6">
    <div class="flex flex-col lg:flex-row items-start md:justify-between gap-8">
      <div class="mb-6 md:mb-0 w-full max-w-sm">
        <FooterBrand
          href="https://flowbite-svelte.com"
          src={logo}
          alt="Flowbite Svelte Logo"
          name="Flowbite Svelte"
          class="text-gray-900 dark:text-white" />
        <p class="max-w-sm mb-3 text-gray-600 dark:text-gray-400 mt-4">
          Flowbite Svelte is an open-source UI component library built with Svelte components and Tailwind
          CSS that can help you build websites faster.
        </p>
        <p class="max-w-sm mb-3 text-gray-600 dark:text-gray-400">
          Code licensed <a
            href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
            class="text-primary-600 hover:underline">MIT</a
          >, docs
          <a href="https://creativecommons.org/licenses/by/3.0/" class="text-primary-600 hover:underline"
            >CC BY 3.0</a
          >.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-8 w-full justify-between items-start">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte"
              >GitHub</FooterLink>
            <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
            <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
            <FooterLink liClass="mb-4" href="https://flowbite.com/figma/">Figma Design</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Help and Support
          </h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord Community</FooterLink>
            <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte/discussions"
              >GitHub Discussions</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
              >License</FooterLink>
            <FooterLink liClass="mb-4" href="https://flowbite.com/brand/">Brand usage</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-center">
      <FooterCopyright
        href="/"
        by="Flowbite™"
        copyrightMessage="is a registered trademark. All Rights Reserved." />
    </div>
  </div>
</Footer>
