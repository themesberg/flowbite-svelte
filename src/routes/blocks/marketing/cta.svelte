<script lang="ts">
  import { Section, Cta } from '$lib';
  import { Button } from 'flowbite-svelte';
  import { VideoCamera } from 'svelte-heros';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'CTA Sections';
  const title = 'CTA';
  const dir = 'marketing';
  const description =
    'The CTA (call to action) website sections can be used anywhere on your website to encourage your users to take any action, such as creating a new account.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default CTA section">
  Use this example to show a simple heading, paragraph, and a couple of CTA buttons to encourage
  users to take action.
</SectionBlock>

<ExampleDiv>
  <Section name="cta">
    <Cta>
      <svelte:fragment slot="h2">Let's find more that brings us together.</svelte:fragment>
      <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
        Flowbite helps you connect with friends, family and communities of people who share your
        interests. Connecting with your friends and family as well as discovering new ones is easy
        with features like Groups, Watch and Marketplace.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <Button href="/" color="red" size="lg">Get started</Button>
        <Button href="/" color="light" size="lg"
          ><VideoCamera class="mr-2" size="20" variation="solid" />
          View more
        </Button>
      </div>
    </Cta>
  </Section>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Image with CTA button
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this example to show an image or app screenshot next to the CTA button to provide
        additional visual impact.
      </p>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="ctawithimg">
    <Cta ctatype="image">
      <svelte:fragment slot="img">
        <img
          class="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard"
        />
        <img
          class="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard"
        />
      </svelte:fragment>
      <svelte:fragment slot="h2"
        >Let's create more tools and ideas that brings us together.</svelte:fragment
      >
      <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
        Flowbite helps you connect with friends and communities of people who share your interests.
        Connecting with your friends and family as well as discovering new ones is easy with
        features like Groups.
      </p>
      <a
        href="/"
        class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
      >
        Get started
        <svg
          class="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </a>
    </Cta>
  </Section>
</ExampleDiv>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
  <div class="grid lg:grid-cols-2">
    <div>
      <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Heading with CTA button
      </h2>
      <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
        Use this simple yet effective CTA section with a heading, short paragraph, and a button to
        encourage users to start a free trial.
      </p>
    </div>
  </div>
</Section>

<ExampleDiv>
  <Section name="cta">
    <Cta ctatype="heading">
      <svelte:fragment slot="h2">Start your free trial today</svelte:fragment>
      <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
        Try Flowbite Platform for 30 days. No credit card required.
      </p>
      <a
        href="/"
        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >Free trial for 30 days</a
      >
    </Cta>
  </Section>
</ExampleDiv>
