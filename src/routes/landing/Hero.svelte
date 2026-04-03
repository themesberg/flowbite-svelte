<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import CopyCliboardInput from "../utils/CopyCliboardInput.svelte";
  import ArrowRight from "../utils/icons/ArrowRight.svelte";
  import Section from "./utils/Section.svelte";
</script>

<Section>
  <div class="flex flex-col gap-20">
    <div class="flex items-center gap-8">
      <div class="flex flex-col justify-start gap-10">
        <div class="flex flex-col gap-4 text-left lg:gap-6">
          <a href="https://flowbite-svelte-v2.vercel.app/" target="_blank" rel="noopener noreferrer" class="inline-flex w-fit items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-400 dark:hover:bg-primary-900/50">
            <span class="rounded-full bg-primary-600 px-2 py-0.5 text-xs font-semibold text-white">New</span>
            Flowbite Svelte v2 is coming soon!
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </a>
          <h1 class="max-w-2xl text-4xl leading-none font-extrabold text-gray-900 lg:text-6xl dark:text-white">
            <span class="block1 xl:inline">Speed up your web development with</span>
            <span class="block1 text-primary-700 dark:text-primary-700 xl:inline">Flowbite Svelte</span>
          </h1>
          <p class="text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Flowbite Svelte is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.
          </p>
          <div class="mt-4 justify-center sm:flex sm:justify-start md:mt-5">
            <div class="mx-0 flex max-w-2xl flex-row items-center gap-4 sm:gap-6">
              <CopyCliboardInput />
              <Button size="lg" class="hover:bg-primary-800 max-w-sm space-x-2 whitespace-nowrap md:w-fit rtl:space-x-reverse" href="/docs/pages/quickstart" color="primary">
                <span>Get started</span>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden p-0 xl:block">
        <div class="relative block dark:hidden">
          <img class="-me-7 max-w-xl" src="/images/gallery.png" alt="Header" />
        </div>
        <div class="relative hidden dark:block">
          <img class="-me-7 max-w-xl" src="/images/gallery-dark.png" alt="Header" />
        </div>
      </div>
    </div>
  </div>
</Section>
