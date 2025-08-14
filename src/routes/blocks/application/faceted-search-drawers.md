---
layout: componentLayout
title: Svelte Faceted Search Drawers - Flowbite Svelte Blocks
breadcrumb_title: Faceted Search Drawers
no_of_components: 1 free component
dir: application
pkg: Flowbite Svelte Blocks
description: Get started with a collection of drawer components using a faceted search interface to use multiple filters options to search for results in your application.
---

## Default faceted search drawer

Use this free example of a drawer component to show a list of checkbox, radio and input field elements to filter search results.

```svelte example hideResponsiveButtons class="h-64"
<script>
  import { Drawer, Button, CloseButton, Label, Input, Checkbox, A, Heading, Rating, Radio } from "flowbite-svelte";

  let open = false;
  let myRating = "3";
</script>

<div class="mt-8 flex justify-center">
  <Button onclick={() => (open = true)}>Show drawer</Button>
</div>
<Drawer bind:open id="sidebar4">
  <Heading tag="h5" id="drawer-label" class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">APPLY FILTERS</Heading>
  <form action="#">
    <div class="space-y-6">
      <!-- Categories -->
      <div class="space-y-2">
        <Heading tag="h6" class="text-base font-medium text-black dark:text-white">Categories</Heading>
        <div class="flex items-center">
          <Checkbox>TV, Audio-Video</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox checked>Desktop PC</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Gaming</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Monitors</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Laptops</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox checked>Console</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Tablets</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Foto</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Fashion</Checkbox>
        </div>
        <div class="flex items-center">
          <Checkbox>Books</Checkbox>
        </div>
        <A href="/">View all</A>
      </div>
      <!-- Prices -->
      <div class="space-y-2">
        <Heading tag="h6" class="text-base font-medium text-black dark:text-white">Prices</Heading>
        <div class="col-span-2 flex items-center justify-between space-x-3">
          <div class="w-full">
            <Label for="last_name" class="mb-2">From</Label>
            <Input type="text" id="last_name" placeholder="300" required />
          </div>
          <div class="w-full">
            <Label for="company" class="mb-2">To</Label>
            <Input type="text" id="company" placeholder="3500" required />
          </div>
        </div>
      </div>

      <!-- Rating -->
      <div class="space-y-2">
        <Heading tag="h6" class="text-base font-medium text-black dark:text-white">Rating</Heading>
        <div class="flex items-center">
          <Radio bind:group={myRating} value="5"><Rating total={5} rating={5} /></Radio>
        </div>
        <div class="flex items-center">
          <Radio bind:group={myRating} value="4"><Rating total={5} rating={4} /></Radio>
        </div>
        <div class="flex items-center">
          <Radio bind:group={myRating} value="3"><Rating total={5} rating={3} /></Radio>
        </div>
        <div class="flex items-center">
          <Radio bind:group={myRating} value="2"><Rating total={5} rating={2} /></Radio>
        </div>
        <div class="flex items-center">
          <Radio bind:group={myRating} value="1"><Rating total={5} rating={1} /></Radio>
        </div>
      </div>
    </div>
  </form>
</Drawer>
```
