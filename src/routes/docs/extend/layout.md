---
layout: componentLayout
title: Svelte App Layout - Flowbite
breadcrumb_title: App Layout
component_title: App Layout
dir: Extend
description: Use App Layout to control layout
---


## Example


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
  <SidebarLeft class="bg-red-100">
    Sidebar left
  </SidebarLeft>
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