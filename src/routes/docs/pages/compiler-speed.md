---
layout: componentLayout
breadcrumb_title: Compiler Speed - Flowbite Svelte
title: Compiler Speed - Flowbite Svelte
component_title: Compiler Speed
dir: Pages
description: Learn how you can manage and improve the Svelte compilation speed when using the Flowbite Svelte library by checking out this tutorial
---

<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from '$lib'
  
</script>

If your Svelte app only requires a few components, it's recommended that you import them directly. Doing so can help optimize compilation speed and improve performance by reducing the amount of code that needs to be processed during compilation. Since version 0.34.1, it's now possible to import individual components.

```
  import Alert from 'flowbite-svelte/Alert.svelte'
```

## Speed comparisons

<Table class="my-8">
  <TableHead>
    <TableHeadCell>Files</TableHeadCell>
    <TableHeadCell>Time</TableHeadCell>
    <TableHeadCell>Avg</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>3.3ms</TableBodyCell>
      <TableBodyCell>3.3ms</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>2</TableBodyCell>
      <TableBodyCell>9.0ms</TableBodyCell>
      <TableBodyCell>4.5ms</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>7</TableBodyCell>
      <TableBodyCell>20.7ms</TableBodyCell>
      <TableBodyCell>3.0ms</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>7</TableBodyCell>
      <TableBodyCell>60.6ms</TableBodyCell>
      <TableBodyCell>8.7ms</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

The above table shows examples from using `import Alert from 'flowbite-svelte/Alert.svelte'`. Compare these numbers to the following table where using normal import.

<Table class="my-8">
  <TableHead>
    <TableHeadCell>Files</TableHeadCell>
    <TableHeadCell>Time</TableHeadCell>
    <TableHeadCell>Avg</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>151</TableBodyCell>
      <TableBodyCell>1.10s</TableBodyCell>
      <TableBodyCell>7.3ms</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>154</TableBodyCell>
      <TableBodyCell>0.40s</TableBodyCell>
      <TableBodyCell>2.6ms</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>151</TableBodyCell>
      <TableBodyCell>1.04s</TableBodyCell>
      <TableBodyCell>6.9ms</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>154</TableBodyCell>
      <TableBodyCell>1.32s</TableBodyCell>
      <TableBodyCell>8.8ms</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
