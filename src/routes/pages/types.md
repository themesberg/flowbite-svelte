---
layout: pageLayout
breadcrumb_title: Types
title: Types
dir: Pages
description: Flowbite-Svelte Types page
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv , MetaTag } from '../utils'
  import { A, P, List, Li, Breadcrumb, BreadcrumbItem, Alert, Heading } from '$lib'
  // Load assets as strings
  import TypeList from '../../lib/types.js?raw'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<ExampleDiv tag="pre" class="dark:text-white">
{TypeList}
</ExampleDiv>