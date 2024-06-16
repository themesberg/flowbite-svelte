---
layout: blockComponentLayout
title: Svelte Create Forms (CRUD) - Flowbite Svelte Blocks
breadcrumb_title: CRUD Create Forms
no_of_components: 1 free component
dir: application
description: Get started with a collection of forms crafted for the "create" action from the CRUD layouts featuring form elements coded in Tailwind CSS.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Section'
</script>

## Default form

Use this free example of a form based on the CRUD layouts where you can create a new data entry inside your dashboard.

```svelte example
<script lang="ts">
  import { Section } from 'flowbite-svelte-blocks';
  import { Label, Input, Button, Select, Textarea } from 'flowbite-svelte';
  const handleSubmit = () => {
    alert('Form submited.');
  };
  let selected;
  let countries = [
    { value: 'tv', name: 'TV/Monitors' },
    { value: 'pc', name: 'PC' },
    { value: 'phone', name: 'Phones' }
  ];
</script>

<Section name="crudcreateform">
  <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
  <form on:submit={handleSubmit}>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <div class="sm:col-span-2">
        <Label for="name" class="mb-2">Product Name</Label>
        <Input type="text" id="name" placeholder="Type product name" required />
      </div>
      <div class="w-full">
        <Label for="brand" class="mb-2">Brand</Label>
        <Input type="text" id="brand" placeholder="Product brand" required />
      </div>
      <div class="w-full">
        <Label for="price" class="mb-2">Price</Label>
        <Input type="text" id="price" placeholder="$29999" required />
      </div>
      <div class="w-full">
        <Label
          >Category
          <Select class="mt-2" items={countries} bind:value={selected} required />
        </Label>
      </div>
      <div class="w-full">
        <Label for="weight" class="mb-2">Item Weight (kg)</Label>
        <Input type="text" id="weight" placeholder="12" required />
      </div>
      <div class="sm:col-span-2">
        <Label for="description" class="mb-2">Description</Label>
        <Textarea id="description" placeholder="Your description here" rows="4" name="description" required />
      </div>
      <Button type="submit" class="w-32">Add product</Button>
    </div>
  </form>
</Section>
```

<CompoAttributesViewer {components}/>
