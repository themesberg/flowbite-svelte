---
layout: buttongroupLayout
---

<script>
	import { Card, Breadcrumb } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
	let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Button groups',
      href:'/button-groups/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button-group Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/buttongroups.webp" btnColor="pink" header="DEFAULT BUTTON GROUP" link="/button-groups/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttongroups.webp" btnColor="green" header="OUTLINE BUTTON GROUP" link="/button-groups/outline" btnLabel="Read more" />
</div>
