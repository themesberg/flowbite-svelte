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

<P class='mb-8'>If you need only a few components in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.</P>


```html
<script>
  import Alert from 'flowbite-svelte/Alert.svelt'
<script>

<div class="p-8">
  <Alert>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </Alert>
</div>
```



