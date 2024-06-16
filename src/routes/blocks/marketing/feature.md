---
layout: blockComponentLayout
title: Svelte Feature Sections - Flowbite Svelte Blocks
breadcrumb_title: Feature Sections
no_of_components: 1 free component
dir: marketing
description: Get started with a collection of responsive website sections built with Tailwind CSS to showcase a list of features that your product or company offers.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  import componentData1 from '../component-data/HeroHeader.json'
  import componentData2 from '../component-data/FeatureDefault.json'
  import componentData3 from '../component-data/FeatureItem.json'
  import componentData4 from '../component-data/Section.json'
  const components = 'HeroHeader, FeatureDefault, FeatureItem, Section'
</script>

## Default feature list

Get started with this default example of feature items based on a grid layout where you can show up to three items on a row featuring an icon, title and description.

```svelte example
<script lang="ts">
  import { Section, HeroHeader, FeatureDefault, FeatureItem } from 'flowbite-svelte-blocks';
  import { ChartPieSolid, LandmarkSolid, BriefcaseSolid, DollarOutline, RocketSolid, CogOutline } from 'flowbite-svelte-icons';
</script>

<Section name="feature">
  <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
    <svelte:fragment slot="h2">Designed for business teams like yours</svelte:fragment>
    <svelte:fragment slot="paragraph">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</svelte:fragment>
  </HeroHeader>
  <FeatureDefault>
    <FeatureItem>
      <svelte:fragment slot="icon"><ChartPieSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Marketing</svelte:fragment>
      <svelte:fragment slot="paragraph">Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><LandmarkSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Legal</svelte:fragment>
      <svelte:fragment slot="paragraph">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><BriefcaseSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Business Automation</svelte:fragment>
      <svelte:fragment slot="paragraph">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><DollarOutline class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Finance</svelte:fragment>
      <svelte:fragment slot="paragraph">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Enterprise Design</svelte:fragment>
      <svelte:fragment slot="paragraph">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><CogOutline class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Operations</svelte:fragment>
      <svelte:fragment slot="paragraph">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</svelte:fragment>
    </FeatureItem>
  </FeatureDefault>
</Section>
```

<CompoAttributesViewer {components}/>
