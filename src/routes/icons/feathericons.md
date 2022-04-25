---
layout: iconLayout
---

<script>
  import { Breadcrumb } from '$lib/index'
  import { ActivityIcon, AlertTriangleIcon, AnchorIcon } from '@codewithshin/svelte-feathericons'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Icons',
      href:'/icons/'
    },
    {
      label:'Feather icons',
      href:'/icons/feathericons'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Feathericons</h1>

<p>Flowbite-svelte can use <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-feathericons/tree/main/src/lib" target="_blank">svelte-feathericons</a>.</p>

<p class=" dark:text-white py-4">Svelte-feathericons allow you to change icon color and size.</p>

<h2 class="text-2xl w-full dark:text-white mt-8">Examples</h2>

<p class=" dark:text-white">If you want to change the color add size.</p>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ActivityIcon color="#c61515" size="12" />
<ActivityIcon color="#c61515" size="16" />
<AlertTriangleIcon color="#6dff6b" size="24" />
<AlertTriangleIcon color="#6dff6b" size="28" />
<AnchorIcon color="#23deff" size="32" />
<AnchorIcon color="#23deff" size="36" class="dark:text-red-500"/>
</div>

```html
<script>
  import { ActivityIcon, AlertTriangleIcon, AnchorIcon } from '@codewithshin/svelte-feathericons'
</script>

<ActivityIcon color="#c61515" size="12" />
<ActivityIcon color="#c61515" size="16" />
<AlertTriangleIcon color="#6dff6b" size="24" />
<AlertTriangleIcon color="#6dff6b" size="28" />
<AnchorIcon color="#23deff" size="32" />
<AnchorIcon color="#23deff" size="36" class="dark:text-red-500" />
```

<p>You can also include the whole icon pack:</p>

```html
<script>
  import * as Icon from '@codewithshin/svelte-feathericons';
</script>

<Icon.UnlockIcon color="#6dff6b" size="24" />
```