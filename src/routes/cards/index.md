---
layout: cardLayout
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
      label:'Cards',
      href:'/cards/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Card Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/cards.webp" btnColor="blue" header="CARD" link="/cards/card" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/cards.webp" btnColor="green" header="CTA CARD" link="/cards/cta" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/cards.webp" btnColor="red" header="ECOMMERCE CARD" link="/cards/ecommerce" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/cards.webp" btnColor="gray" header="INTERACTIVE CARD" link="/cards/interactive" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/cards.webp" btnColor="purple" header="HORIAONTAL CARD" link="/cards/horizontal" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/cards.webp" btnColor="pink" header="LIST CARD" link="/cards/list" btnLabel="Read more" />
</div>
