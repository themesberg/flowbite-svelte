---
layout: ratingLayout
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
      label:'Ratings',
      href:'/ratings/'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Rating Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/rating.webp" btnColor="blue" header="Rating" link="/ratings/rating" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/rating.webp" btnColor="red" header="Advanced rating" link="/ratings/advanced-rating" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/rating.webp" btnColor="green" header="Score rating" link="/ratings/score-rating" btnLabel="Read more" />
</div>
