---
layout: blockComponentLayout
title: Svelte Faceted Search Drawers - Flowbite Svelte Blocks
breadcrumb_title: Faceted Search Drawers
no_of_components: 1 free component
dir: application
description: Get started with a collection of drawer components using a faceted search interface to use multiple filters options to search for results in your application.
---

## Default faceted search drawer

Use this free example of a drawer component to show a list of checkbox, radio and input field elements to filter search results.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea, Checkbox, A, Heading, Rating, Radio } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';

  let hidden4 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  let myRating = '3';
</script>

<div class="text-center">
  <Button on:click={() => (hidden4 = false)}>Show drawer</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden4} id="sidebar4">
  <div class="flex items-center">
    <Heading tag="h5" id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">APPLY FILTERS</Heading>
    <CloseButton on:click={() => (hidden4 = true)} class="mb-4 dark:text-white" />
  </div>
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
        <div class="flex items-center justify-between col-span-2 space-x-3">
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
