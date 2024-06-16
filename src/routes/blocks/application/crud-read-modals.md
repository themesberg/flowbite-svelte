---
layout: blockComponentLayout
title: Svelte Read Modals (CRUD) - Flowbite Svelte Blocks
breadcrumb_title: CRUD Read Modals
no_of_components: 1 free component
dir: application
description: Use this collection of CRUD modal components to show information about a data entry from your database and show a list of actions based.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Section'
</script>

## Default modal

Use this free modal component to show a list of data entries from the database based on the CRUD layout system.

```svelte example
<script lang="ts">
  import { Section } from 'flowbite-svelte-blocks';
  import { Button, Modal } from 'flowbite-svelte';

  let defaultModal = false;
</script>

<Section classSection="h-96">
  <div class="flex justify-center m-5">
    <Button on:click={() => (defaultModal = true)}>Show read modal</Button>
  </div>
  <Modal title="" bind:open={defaultModal} autoclose size="sm">
    <div class="flex justify-between mb-4 rounded-t sm:mb-5">
      <div class="text-lg text-gray-900 md:text-xl dark:text-white">
        <h3 class="font-semibold">Apple iMac 27”</h3>
        <p class="font-bold">$2999</p>
      </div>
    </div>
    <dl>
      <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
      <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</dd>
      <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
      <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Electronics/PC</dd>
    </dl>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-3 sm:space-x-4">
        <Button>
          <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" /></svg>
          Edit
        </Button>
        <Button color="light">Preview</Button>
      </div>
      <Button color="red">
        <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
        Delete
      </Button>
    </div>
  </Modal>
</Section>
```

<CompoAttributesViewer {components}/>
