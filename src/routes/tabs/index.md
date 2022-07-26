---
layout: tabLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  	import { Home } from 'svelte-heros';
	import NavCard from '../utils/NavCard.svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Tabs</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Tab Components</h1>
<div class="flex flex-wrap gap-4">
	<NavCard img="/images/tabs.webp" color="green" href="/tabs/default-tabs">Default Tabs</NavCard>
	<NavCard img="/images/tabs.webp" color="yellow" href="/tabs/interactive-tabs">Interactive Tabs</NavCard>
	<NavCard img="/images/tabs.webp" color="blue" href="/tabs/interactive-tabs-2">Interactive Tabs 2</NavCard>
	<NavCard img="/images/tabs.webp" color="red" href="/tabs/multiple-interactive-tabs">Multiple Interactive Tabs</NavCard>
	<NavCard img="/images/tabs.webp" color="purple" href="/tabs/pilltabs">Pill Tabs</NavCard>
	<NavCard img="/images/tabs.webp" color="blue" href="/tabs/full-width-tabs">Full width tabs</NavCard>
	<NavCard img="/images/tabs.webp" color="yellow" href="/tabs/icon-tabs">Icon Tabs</NavCard>
	<NavCard img="/images/tabs.webp" color="green" href="/tabs/underline-tabs">Underline Tabs</NavCard>
</div>