---
layout: blockComponentLayout
title: Svelte Faceted Search Modals - Flowbite Svelte Blocks
breadcrumb_title: Faceted Search Modals
no_of_components: 1 free component
dir: application
description: Use the faceted search component to allow users to narrow down search results by applying multiple filters using checkboxes, radios, and range sliders inside of a modal.
---

## Default faceted search modal

Use this free example to show a list of checkbox components inside a modal to filter results by categories inside your application.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
  let formModal = false;
</script>

<Button on:click={() => (formModal = true)}>Toggle modal</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#" tabindex="-1" aria-hidden="true">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Filter by category</h3>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
      <div class="flex items-center">
        <Checkbox>Apple (56)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Fitbit (56)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Dell (56)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Asus (97)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Logitech (97)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>MSI (97)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Boshch (176)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Sony (234)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox checked>Samsung (76)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Canon (49)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Microsoft (45)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Razor (49)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Emetc (16)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Nvidia (45)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>HP (234)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>BenQ (45)</Checkbox>
      </div>
      <div class="flex items-center">
        <Checkbox>Rockstar (49)</Checkbox>
      </div>
    </div>
    <div class="flex items-center space-x-4 rounded-b dark:border-gray-600">
      <Button>Apply</Button>
      <Button color="light">Reset</Button>
    </div>
  </form>
</Modal>
```
