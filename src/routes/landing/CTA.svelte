<script>
  import Button from '$lib/buttons/Button.svelte';
  import DarkMode from '$lib/darkmode/DarkMode.svelte';
  import Li from '$lib/typography/Li.svelte';
  import List from '$lib/typography/List.svelte';
  import ArrowRight from '../utils/icons/ArrowRight.svelte';
  import Check from '../utils/icons/Check.svelte';
  import Moon from '../utils/icons/Moon.svelte';
  import Sun from '../utils/icons/Sun.svelte';
  import A from './utils/A.svelte';
  import H2 from './utils/H2.svelte';
  import Row from './utils/Row.svelte';
  import Section from './utils/Section.svelte';

  const features = [
    'Huge collection of UI components',
    'Open-source under the MIT License',
    'Interactivity handled by Svelte',
    'Utility classes based on Tailwind CSS',
    'Based on the Flowbite ecosystem and design'
  ];
</script>

<Section class="lg:py-24" tinted>
  <Row
    image="bg-[url('/images/code-example.png')] dark:bg-[url('/images/code-example-dark.png')]"
    divide
    h_full>
    <div class="flex flex-col items-start gap-3 sm:gap-4 self-stretch">
      <H2>Svelte UI components</H2>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        <A href="/docs/pages/introduction">Flowbite Svelte</A> is a free and open-source UI component library
        built using Svelte based on Flowbite and Tailwind CSS.
      </p>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        By installing the package via NPM you will be able to build modern looking web applications fast by
        leveraging Svelte, Tailwind CSS and Flowbite using ready-made UI components like dropdowns, navbars,
        modals, and more.
      </p>
    </div>

    <div class="flex flex-col items-start pt-8 self-stretch">
      <List
        tag="ul"
        class="mb-6 lg:mb-8 space-y-4 font-medium text-gray-900 dark:text-white"
        list="none"
        ulClass="">
        {#each features as feature}
          <Li icon class="gap-2">
            <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
            {feature}
          </Li>
        {/each}
      </List>

      <div class="flex flex-row gap-4">
        <Button href="/docs/pages/introduction" color="primary" class="gap-4"
          >Start building <ArrowRight /></Button>
        <Button
          href="https://github.com/themesberg/flowbite-svelte"
          color="light"
          class="w-auto dark:!text-gray-400">View on GitHub</Button>
      </div>
    </div>
  </Row>

  <Row image="bg-[url('/images/graphs.png')] dark:bg-[url('/images/graphs-dark.png')]" reversed contain>
    <div class="text-red-500 flex flex-row gap-8">
      <div class="flex flex-col items-center gap-2 font-medium text-gray-900 dark:text-gray-400">
        <DarkMode size="lg" class="hidden dark:block dark:bg-gray-700" />
        <Sun class="dark:hidden w-11 h-11 p-2 rounded-lg bg-primary-700 dark:bg-gray-700  text-white" />
        Light
      </div>
      <div class="flex flex-col items-center gap-2 font-medium text-gray-400 dark:text-white">
        <Moon class="hidden dark:block w-11 h-11 p-2 rounded-lg bg-primary-700" />
        <DarkMode size="lg" class="dark:hidden bg-gray-100 dark:bg-gray-700 hover:bg-gray-200" />
        Dark
      </div>
    </div>
    <div class="flex flex-col items-start py-4 gap-4 self-stretch">
      <H2>Dark mode integration</H2>
      <p class="text-lg text-gray-500 dark:text-gray-400 mb-2">
        Flowbite Svelte supports <A href="/docs/components/darkmode">dark mode</A> and can be easily integrated
        into your project by following the official documentation based on Svelte.
      </p>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        Enabling dark mode will allow users to either select the preferred method (light or dark) or
        automatically switch based on the operating system settings.
      </p>
    </div>
    <List
      tag="ul"
      ulClass=""
      class="space-y-4 self-stretch font-medium text-gray-900 dark:text-white border-t dark:border-gray-700 pt-8"
      list="none">
      <Li icon class="gap-2">
        <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
        Increased accessibility based on room brightness
      </Li>
      <Li icon class="gap-2">
        <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
        Better visibility for users with low vision
      </Li>
      <Li icon class="gap-2">
        <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
        Improved readability for users with light sensitivity
      </Li>
    </List>
    <a
      href="/docs/components/darkmode"
      class="flex items-center gap-4 text-primary-600 hover:underline font-medium"
      >Learn more how to integrate dark mode <ArrowRight /></a>
  </Row>

  <Row image="bg-[url('/images/tailwind-code.png')] dark:bg-[url('/images/tailwind-code-dark.png')]" divide>
    <div class="flex flex-col items-start gap-4 self-stretch">
      <H2>Works with Tailwind CSS</H2>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        Flowbite Svelte uses the Tailwind CSS utility classes under the hood which means it will be easy to
        customize the appearance and specifications of the UI components directly from the HTML code.
      </p>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        <A href="https://tailwindcss.com">Tailwind CSS</A> is a popular and open-source utility-first CSS framework
        that you can use to speed up the development of your front-end projects.
      </p>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        Flowbite Svelte is also based on the core <A href="https://flowbite.com">Flowbite</A> UI component library
        the also features interactive UI components like dropdowns, modals, navbars, and more.
      </p>
    </div>
  </Row>
</Section>
