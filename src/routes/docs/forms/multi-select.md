---
layout: componentLayout
title: Svelte MultiSelect - Flowbite
breadcrumb_title: Svelte MultiSelect
component_title: MultiSelect
dir: Forms
description: Use the MultiSelect component to select multiple items
thumbnailSize: w-72
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { onMount } from 'svelte';
  import { Toggle, Badge, A } from '$lib'
  import { props as items } from '../../props/Toggle.json'

  const events = ["on:change","on:click"];
</script>

The multiSelect component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Setup

```svelte example hideOutput
<script>
  import { MultiSelect } from 'flowbite-svelte'
</script>
```

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte example hideScript class="h-80"
<script>
  import MultiSelect from '../../../lib/forms/MultiSelect.svelte';

  let selected = [];
  let countries = [
    {value:"us", name: "United States"},
    {value:"ca", name: "Canada"},
    {value:"fr", name: "France"},
    {value:"jp", name: "Japan"},
    {value:"en", name: "England"},
  ]
</script>

<MultiSelect items={countries} bind:value={selected} />
```
