---
layout: componentLayout
title: Svelte Testimonial - Flowbite Svelte Blocks
breadcrumb_title: Testimonial
no_of_components: 2 free components
dir: marketing
pkg: Flowbite Svelte Blocks
description: Get started with a collection of testimonial sections built with Tailwind CSS to show a statement from a customer as an endorsement to other potential clients.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Testimonial, TestimonialCard, TestimonialCardItem, Section'
</script>

## Blockquote example

Use this simple example of a testimonial based on a blockquote element and show the text, customer avatar, name, and occupation.

```svelte example
<script lang="ts">
  import { Section, Quotes, Testimonial } from "flowbite-svelte-blocks";
</script>

<Section name="testimonial">
  <Testimonial Icon={Quotes}>
    <blockquote>
      <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    {#snippet footer()}
      <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="michael profile" />
      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
      </div>
    {/snippet}
  </Testimonial>
</Section>
```

## Testimonial cards

You can use this example of testimonial cards up to two items on a row and show the title, description, avatar, name, and occupation.

```svelte example
<script lang="ts">
  import { Section, TestimonialCard, TestimonialCardItem } from "flowbite-svelte-blocks";
</script>

<Section name="testimonial">
  <TestimonialCard>
    {#snippet header()}
      <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Testimonials</h2>
      <p class="mb-8 font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
    {/snippet}
  </TestimonialCard>
  <div class="mb-8 grid lg:mb-12 lg:grid-cols-2">
    <TestimonialCardItem>
      {#snippet h3()}
        Speechless with how easy this was to integrate
      {/snippet}
      {#snippet caption()}
        <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="karen profile" />
        <div class="space-y-0.5 text-left font-medium dark:text-white">
          <div>Bonnie Green</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
        </div>
      {/snippet}
      <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
      <p class="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
      <p class="my-4">If you care for your time, I hands down would go with this."</p>
    </TestimonialCardItem>
    <TestimonialCardItem>
      {#snippet h3()}Solid foundation for any project{/snippet}
      <p class="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
      <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
      {#snippet caption()}
        <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="robert profile" />
        <div class="space-y-0.5 text-left font-medium dark:text-white">
          <div>Roberta Casas</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
        </div>
      {/snippet}
    </TestimonialCardItem>
    <TestimonialCardItem>
      {#snippet h3()}Mindblowing workflow and variants{/snippet}
      <p class="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
      <p class="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
      <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
      {#snippet caption()}
        <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="jese leos profile" />
        <div class="space-y-0.5 text-left font-medium dark:text-white">
          <div>Jese Leos</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
        </div>
      {/snippet}
    </TestimonialCardItem>
    <TestimonialCardItem>
      {#snippet h3()}Efficient Collaborating{/snippet}
      <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
      <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
      {#snippet caption()}
        <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="joseph profile" />
        <div class="space-y-0.5 text-left font-medium dark:text-white">
          <div>Joseph McFall</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
        </div>
      {/snippet}
    </TestimonialCardItem>
  </div>
  <div class="text-center">
    <a href="/" class="mr-2 mb-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more...</a>
  </div>
</Section>
```

<CompoAttributesViewer {components}/>
