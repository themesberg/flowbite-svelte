<script lang="ts">
  import { page } from "$app/state";
  import Footer from "$lib/footer/Footer.svelte";
  import FooterBrand from "$lib/footer/FooterBrand.svelte";
  import FooterCopyright from "$lib/footer/FooterCopyright.svelte";
  import { FooterLink, FooterLinkGroup } from "$lib";
  let logo = "/images/flowbite-svelte-icon-logo.svg";

  let isHomePage: boolean = $state(false);

  $effect(() => {
    isHomePage = page.route.id === "/";
  });

  const footer_links = {
    Resources: {
      GitHub: "https://github.com/themesberg/flowbite-svelte",
      Flowbite: "https://flowbite.com/",
      "Tailwind CSS": "https://tailwindcss.com/",
      "Figma Design": "https://flowbite.com/figma/"
    },
    "Help and Support": {
      "Discord Community": "https://discord.gg/4eeurUVvTy",
      "GitHub Discussions": "https://github.com/themesberg/flowbite-svelte/discussions"
    },
    Legal: {
      License: "https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE",
      "Brand usage": "https://flowbite.com/brand/"
    }
  };
</script>

<Footer class="bg-white dark:bg-gray-900">
  <div class="mx-auto flex max-w-screen-xl flex-col py-6 lg:py-12">
    <div class="flex flex-col items-start gap-8 md:justify-between lg:flex-row {isHomePage ? 'px-4 lg:px-4' : ''}">
      <div class="w-full max-w-sm">
        <FooterBrand href="https://flowbite-svelte.com" src={logo} alt="Flowbite Svelte Logo" name="Flowbite Svelte" class="text-gray-900 dark:text-white" />
        <p class="mt-4 mb-3 max-w-sm text-gray-600 dark:text-gray-400">
          Flowbite Svelte is an open-source UI component library built with Svelte components and Tailwind CSS that can help you build websites faster.
        </p>
        <p class="mb-3 max-w-sm text-gray-600 dark:text-gray-400">
          Code licensed
          <a href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE" class="text-primary-600 hover:underline">MIT</a>
          , docs
          <a href="https://creativecommons.org/licenses/by/3.0/" class="text-primary-600 hover:underline">CC BY 3.0</a>
          .
        </p>
      </div>
      <div class="flex flex-col items-start md:flex-row {isHomePage ? 'gap-4 md:gap-16 lg:justify-end' : 'gap-8'}  w-full">
        {#each Object.entries(footer_links) as [column, links]}
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{column}</h2>
            <FooterLinkGroup>
              {#each Object.entries(links) as [name, href]}
                <FooterLink class="mb-4" {href}>{name}</FooterLink>
              {/each}
            </FooterLinkGroup>
          </div>
        {/each}
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="flex items-center justify-center px-4 text-center">
      <FooterCopyright href="/" by="Flowbite™" copyrightMessage="is a registered trademark. All Rights Reserved." />
    </div>
  </div>
</Footer>
