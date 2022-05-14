---
layout: navbarLayout
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
      label:'Navbar',
      href:'/navbars/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Navbar Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/navbar.webp" btnColor="pink" header="DEFAULT NAVBAR" link="/navbars/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/navbar.webp" btnColor="gray" header="DROPDOWN NAVBAR" link="/navbars/dropdown" btnLabel="Read more" />
</div>
