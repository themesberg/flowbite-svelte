---
layout: timelineLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  	import { Home } from 'svelte-heros';
	import NavCard from "../utils/NavCard.svelte"
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Timelines</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Timeline Components</h1>

<div class="flex flex-wrap gap-4">
	<NavCard img="/images/timeline.webp" color="red" href="/timelines/default">Default</NavCard>
	<NavCard img="/images/timeline.webp" color="green" href="/timelines/vertical">Vertical</NavCard>
	<NavCard img="/images/timeline.webp" color="purple" href="/timelines/horizontal">Horizontal</NavCard>
	<NavCard img="/images/timeline.webp" color="yellow" href="/timelines/activity">Activity</NavCard>
	<NavCard img="/images/timeline.webp" color="blue" href="/timelines/group">Group</NavCard>
</div>
