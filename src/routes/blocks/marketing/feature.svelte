<script lang="ts">
  import { Section, HeroHeader, FeatureDefault, FeatureItem } from '$lib';
  import {
    PresentationChartLine,
    AcademicCap,
    Cog,
    Briefcase,
    CurrencyDollar,
    Bolt
  } from 'svelte-heros';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Feature Sections';
  const title = 'Feature';
  const dir = 'marketing';
  const description =
    'Get started with a collection of responsive website sections built with Tailwind CSS to showcase a list of features that your product or company offers.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default feature list">
  Get started with this default example of feature items based on a grid layout where you can show
  up to three items on a row featuring an icon, title and description.
</SectionBlock>

<ExampleDiv>
  <Section name="feature">
    <HeroHeader
      class="max-w-screen-md mb-8 lg:mb-16"
      h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      pClass="text-gray-500 sm:text-xl dark:text-gray-400"
    >
      <svelte:fragment slot="h2">Designed for business teams like yours</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
        long-term value and drive economic growth.</svelte:fragment
      >
    </HeroHeader>
    <FeatureDefault>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><PresentationChartLine
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Marketing</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
          your marketing goals every month with our marketing plan.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><AcademicCap
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Legal</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Protect your organization, devices and stay compliant with our structured workflows and
          custom permissions made for you.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><Briefcase
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Business Automation</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new
          templates to help you get started.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><CurrencyDollar
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Finance</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Audit-proof software built for critical financial operations like month-end close and
          quarterly budgeting.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><Bolt
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Enterprise Design</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Craft beautiful, delightful experiences for both marketing and product with real
          cross-company collaboration.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><Cog
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Operations</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Keep your company’s lights on with customizable, iterative, and structured workflows
          built for all efficient teams and individual.</svelte:fragment
        >
      </FeatureItem>
    </FeatureDefault>
  </Section>
</ExampleDiv>
