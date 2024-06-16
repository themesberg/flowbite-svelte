---
layout: blockComponentLayout
title: Svelte Content Sections - Flowbite Svelte Blocks
breadcrumb_title: Content Sections
no_of_components: 2 free components
dir: marketing
description: Choose one of these website sections to show extra content relative to the other sections on the page such as a gallery of images, description texts, and more.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Content, ContentWithImage, Section'
</script>

## Heading with description

Use this example to show a heading with a paragraph and a CTA link anywhere on your page relative to other sections.

```svelte example
<script lang="ts">
  import { Section, Content, ContentWithImage } from 'flowbite-svelte-blocks';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<Section name="content">
  <Content>
    <svelte:fragment slot="h2">Powering innovation at 200,000+ companies worldwide</svelte:fragment>
    <p class="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <p class="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
    <a href="/" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
      Learn more
      <ChevronRightOutline class="ml-2" size="xs" />
    </a>
  </Content>
</Section>
```

## Images with heading and description

Use this example to show a couple of images next to a heading and paragraph to provide visual impact to your users.

```svelte example
<script lang="ts">
  import { Section, ContentWithImage } from 'flowbite-svelte-blocks';
</script>

<Section name="contentwithimg">
  <ContentWithImage>
    <svelte:fragment slot="h2">We didn't reinvent the wheel</svelte:fragment>
    <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>

    <svelte:fragment slot="image">
      <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
    </svelte:fragment>
  </ContentWithImage>
</Section>
```

<CompoAttributesViewer {components}/>
