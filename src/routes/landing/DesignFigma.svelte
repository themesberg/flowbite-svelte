<script>
  import Button from '$lib/buttons/Button.svelte';
  import ArrowRight from '../utils/icons/ArrowRight.svelte';
  import Figma from '../utils/icons/Figma.svelte';
  import FlowbiteLogo from '../utils/icons/FlowbiteLogo.svelte';
  import Section from './utils/Section.svelte';
</script>

<Section tinted class="lg:py-24">
  <div class="mx-auto max-w-8xl items-start justify-between gap-24 py-1 grid grid-cols-1 lg:grid-cols-2">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col items-start gap-6">
        <h2 class="leading-none text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
          Design with Figma
        </h2>
        <p class="text-lg">
          Track work across the enterprise through an open, collaborative platform. Link issues across Jira
          and ingest data from other software development tools.
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <p class="self-stretch">Our design system is being used by a large number of devs:</p>
        <div class="flex flex-col items-start gap-4 isolate self-stretch max-w-l">
          <Button
            color="light"
            class="self-stretch max-w-lg !px-4 !justify-start gap-5 sm:gap-7"
            size="xl"
            href="https://www.figma.com/file/5pHMkriSz9q98zawojb4mx/flowbite-pro-figma-v2.5.0?node-id=18-0&t=X431WUvSP7jsPiEI-0"
            ><Figma /> Preview in Figma
            <div class="ml-auto hidden sm:block"><ArrowRight /></div></Button>
          <Button
            color="light"
            class="self-stretch max-w-lg !px-4 !justify-start gap-4 sm:gap-6"
            size="xl"
            href="https://flowbite.com/figma/"
            ><FlowbiteLogo /> Learn more
            <div class="ml-auto hidden sm:block"><ArrowRight /></div></Button>
        </div>
      </div>
    </div>
    <div class="flex-col items-center justify-center hidden h-full lg:flex">
      <div class="relative dark:hidden rounded-xl">
        <img class="max-w-auto w-full" src="/images/figma.png" alt="Header" />
      </div>
      <div class="hidden relative dark:block">
        <img class="max-w-auto rounded-xl w-full" src="/images/figma-dark.png" alt="Header" />
      </div>
    </div>
  </div>
</Section>
