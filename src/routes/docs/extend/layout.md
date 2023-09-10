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
  import {LayoutWrapper, LayoutHeader, PageContent, PageFooter, PageHeader, SidebarLeft, SidebarRight, Footer } from '$lib'
</script>
<div style="display: contents" class="h-full overflow-hidden">
<LayoutWrapper 
  class="bg-gray-300" 
  >
  <LayoutHeader slot="layoutHeader" class="h-24 bg-blue-100">
  Layout Header
  </LayoutHeader>
  <SidebarLeft class="bg-red-100">
    Sidebar left
  </SidebarLeft>
  <PageContent class="h-80 bg-green-100">
    Page content
    <PageHeader slot="pageHeader" class="h-16">
      Page Header
    </PageHeader>
    <Footer slot="pageFooter" class="h-16 rounded-none">
      Page Footer
    </Footer>
  </PageContent>
  <SidebarRight class="bg-violet-100">
    Sidebar right
  </SidebarRight>
	<Footer slot="layoutFooter" class="h-24 bg-lime-100 rounded-none">
    Layout Footer
  </Footer>
</LayoutWrapper>
</div>
```

```svelte example
<script>
  import {LayoutWrapper, LayoutHeader, LayoutFooter, PageContent, PageFooter, PageHeader, SidebarLeft, SidebarRight } from '$lib'
</script>
<div style="display: contents" class="h-full overflow-hidden">
<LayoutWrapper 
  class="bg-gray-300" 
  >
  <LayoutHeader slot="layoutHeader" class="h-24 bg-blue-100">
  Layout Header
  </LayoutHeader>

  <PageContent class="h-80 bg-green-100">
    Page content
  </PageContent>
  <SidebarRight class="bg-violet-100">
    Sidebar right
  </SidebarRight>
	<LayoutFooter slot="layoutFooter" class="h-24 bg-lime-100">
    Layout Footer
  </LayoutFooter>
</LayoutWrapper>
</div>
```