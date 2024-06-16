---
layout: blockComponentLayout
title: Svelte Popups - Flowbite Svelte Blocks
breadcrumb_title: Popups
no_of_components: 1 free component
dir: marketing
description: Get started with the popup component to overlay the main website content and showcase advertisement messages, cookie notices, and newsletter sign-ups.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Popup'
</script>

## Default popup

Use this example of a popup element to show a simple yes or no type of dialog to your website visitor based on the Modal component from Flowbite.

```svelte example class="flex justify-center items-start h-80"
<script lang="ts">
  import { Popup } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
</script>

<Popup>
  <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
    <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
    <p>The backup created with this export functionnality may contain some sensitive data. We suggest you to save this archive in a securised location.</p>
  </div>
  <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
    <a href="/" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Learn more about privacy</a>
    <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
      <Button outline color="dark">Cancel</Button>
      <Button color="red">Confirm</Button>
    </div>
  </div>
</Popup>
```

<CompoAttributesViewer {components}/>
