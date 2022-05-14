---
layout: modalLayout
---

<script>
	import { Card, Breadcrumb} from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
	let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Modals',
      href:'/modals/'
    },
    
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Modal Components</h1>
<div class="p-4">
	<Card {divClass} img="/images/modals.webp" btnColor="blue" header="All Modals" link="/modals/all-modals" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/modals.webp" btnColor="red" header="Small Modals" link="/modals/small" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/modals.webp" btnColor="green" header="Medium Modals" link="/modals/medium" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/modals.webp" btnColor="purple" header="Large Modals" link="/modals/large" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/modals.webp" btnColor="pink" header="Extra-large Modals" link="/modals/extra-large" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/modals.webp" btnColor="indigo" header="Signin Modals" link="/modals/signin" btnLabel="Read more" />
</div>

