---
layout: accordionLayout
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
      label:'Accordions',
      href:'/accordions/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Accordion Components</h1>
<div class="p-4">
	<Card {divClass} img="/images/accordions.webp" btnColor="green" header="DEFAULT ACCORDION" link="/accordions/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/accordions.webp" btnColor="blue" header="ICON ACCORDION" link="/accordions/icon-accordion" btnLabel="Read more" />
</div>

