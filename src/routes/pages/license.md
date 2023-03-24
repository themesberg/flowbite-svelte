---
layout: pageLayout
breadcrumb_title: License
title: License
dir: Pages
description: Flowbite-Svelte License page
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
</script>

<Breadcrumb class="pt-28 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<Htwo label="MIT License" />

<h3 class="text-xl dark:text-white w-full pb-4">Copyright (c) 2022 Flowbite-Svelte</h3>

<p class="dark:text-white w-full text-lg py-2">
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
</p>
<p class="dark:text-white w-full text-lg py-2">
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
</p>
<p class="dark:text-white w-full text-lg py-2">
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</p>