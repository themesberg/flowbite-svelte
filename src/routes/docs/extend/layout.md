---
layout: componentLayout
title: Svelte Layout - Flowbite
breadcrumb_title: Layout
component_title: Layout
dir: Extend
description: Use Layout to control layout
---

## Example


```svelte example
<script>
  import {LayoutWrapper, Navbar, PageContent, PageFooter, PageHeader, SidebarLeft, SidebarRight, Footer } from '$lib'
</script>
<div style="display: contents" class="h-full overflow-hidden">
<LayoutWrapper class="bg-gray-300">
  <Navbar slot="layoutHeader" class="h-24 bg-blue-100">
  Navbar component
  </Navbar>
  <SidebarLeft class="bg-red-100 w-40 p-4">
    SidebarLeft component
  </SidebarLeft>
  <PageContent class="h-80 bg-green-100 p-4">
    PageContent component
    <Navbar slot="pageHeader" class="h-16">
      Navbar component
    </Navbar>
    <Footer slot="pageFooter" class="h-16 rounded-none">
      Footer component
    </Footer>
  </PageContent>
  <SidebarRight class="bg-violet-100 w-40 p-4">
    SidebarRight component
  </SidebarRight>
	<Footer slot="layoutFooter" class="h-24 bg-lime-100 rounded-none">
    Footer component
  </Footer>
</LayoutWrapper>
</div>
```

```svelte example
<script>
  import {LayoutWrapper, Navbar, PageContent, PageFooter, PageHeader, SidebarLeft, SidebarRight, Footer } from '$lib'
</script>
<div style="display: contents" class="h-full overflow-hidden">
<LayoutWrapper class="bg-gray-300">
  <Navbar slot="layoutHeader" class="h-24 bg-blue-100">
  Navbar component
  </Navbar>
  <SidebarLeft class="bg-red-100 w-40 p-4">
    SidebarLeft component
  </SidebarLeft>
  <PageContent class="h-80 bg-green-100 p-4">
    PageContent component
    <Navbar slot="pageHeader" class="h-16">
      Navbar component
    </Navbar>
    <Footer slot="pageFooter" class="h-16 rounded-none">
      Footer component
    </Footer>
  </PageContent>
	<Footer slot="layoutFooter" class="h-24 bg-lime-100 rounded-none">
    Footer component
  </Footer>
</LayoutWrapper>
</div>
```


```svelte example
<script>
  import {LayoutWrapper, Navbar, PageContent, PageFooter, PageHeader, SidebarLeft, SidebarRight, Footer } from '$lib'
</script>
<div style="display: contents" class="h-full overflow-hidden">
<LayoutWrapper class="bg-gray-300">
  <Navbar slot="layoutHeader" class="h-24 bg-blue-100">
  Navbar component
  </Navbar>
  <PageContent class="h-80 bg-green-100 p-4">
    PageContent component
  </PageContent>
  <SidebarRight class="bg-violet-100 w-40 p-4">
    SidebarRight component
  </SidebarRight>
	<Footer slot="layoutFooter" class="h-24 bg-lime-100 rounded-none">
    Footer component
  </Footer>
</LayoutWrapper>
</div>
```