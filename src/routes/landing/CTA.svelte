<script>
  import Button from '$lib/buttons/Button.svelte';
  import Li from '$lib/typography/Li.svelte';
  import List from '$lib/typography/List.svelte';
  import ArrowRight from '../utils/icons/ArrowRight.svelte';
  import Check from '../utils/icons/Check.svelte';
  import A from './A.svelte';
  import H2 from './H2.svelte';
  import Row from './Row.svelte';
  import Sun from '../utils/icons/Sun.svelte';
  import Moon from '../utils/icons/Moon.svelte';
    import Section from './utils/Section.svelte';
  const features = [
    'Huge collection of UI components',
    'Open-source under the MIT License',
    'Interactivity handled by Svelte',
    'Utility classes based on Tailwind CSS',
    'Based on the Flowbite ecosystem and design'
  ];
</script>

<Section class="lg:py-24">
    <Row image="bg-[url('/images/code-example.png')] dark:bg-[url('/images/code-example-dark.png')]" divide h_full>
      <div class="flex flex-col items-start gap-3 sm:gap-4 self-stretch">
        <H2>Svelte UI components</H2>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          <A href="/docs/pages/introduction">Flowbite Svelte</A> is a free and open-source UI component library built using Svelte based on Flowbite and Tailwind CSS.
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          By installing the package via NPM you will be able to build modern looking web applications fast by leveraging Svelte, Tailwind CSS and Flowbite using ready-made UI components like dropdowns, navbars, modals, and more.
        </p>
      </div>

      <div class="flex flex-col items-start pt-8 self-stretch">
        <List tag="ul" class="mb-6 lg:mb-8 space-y-4 font-medium text-gray-900 dark:text-white" list="none" ulClass=''>
          {#each features as feature}
            <Li icon class="gap-2">
              <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
              {feature}
            </Li>
          {/each}
        </List>

        <div class="flex flex-row gap-4">
          <Button href="/docs/pages/introduction" color="primary" class="gap-4">Start building <ArrowRight /></Button>
          <Button href="https://github.com/themesberg/flowbite-svelte" color="light" class="w-auto dark:!text-gray-400">View on GitHub</Button>
        </div>
      </div>
    </Row>

    <Row image="bg-[url('/images/graphs.png')] dark:bg-[url('/images/graphs-dark.png')]" reversed contain>
      <div class="text-red-500 flex flex-row gap-8">
        <div class="flex flex-col items-center gap-2 font-medium text-gray-900 dark:text-white">
          <Sun class="w-12 h-12  bg-primary-700 p-2 rounded-lg text-white" />
          Light
        </div>
        <div class="flex flex-col items-center gap-2 font-medium text-gray-500 dark:text-gray-400">
          <Moon class="w-12 h-12  bg-gray-100 dark:bg-gray-700 p-2 rounded-lg" />
          Dark
        </div>
      </div>
      <div class="flex flex-col items-start py-4 gap-4 self-stretch">
        <H2>Dark mode integration</H2>
        <p class="text-lg text-gray-500 dark:text-gray-400 mb-2">
          Flowbite Svelte supports <A href="/docs/components/darkmode">dark mode</A> and can be easily integrated into your project by following the official documentation based on Svelte.
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          Enabling dark mode will allow users to either select the preferred method (light or dark) or automatically switch based on the operating system settings.
        </p>
      </div>
      <List
        tag="ul"
        ulClass=''
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
      <a href="/docs/components/darkmode" class="flex items-center gap-4 text-primary-600 font-medium"
        >Learn more how to integrate dark mode <ArrowRight /></a>
    </Row>

    <Row
      image="bg-[url('/images/tailwind-code.png')] dark:bg-[url('/images/tailwind-code-dark.png')]"
      divide>
      <div class="flex flex-col items-start gap-4 self-stretch">
        <H2>Works with Tailwind CSS</H2>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          <A href="/">Flowbite Budget</A> is a mobile app that helps users easily track their expenses and create
          a budget.
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          With a user-friendly interface, the app allows users to quickly input their income and expenses,
          and then automatically categorizes them for easy tracking.
        </p>
      </div>

      <div class="flex flex-col items-start pt-8 self-stretch">
        <List tag="ul" class="mb-8 space-y-4 font-medium text-gray-900 dark:text-white" list="none" ulClass=''>
          {#each features as feature}
            <Li icon class="gap-2">
              <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
              {feature}
            </Li>
          {/each}
        </List>

        <div class="flex flex-row gap-4">
          <Button color="primary" class="gap-4">Start building <ArrowRight /></Button>
          <Button color="light" class="w-32 dark:!text-gray-400">Get demo</Button>
        </div>
      </div>
    </Row>
  </Section>