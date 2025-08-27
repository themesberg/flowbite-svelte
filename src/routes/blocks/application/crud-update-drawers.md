---
layout: componentLayout
title: Svelte Update Drawers (CRUD) - Flowbite Svelte Blocks
breadcrumb_title: CRUD Update Drawers
no_of_components: 1 free component
dir: application
pkg: Flowbite Svelte Blocks
description: Get started with a collection of drawer components that you can use to update existing data sets from your database inside your dashboard.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Section'
</script>

## Default drawer

Use this free and responsive example of a drawer component to update an existing data set featuring text input fields, select boxes, and textareas.

```svelte example hideResponsiveButtons
<script lang="ts">
  import { Section } from "flowbite-svelte-blocks";
  import { Label, Input, Button, Drawer, CloseButton } from "flowbite-svelte";

  let open = false;

  const handleCancel = () => {
    open = false;
  };
</script>

<Section sectionClass="h-96">
  <div class="mt-8 flex justify-center">
    <Button onclick={() => (open = true)}>Update user</Button>
  </div>
  <Drawer bind:open id="sidebar4">
    <h5 id="drawer-label" class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">UPDATE USER</h5>
    <form action="#" class="mb-6">
      <div class="mb-6">
        <Label for="name" class="mb-2 block">Username</Label>
        <Input id="name" name="name" required placeholder="bonnie.green" />
      </div>
      <div class="mb-6">
        <Label for="email" class="mb-2 block">Email</Label>
        <Input id="email" name="email" required placeholder="bonnie.green@company.com" />
      </div>
      <div class="mb-6">
        <Label for="password" class="mb-2 block">Password</Label>
        <Input id="password" name="password" required placeholder="*********" />
      </div>
      <div class="mb-6">
        <Label for="confirm-password" class="mb-2 block">Password</Label>
        <Input id="confirm-password" name="confirm-password" required placeholder="*********" />
      </div>

      <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
        <Button type="submit" class="w-full">Update user</Button>
        <Button class="w-full" outline color="red" onclick={handleCancel}>
          <svg aria-hidden="true" class="mr-1.5 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
          Delete
        </Button>
      </div>
    </form>
  </Drawer>
</Section>
```

<CompoAttributesViewer {components}/>
