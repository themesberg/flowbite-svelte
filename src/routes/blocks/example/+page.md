---
title: Example Homepage - Flowbite Svelte Blocks
breadcrumb_title: Example Homepage
no_of_components: 0 component
dir: application
pkg: Flowbite Svelte Blocks
description: Flowbite Svelte Blocks example website homepage.
---

<script>
  import {
    Section,
    HeroHeader,
    FeatureDefault,
    FeatureItem,
    ContentWithImage,
    Content,
    Cta
  } from 'flowbite-svelte-blocks';
  import {
    Button
  } from 'flowbite-svelte';
  import { ArrowRightOutline, ChartPieSolid, LandmarkSolid, BriefcaseSolid, DollarOutline, RocketSolid, CogOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
  
  import {
    Airbnb,
    Google,
    Mailchimp,
    Mashable,
    Microsoft,
    Spotify,
  } from '../utils';
</script>

<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader
      h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
      pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    >
      {#snippet h1()}Payments tool for software companies{/snippet}
      {#snippet paragraph()}
        From checkout to global sales tax compliance, companies around the world use Flowbite to
        simplify their payment stack.
      {/snippet}
      <a href="/"
        ><Button size="xl" class="inline-flex items-center justify-center mr-3"
          >Get started<ArrowRightOutline class="ml-2 -mr-1" /></Button
        >
      </a>
      <a href="/"
        ><Button color="light" size="xl" class="inline-flex items-center justify-center"
          >Speak to Sales</Button
        >
      </a>
    </HeroHeader>
  </div>
  <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
      alt="mockup"
    />
  </div>
</Section>

<Section name="logos">
  <HeroHeader>
    {#snippet h2()}You’ll be in good company{/snippet}
    <div
      class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
    >
      <a href="/" class="flex justify-center items-center">
        <Airbnb />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Google />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Microsoft />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Spotify />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Mailchimp />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Mashable />
      </a>
    </div>
  </HeroHeader>
</Section>

<Section name="feature">
  <HeroHeader
    class="max-w-screen-md mb-8 lg:mb-16"
    h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left"
    pClass="text-gray-500 sm:text-xl dark:text-gray-400 text-left sm:px-0 xl:px-0"
  >
    {#snippet h2()}You’ll be in good company{/snippet}
    {#snippet paragraph()}
    Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
      long-term value and drive economic growth.
    {/snippet}
  </HeroHeader>
  <FeatureDefault>
    <FeatureItem>
      {#snippet icon()}<ChartPieSolid
          class="text-primary-600 dark:text-primary-300"
        />{/snippet}
      {#snippet h3()}Marketing{/snippet}
      {#snippet paragraph()}Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
        your marketing goals every month with our marketing plan.{/snippet}
    </FeatureItem>
    <FeatureItem>
      {#snippet icon()}<LandmarkSolid
          class="text-primary-600 dark:text-primary-300"
        />{/snippet}
      {#snippet h3()}Legal{/snippet}
      {#snippet paragraph()}Protect your organization, devices and stay compliant with our structured workflows and
        custom permissions made for you.{/snippet}
    </FeatureItem>
    <FeatureItem>
      {#snippet icon()}<BriefcaseSolid
          class="text-primary-600 dark:text-primary-300"
        />{/snippet}
      {#snippet h3()}Business Automation{/snippet}
      {#snippet paragraph()}Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new
        templates to help you get started.{/snippet}
    </FeatureItem>
    <FeatureItem>
      {#snippet icon()}<DollarOutline
          class="text-primary-600 dark:text-primary-300"
        />{/snippet}
      {#snippet h3()}Finance{/snippet}
      {#snippet paragraph()}Audit-proof software built for critical financial operations like month-end close and
        quarterly budgeting.{/snippet}
    </FeatureItem>
    <FeatureItem>
      {#snippet icon()}<RocketSolid
          class="text-primary-600 dark:text-primary-300"
        />{/snippet}
      {#snippet h3()}Enterprise Design{/snippet}
      {#snippet paragraph()}Craft beautiful, delightful experiences for both marketing and product with real
        cross-company collaboration.{/snippet}
    </FeatureItem>
    <FeatureItem>
      {#snippet icon()}<CogOutline
          class="text-primary-600 dark:text-primary-300"
        />{/snippet}
      {#snippet h3()}Operations{/snippet}
      {#snippet paragraph()}Keep your company’s lights on with customizable, iterative, and structured workflows
        built for all efficient teams and individual.{/snippet}
    </FeatureItem>
  </FeatureDefault>
</Section>

<Section name="contentwithimg">
  <ContentWithImage>
    {#snippet h2()}We didn't reinvent the wheel{/snippet}
    <p class="mb-4">
      We are strategists, designers and developers. Innovators and problem solvers. Small enough to
      be simple and quick, but big enough to deliver the scope you want at the pace you need. Small
      enough to be simple and quick, but big enough to deliver the scope you want at the pace you
      need.
    </p>
    <p>
      We are strategists, designers and developers. Innovators and problem solvers. Small enough to
      be simple and quick.
    </p>

    {#snippet image()}
      <img
        class="w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        alt="office content 1"
      />
      <img
        class="mt-4 w-full lg:mt-10 rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
        alt="office content 2"
      />
    {/snippet}

  </ContentWithImage>
</Section>

<Section name="content">
  <Content>
    {#snippet h2()}Powering innovation at 200,000+ companies worldwide{/snippet}
    <p class="mb-4 font-light">
      Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools, so your IT support and operations
      teams have richer contextual information to rapidly respond to requests, incidents, and
      changes.
    </p>
    <p class="mb-4 font-medium">
      Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
    </p>
    <a
      href="/"
      class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
    >
      Learn more
      <ChevronRightOutline class="ml-1" size="sm" />
    </a>
  </Content>
</Section>

<Section name="headingwithctabutton">
  <Cta>
    {#snippet h2()}Start your free trial today{/snippet}
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
