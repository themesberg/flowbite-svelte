---
layout: accordionLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  	import { Home } from 'svelte-heros';
	import NavCard from '../utils/NavCard.svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Accordions</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Accordion Components</h1>
<div class="flex gap-2">
	<NavCard img="/images/accordions.webp" href="/accordions/default" color="green">Default accordion</NavCard>
	<NavCard img="/images/accordions.webp" href="/accordions/icon-accordion" color="blue">Icon accordion</NavCard>
</div>