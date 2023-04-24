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
  const features = [
    'Dynamic reports and dashboards',
    'Templates for everyone',
    'Development workflow',
    'Limitless business automation',
    'Knowledge management'
  ];
</script>

<section class="flex flex-col items-center bg-gray-50 dark:bg-gray-800">
  <div class="mx-auto max-w-8xl px-4 lg:px-20 lg:py-16 gap-0 lg:gap-20">
    <Row image="bg-[url('/images/code-example.png')] dark:bg-[url('/images/code-example-dark.png')]" divide>
      <div class="flex flex-col items-start gap-3 sm:gap-4 self-stretch">
        <H2>UI components in Svelte</H2>
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
        <List tag="ul" class="mb-6 lg:mb-8 space-y-4 font-medium text-gray-900 dark:text-white" list="none">
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

    <Row image="bg-[url('/images/graphs.png')] dark:bg-[url('/images/graphs-dark.png')]" reversed contain1>
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
        <H2>Dark mode itegration</H2>
        <p class="text-lg text-gray-500 dark:text-gray-400 mb-2">
          Dark mode is a popular feature that is being offered by many applications, operating systems, and
          websites in recent years.
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          It changes the color scheme of the user interface from a light background with dark text to a dark
          background with light text, providing a new and sleek look that many users find appealing.
        </p>
      </div>
      <List
        tag="ul"
        class="space-y-4 self-stretch font-medium text-gray-900 dark:text-white border-t dark:border-gray-700 pt-8"
        list="none">
        <Li icon class="gap-2">
          <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
          Reduced eye strain
        </Li>
        <Li icon class="gap-2">
          <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
          Better visibility in low light conditions
        </Li>
        <Li icon class="gap-2">
          <Check class="w-5 h-5 p-1 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-700" />
          Accessibility
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
        <List tag="ul" class="mb-8 space-y-4 font-medium text-gray-900 dark:text-white" list="none">
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
  </div>
</section>
