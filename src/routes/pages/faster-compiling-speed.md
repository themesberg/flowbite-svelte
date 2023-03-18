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
  import { A, P, List, Li, Breadcrumb, BreadcrumbItem, Alert, Heading } from '$lib'
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

Using `import Alert from 'flowbite-svelte/Alert.svelte'`.

| files | time | avg |
|--|--|--|
| 1 | 3.3ms | 3.3ms |
| 2 | 9.0ms | 4.5ms |
| 7 | 20.7ms | 3.0ms |
| 7 | 60.6ms | 8.7ms |
| 7 | 20.4ms | 2.9ms |

Compare to the following examples using `import { Alert} from 'flowbite-svelte'`

| files | time | avg |
|--|--|--|
| 151 | 1.10s | 7.3ms |
| 154 | 0.40s | 2.6ms |
| 151 | 1.04s | 6.9ms |
| 151 | 1.32s | 8.8ms |
| 154 | 0.24s | 1.6ms |

