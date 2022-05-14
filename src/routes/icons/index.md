---
layout: iconLayout
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
      label:'Icons',
      href:'/icons/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Icon Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/icons.webp" btnColor="indigo" header="HEROICONS" link="/icons/heroicons" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/icons.webp" btnColor="pink" header="SIMPLE ICONS" link="/icons/simple-icons" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/icons.webp" btnColor="green" header="FEATHER ICONS" link="/icons/feathericons" btnLabel="Read more" />
</div>
