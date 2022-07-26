---
layout: ratingLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  	import { Home } from 'svelte-heros';
	import NavCard from "../utils/NavCard.svelte"
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Ratings</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Rating Components</h1>

<div class="flex flex-wrap gap-4">
	<NavCard img="/images/rating.webp" color="blue" href="/ratings/rating">Rating</NavCard>
	<NavCard img="/images/rating.webp" color="red" href="/ratings/advanced-rating">Advanced rating</NavCard>
	<NavCard img="/images/rating.webp" color="green" href="/ratings/score-rating">Score rating</NavCard>
</div>
