---
layout: blockComponentLayout
title: Svelte Table Headers - Flowbite Svelte Blocks
breadcrumb_title: Table Headers
no_of_components: 2 free components
dir: application
description: Use the table header component to append options and controls on top of a table component to indicate titles, filters, sorting elements, and other settings.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'TableHeader, Section'
</script>

## Default table header

Use this free example of a header component that you can position on top of a header to add a search functionality, a CRUD button, table options and filtering results.

```svelte example
<script lang="ts">
  import { Section, TableHeader } from 'flowbite-svelte-blocks';
  import { Button, Heading, P, Search, Dropdown, DropdownItem, DropdownDivider, Checkbox } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
</script>

<Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-80 flex pt-8">
  <TableHeader headerType="search">
    <Search slot="search" size="md" />
    <Button>
      <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
      </svg>
      Add product
    </Button>
    <Button color="light">
      Actions<ChevronDownOutline />
    </Button>
    <Dropdown>
      <DropdownItem>Mass Edit</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Delete all</DropdownItem>
    </Dropdown>
    <Button color="light">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
      </svg>
      Filter<ChevronDownOutline />
    </Button>
    <Dropdown class="w-48 p-2 text-sm">
      <h6 class="mb-3 ml-1 text-sm font-medium text-gray-900 dark:text-white">Category</h6>
      <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Apple (56)</Checkbox>
      </li>
      <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Fitbit (56)</Checkbox>
      </li>
      <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Dell (56)</Checkbox>
      </li>
      <li class="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Asus (97)</Checkbox>
      </li>
    </Dropdown>
  </TableHeader>
</Section>
```

## Table header with text and button

This free example can be used to show a title, description, and CTA button for creating a new item inside the table data.

```svelte example
<script lang="ts">
  import { Section, TableHeader } from 'flowbite-svelte-blocks';
  import { Button, Heading, P, Search, Dropdown, DropdownItem, DropdownDivider, Checkbox } from 'flowbite-svelte';
</script>

<Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-80 flex pt-8">
  <TableHeader headerType="textbtn">
    <div>
      <h5 class="mr-3 font-semibold dark:text-white">Flowbite Users</h5>
      <p class="text-gray-500 dark:text-gray-400">Manage all your existing users or add a new one</p>
    </div>
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-2 -ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /></svg>
      Add new user
    </Button>
  </TableHeader>
</Section>
```

<CompoAttributesViewer {components}/>
