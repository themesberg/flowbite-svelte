<script lang="ts">
  import { Button } from '$lib';
  import { MetaTags } from 'svelte-meta-tags';
  import Footer from './utils/Footer.svelte';
  import type { PageData } from './$types';
  import CompoCard from './utils/CompoCard.svelte';
  import Input from '$lib/forms/Input.svelte';

  export let data: PageData;

  let components = [...data.forms, ...data.components, ...data.typography, ...data.experimental].sort(
    (a, b) => a.meta.component_title.localeCompare(b.meta.component_title)
  );
  let title = 'Flowbite-Svelte';
  let description =
    'Flowbite Svelte is an open-source UI component library built with Svelte components, Tailwind CSS utility classes and based on the Flowbite design system and components.';
  let default_title = 'Svelte UI Components';
  const image = `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${default_title}`;
</script>

<MetaTags
  {title}
  {description}
  facebook={{ appId: '453670756870545' }}
  openGraph={{
    type: 'website',
    url: `https://flowbite-svelte.com/`,
    title: `${title}`,
    description: `${description}`,
    images: [{ url: image, width: 1200, height: 630, alt: `${title}` }],
    site_name: 'Flowbite Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image,
    imageAlt: `${title} logo`
  }} />

<main
  class="flex-auto mx-auto max-w-8xl min-w-0 lg:static lg:max-h-full lg:overflow-visible divide-y divide-gray-700">
  <!-- hero -->
  <div class="overflow-hidden flex flex-col pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-24 px-4 lg:px-20">
    <div class="flex flex-col gap-20">
      <div class="flex items-center justify-end gap-16">
        <div class="flex flex-col justify-start gap-10">
          <div class="flex flex-col gap-4 lg:gap-6 text-left">
            <h1 class="text-4xl lg:text-6xl leading-none font-extrabold text-gray-900 dark:text-white">
              <span class="block xl:inline">Speed up your web development with</span>
              <span class="block text-primary-700 dark:text-primary-700 xl:inline">Flowbite Svelte</span>
            </h1>
            <p class="text-lg lg:text-xl leading-normal">
              Flowbite Svelte is an official Flowbite component library for Svelte. All interactivities are
              handled by Svelte.
            </p>
            <div class="mt-4 md:mt-5 sm:flex justify-center sm:justify-start">
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center max-w-lg">
                <Input size="lg" placeholder="npm i flowbite flowbite-svelte" readonly>
                  <svg
                    slot="right"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.49984 3.16667H2.83317C2.39114 3.16667 1.96722 3.34226 1.65466 3.65482C1.3421 3.96738 1.1665 4.39131 1.1665 4.83333V14.8333C1.1665 15.2754 1.3421 15.6993 1.65466 16.0118C1.96722 16.3244 2.39114 16.5 2.83317 16.5H11.1665C11.6085 16.5 12.0325 16.3244 12.345 16.0118C12.6576 15.6993 12.8332 15.2754 12.8332 14.8333V4.83333C12.8332 4.39131 12.6576 3.96738 12.345 3.65482C12.0325 3.34226 11.6085 3.16667 11.1665 3.16667H9.49984M4.49984 3.16667C4.49984 3.60869 4.67543 4.03262 4.98799 4.34518C5.30055 4.65774 5.72448 4.83333 6.1665 4.83333H7.83317C8.2752 4.83333 8.69912 4.65774 9.01168 4.34518C9.32424 4.03262 9.49984 3.60869 9.49984 3.16667M4.49984 3.16667C4.49984 2.72464 4.67543 2.30072 4.98799 1.98816C5.30055 1.67559 5.72448 1.5 6.1665 1.5H7.83317C8.2752 1.5 8.69912 1.67559 9.01168 1.98816C9.32424 2.30072 9.49984 2.72464 9.49984 3.16667"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </Input>
                <Button
                  size="lg"
                  class="gap-2 w-full md:w-56"
                  href="'/pages/getting-started'"
                  color="primary"
                  >Get started <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.293 0.792787C10.4805 0.605316 10.7348 0.5 11 0.5C11.2652 0.5 11.5195 0.605316 11.707 0.792787L15.707 4.79279C15.8945 4.98031 15.9998 5.23462 15.9998 5.49979C15.9998 5.76495 15.8945 6.01926 15.707 6.20679L11.707 10.2068C11.5184 10.3889 11.2658 10.4897 11.0036 10.4875C10.7414 10.4852 10.4906 10.38 10.3052 10.1946C10.1198 10.0092 10.0146 9.75838 10.0123 9.49619C10.01 9.23399 10.1108 8.98139 10.293 8.79279L12.586 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H12.586L10.293 2.20679C10.1055 2.01926 10.0002 1.76495 10.0002 1.49979C10.0002 1.23462 10.1055 0.980314 10.293 0.792787Z"
                      fill="white" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="p-0 hidden lg:block">
          <div class="relative dark:hidden">
            <img class="max-w-2xl" src="/images/gallery.png" alt="Header" />
          </div>
          <div class="hidden relative dark:block">
            <img class="max-w-2xl" src="/images/gallery-dark.png" alt="Header" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full px-4 lg:px-20 space-y-12">
    <div class="flex flex-col items-center pt-6 sm:pt-8 lg:pt-24 gap-0 sm:gap-4">
      <h2 class="tracking-tight font-extrabold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Svelte components
      </h2>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-center">
        Explore the whole collection of <span class="font-medium text-gray-900 dark:text-white"
          >over 56 open-source</span> UI components and interactive elements built with Svelte and Flowbite.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
      {#each components as { path, meta: { dir, component_title } }}
        <CompoCard name={component_title} {dir} {path} />
      {/each}
    </div>
  </div>
  <Footer />
</main>
