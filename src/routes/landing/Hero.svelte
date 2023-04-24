<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import CopyCliboardInput from '../utils/CopyCliboardInput.svelte';
  import ArrowRight from '../utils/icons/ArrowRight.svelte';
</script>

<section class="overflow-hidden mx-auto max-w-8xl flex flex-col pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-24 px-4 lg:px-20">
  <div class="flex flex-col gap-20">
    <div class="flex items-center gap-10">
      <div class="flex flex-col justify-start gap-10">
        <div class="flex flex-col gap-4 lg:gap-6 text-left">
          <h1 class="text-4xl lg:text-6xl leading-none font-extrabold text-gray-900 dark:text-white max-w-xl">
            <span class="block1 xl:inline">Speed up your web development with</span>
            <span class="block1 text-primary-700 dark:text-primary-700 xl:inline">Flowbite Svelte</span>
          </h1>
          <p class="text-lg lg:text-xl leading-normal text-gray-500 dark:text-gray-400 max-w-xl">
            Flowbite Svelte is an official Flowbite component library for Svelte. All interactivities are
            handled by Svelte.
          </p>
          <div class="mt-4 md:mt-5 sm:flex justify-center sm:justify-start">
            <div class="flex flex-row mx-0 gap-4 sm:gap-6 items-center max-w-2xl">
              <CopyCliboardInput />
              <Button
                size="lg"
                class="gap-2 max-w-sm md:w-fit whitespace-nowrap hover:bg-primary-800"
                href="/docs/pages/quickstart"
                color="primary">
                Get started <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="p-0 hidden xl:block">
        <div class="relative dark:hidden">
          <img class="max-w-2xl" src="/images/gallery.png" alt="Header" />
        </div>
        <div class="hidden relative dark:block">
          <img class="max-w-2xl" src="/images/gallery-dark.png" alt="Header" />
        </div>
      </div>
    </div>
  </div>
</section>
