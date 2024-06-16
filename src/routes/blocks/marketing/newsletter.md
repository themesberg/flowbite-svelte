---
layout: blockComponentLayout
title: Svelte Newsletter Sections - Flowbite Svelte Blocks
breadcrumb_title: Newsletter Sections
no_of_components: 1 free component
dir: marketing
description: The newsletter component is an important marketing method that you can use to convince website visitors to sign up for additional news from your organization.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Newsletter, Section'
</script>

## Default newsletter

Use this example as a website section to allow website visitors to sign up for your newsletter program featuring an input field and privacy notice.

```svelte example
<script lang="ts">
  import { Section, Newsletter } from 'flowbite-svelte-blocks';
  import { Input, Button, Label } from 'flowbite-svelte';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<Section>
  <Newsletter>
    <svelte:fragment slot="h2">Sign up for our newsletter</svelte:fragment>
    <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
    <form action="/">
      <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
        <div class="relative w-full">
          <Label class="hidden">Email address</Label>
          <Input id="email" type="email" placeholder="Enter your email" size="md" class="block p-3 pl-10 w-full text-sm rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <EnvelopeSolid slot="left" size="sm" class="text-gray-500 dark:text-gray-400 ml-2" />
          </Input>
        </div>
        <div>
          <Button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer border-primary-600 sm:rounded-none sm:rounded-r-lg focus:ring-4  dark:focus:ring-primary-800">Subscribe</Button>
        </div>
      </div>
      <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
        We care about the protection of your data. <a href="/" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.
      </div>
    </form>
  </Newsletter>
</Section>
```

<CompoAttributesViewer {components}/>
