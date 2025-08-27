---
layout: componentLayout
title: Svelte Pricing Tables - Flowbite Svelte Blocks
breadcrumb_title: Pricing Tables
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: Get started with a collection of responsive pricing sections to show the pricing plan to your potential customers based on multiple sizes, styles, and layouts.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem, Section'
</script>

## Default pricing table

Use this example of three pricing cards showcasing the pricing plan title, description, feature list, and CTA button.

```svelte example
<script lang="ts">
  import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
</script>

<Section name="pricing">
  <PricingHead>
    {#snippet h2()}Designed for business teams like yours{/snippet}
    {#snippet paragraph()}Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.{/snippet}
  </PricingHead>
  <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
    <PricingCard>
      <PricingBodyHead>
        {#snippet h3()}Starter{/snippet}
        {#snippet paragraph()}Best option for personal use & for your next project.{/snippet}
        {#snippet price()}
          <span class="mr-2 text-5xl font-extrabold">$29</span>
          <span class="text-gray-500 dark:text-gray-400">/month</span>
        {/snippet}
      </PricingBodyHead>
      <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>Individual configuration</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>No setup, or hidden fees</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Team size: <span class="font-semibold">1 developer</span>
          </span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Premium support: <span class="font-semibold">6 months</span>
          </span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Free updates: <span class="font-semibold">6 months</span>
          </span>
        </PricingItem>

        {#snippet btn()}
          <Button color="red">Get started</Button>
        {/snippet}
      </PricingItemWrapper>
    </PricingCard>

    <PricingCard>
      <PricingBodyHead>
        {#snippet h3()}Company{/snippet}
        {#snippet paragraph()}Relevant for multiple users, extended & premium support.{/snippet}
        {#snippet price()}
          <span class="mr-2 text-5xl font-extrabold">$99</span>
          <span class="text-gray-500 dark:text-gray-400">/month</span>
        {/snippet}
      </PricingBodyHead>
      <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>Individual configuration</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>No setup, or hidden fees</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Team size: <span class="font-semibold">10 developer</span>
          </span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Premium support: <span class="font-semibold">24 months</span>
          </span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Free updates: <span class="font-semibold">24 months</span>
          </span>
        </PricingItem>

        {#snippet btn()}
          <Button color="red">Get started</Button>
        {/snippet}
      </PricingItemWrapper>
    </PricingCard>

    <PricingCard>
      <PricingBodyHead>
        {#snippet h3()}Enterprise{/snippet}
        {#snippet paragraph()}Best for large scale uses and extended redistribution rights.{/snippet}
        {#snippet price()}
          <span class="mr-2 text-5xl font-extrabold">$499</span>
          <span class="text-gray-500 dark:text-gray-400">/month</span>
        {/snippet}
      </PricingBodyHead>
      <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>Individual configuration</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>No setup, or hidden fees</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Team size: <span class="font-semibold">100+ developer</span>
          </span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Premium support: <span class="font-semibold">36 months</span>
          </span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
          <span>
            Free updates: <span class="font-semibold">36 months</span>
          </span>
        </PricingItem>

        {#snippet btn()}
          <Button color="red">Get started</Button>
        {/snippet}
      </PricingItemWrapper>
    </PricingCard>
  </div>
</Section>
```

<CompoAttributesViewer {components}/>
