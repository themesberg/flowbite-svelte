---
layout: dropdownLayout
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
      label:'Dropdown',
      href:'/dropdowns/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Dropdown Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/dropdown.webp" header="DEFAULT" link="/dropdowns/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/dropdown.webp" btnColor="green" header="IMAGE DROPDOWN" link="/dropdowns/image" btnLabel="Read more" />
</div>
