---
layout: componentLayout
title: Svelte Newsletter Sections - Flowbite Svelte Blocks
breadcrumb_title: Newsletter Sections
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
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
  import { Section, Newsletter } from "flowbite-svelte-blocks";
  import { Input, Button, Label } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Section>
  <Newsletter>
    {#snippet h2()}Sign up for our newsletter{/snippet}
    <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl md:mb-12 dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
    <form action="/">
      <div class="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
        <div class="relative w-full">
          <Label class="hidden">Email address</Label>
          <Input id="email" type="email" placeholder="Enter your email" size="md" class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 p-3 pl-10 text-sm sm:rounded-none sm:rounded-l-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
            {#snippet left()}
              <EnvelopeSolid size="sm" class="ml-2 text-gray-500 dark:text-gray-400" />
            {/snippet}
          </Input>
        </div>
        <div>
          <Button type="submit" class="border-primary-600 dark:focus:ring-primary-800 w-full cursor-pointer rounded-lg border px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 sm:rounded-none  sm:rounded-r-lg">Subscribe</Button>
        </div>
      </div>
      <div class="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
        We care about the protection of your data. <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Read our Privacy Policy</a>
        .
      </div>
    </form>
  </Newsletter>
</Section>
```

<CompoAttributesViewer {components}/>
