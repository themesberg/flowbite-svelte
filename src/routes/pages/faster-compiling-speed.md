---
layout: pageLayout
breadcrumb_title: Faster Compiling Speed
title: Faster Compiling Speed
dir: Pages
description: Flowbite-Svelte Faster Compiling Speed
---
<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv , MetaTag } from '../utils'
  import { A, P, List, Li, Breadcrumb, BreadcrumbItem, Alert, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from '$lib'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<P class='mb-8'>If your Svelte app only requires a few components, it's recommended that you import them directly. Doing so can help optimize compilation speed and improve performance by reducing the amount of code that needs to be processed during compilation. Since version 0.34.1, it's now possible to import individual components.</P>


```html
<script>
  import Alert from 'flowbite-svelte/Alert.svelte'
<script>

<div class="p-8">
  <Alert>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </Alert>
</div>
```

<Htwo label="Requirements" />

If you are a TypeScript user, install typescript version 5.0.0 or above.

As of March 2023, the typescript@beta version is now available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add node16 or nodenext to moduleResolution in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```


<Htwo label="Speed comparisons" />

<Table class="my-8">
  <TableHead>
    <TableHeadCell>Files</TableHeadCell>
    <TableHeadCell>Time</TableHeadCell>
    <TableHeadCell>Avg</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
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

<P>The above table shows examples from using `import Alert from 'flowbite-svelte/Alert.svelte'`. Compare these numbers to the following table where using normal import.</P>

<Table class="my-8">
  <TableHead>
    <TableHeadCell>Files</TableHeadCell>
    <TableHeadCell>Time</TableHeadCell>
    <TableHeadCell>Avg</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
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
