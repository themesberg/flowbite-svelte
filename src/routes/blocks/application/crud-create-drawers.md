---
layout: componentLayout
title: Svelte Create Drawers (CRUD) - Flowbite Svelte Blocks
breadcrumb_title: CRUD Create Drawers
no_of_components: 1 free component
dir: application
pkg: Flowbite Svelte Blocks
description: Get started with a collection of drawer components to create new data models in your application by including form elements.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Section'
</script>

## Default drawer

Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application.

```svelte example hideResponsiveButtons
<script lang="ts">
  import { Section } from "flowbite-svelte-blocks";
  import { Drawer, Button, CloseButton, Label, Input, Textarea, Select } from "flowbite-svelte";

  let open = $state(false);
  let selected = $state();
  let categories = [
    { value: "", name: "Select category" },
    { value: "TV", name: "TV/Monitors" },
    { value: "PC", name: "PC" },
    { value: "GA", name: "Gaming/Console" },
    { value: "PH", name: "Phones" }
  ];
  const handleCancel = () => {
    open = false;
  };
</script>

<Section name="crudcreatedrawer">
  <div class="mt-8 flex justify-center">
    <Button onclick={() => (open = true)}>Create product</Button>
  </div>
  <Drawer bind:open id="sidebar4">
    <h5 id="drawer-label" class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">New Product</h5>
    <form action="#" class="mb-6">
      <div class="mb-6">
        <Label for="name" class="mb-2 block">Name</Label>
        <Input id="name" name="name" required placeholder="Type product name" />
      </div>
      <div class="mb-6">
        <Label for="bland" class="mb-2 block">Bland</Label>
        <Input id="bland" name="bland" required placeholder="Product brand" />
      </div>
      <div class="mb-6">
        <Label for="price" class="mb-2 block">Price</Label>
        <Input id="price" name="price" required placeholder="$2999" />
      </div>
      <div class="mb-6">
        <Label>
          Category
          <Select class="mt-2" items={categories} bind:value={selected} />
        </Label>
      </div>
      <div class="mb-6">
        <Label for="brand" class="mb-2">Description</Label>
        <Textarea id="message" placeholder="Enter event description here" rows={4} name="message" />
      </div>
      <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
        <Button type="submit" class="w-full">Add product</Button>
        <Button class="w-full" color="light" onclick={handleCancel}>
          <svg aria-hidden="true" class="-ml-1 h-5 w-5 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          Cancel
        </Button>
      </div>
    </form>
  </Drawer>
</Section>
```

<CompoAttributesViewer {components}/>
