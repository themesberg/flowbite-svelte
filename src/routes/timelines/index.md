---
layout: timelineLayout
---

<script>
	import { Card, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Timelines</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Timeline Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/timeline.webp" btnColor="red" header="Default" link="/timelines/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/timeline.webp" btnColor="green" header="Vertical" link="/timelines/vertical" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/timeline.webp" btnColor="purple" header="Horizontal" link="/timelines/horizontal" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/timeline.webp" btnColor="pink" header="Activity" link="/timelines/activity" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/timeline.webp" btnColor="indigo" header="Group" link="/timelines/group" btnLabel="Read more" />
</div>
