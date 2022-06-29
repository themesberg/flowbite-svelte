---
layout: tabLayout
---

<script>
	import { Card, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Tabs</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Tab Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="green" header="Default Tabs" link="/tabs/default-tabs" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="indigo" header="Interactive Tabs" link="/tabs/interactive-tabs" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="blue" header="Interactive Tabs 2" link="/tabs/interactive-tabs-2" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="red" header="Multiple Interactive Tabs" link="/tabs/multiple-interactive-tabs" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="purple" header="Pill Tabs" link="/tabs/pilltabs" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="pink" header="Full width Tabs" link="/tabs/full-width-tabs" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="yellow" header="Icon Tabs" link="/tabs/icon-tabs" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/tabs.webp" btnColor="green" header="Underline Tabs" link="/tabs/underline-tabs" btnLabel="Read more" />
</div>
