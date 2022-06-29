---
layout: badgeLayout
---

<script>
	import { Card, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Badges</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Badge Components</h1>
<div class="p-4">
	<Card {divClass} img="/images/badges.webp" btnColor="pink" header="DEFAULT" link="/badges/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/badges.webp" btnColor="green" header="BADGE WITH ICON" link="/badges/badge-icon" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/badges.webp" btnColor="blue" header="BADGE WITH LINK" link="/badges/badge-link" btnLabel="Read more" />
</div>

