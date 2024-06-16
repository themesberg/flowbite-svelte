---
layout: blockComponentLayout
title: Svelte FAQ Sections - Flowbite Svelte Blocks
breadcrumb_title: FAQ Sections
no_of_components: 1 free component
dir: marketing
description: Get started with a collection of FAQ (frequently asked questions) sections to show a list of questions and answers to your website visitors and users.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Faq, FaqItem, Section'
</script>

## Default example

Use this simple example of a FAQ section to show a list of questions and answers based on two columns and a question mark icon.

```svelte example
<script lang="ts">
  import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
</script>

<Section name="faq">
  <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
  <Faq>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">What do you mean by "Figma assets"?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What does "lifetime access" exactly mean?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How does support work?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Feel free to <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">I want to build more than one project. Is that allowed?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Find out more information by <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.
        </p>
      </FaqItem>
    </div>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">What does "free updates" include?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          The free updates that will be provided is based on the <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What does the free version include?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          The <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.
        </p>
        <p class="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What is the difference between Windster and Tailwind UI?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.</p>
        <p class="text-gray-500 dark:text-gray-400">Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Can I use Windster in open-source projects?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.</p>
        <p class="text-gray-500 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Find out more information by <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.
        </p>
      </FaqItem>
    </div>
  </Faq>
</Section>
```

<CompoAttributesViewer {components}/>
