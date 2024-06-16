---
layout: blockComponentLayout
title: Svelte Dropdown Filters - Flowbite Svelte Blocks
breadcrumb_title: Dropdown Filters
no_of_components: 1 free component
dir: application
description: Get started with a collection of dropdown filter components to allow users to query through search results by filtering categories, date ranges, keywords, and more.
---

## Default dropdown filter

Use this free example of a filter component to allow your users to select which categories to filter in the search results using checkbox components.

```svelte example class="flex justify-center items-start h-[32rem]"
<script>
  import { Button, Dropdown, DropdownItem, Checkbox } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
</script>

<Button>Filter by category<ChevronDownOutline class="w-3 h-3 ml-2 text-white dark:text-white" /></Button>
<Dropdown class="w-44 p-3 space-y-3 text-sm">
  <li>
    <Checkbox>Apple (56)</Checkbox>
  </li>
  <li>
    <Checkbox>Fitbit (56)</Checkbox>
  </li>
  <li>
    <Checkbox>Dell (56)</Checkbox>
  </li>
  <li>
    <Checkbox checked>Asus (97)</Checkbox>
  </li>
  <li>
    <Checkbox checked>Logitech (97)</Checkbox>
  </li>
  <li>
    <Checkbox checked>MSI (97)</Checkbox>
  </li>
  <li>
    <Checkbox checked>Bosch (176)</Checkbox>
  </li>
  <li>
    <Checkbox>Sony (234)</Checkbox>
  </li>
  <li>
    <Checkbox checked>Samsung (76)</Checkbox>
  </li>
  <li>
    <Checkbox>Canon (49)</Checkbox>
  </li>
  <li>
    <Checkbox>Microsoft (45)</Checkbox>
  </li>
  <li>
    <Checkbox>Razor (49)</Checkbox>
  </li>
</Dropdown>
```
