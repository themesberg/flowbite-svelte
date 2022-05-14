---
layout: tooltipLayout
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
      label:'Tooltips',
      href:'/tooltips/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Tooltip Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/tooltip.webp" btnColor="green" header="Default Tooltip" link="/tooltips/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tooltip.webp" btnColor="pink" header="Light Tooltip" link="/tooltips/light" btnLabel="Read more" />
</div>
