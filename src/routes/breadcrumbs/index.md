---
layout: breadcrumbLayout
---

<script>
  import { Breadcrumb } from '$lib/index'
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Breadcrumb',
      href:'breadcrumbs/index'
    }
  ]
</script>

<h1 class="text-3xl w-full dark:text-white pb-8">Breadcrumb</h1>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Breadcrumb {crumbs} />
</div>

```html
<script>
  import { Breadcrumb } from '$lib/index'
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Breadcrumb',
      href:'breadcrumbs/index'
    }
  ]
</script>

<Breadcrumb {crumbs} />
```

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Breadcrumb {crumbs} solid/>
</div>