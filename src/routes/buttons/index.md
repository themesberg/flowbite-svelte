---
layout: buttonLayout
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
      label:'Buttons',
      href:'/buttons/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="blue" header="DEFAULT" link="/buttons/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="green" header="COLORED SHADOW" link="/buttons/colored-shadow" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="pink" header="GRADIENT DUOTONE" link="/buttons/gradient-duotone" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="purple" header="GRADIENT MONOCHROME" link="/buttons/gradient-monochrome" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="gray" header="GRADIENT OUTLINE" link="/buttons/gradient-outline" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="indigo" header="OUTLINED" link="/buttons/outlined" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="red" header="ROUNDED" link="/buttons/rounded" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/buttons.webp" btnColor="purple" header="LOADER" link="/buttons/button-loader" btnLabel="Read more" />
</div>
