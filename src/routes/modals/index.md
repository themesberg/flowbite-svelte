---
layout: modalLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index';
  	import { Home } from 'svelte-heros'
	import NavCard from "../utils/NavCard.svelte";
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Modals</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Modal Components</h1>
<div class="flex gap-2 flex-wrap">
	<NavCard img="/images/modals.webp" color="blue" href="/modals/all-modals">All Modals</NavCard>
	<NavCard img="/images/modals.webp" color="red" href="/modals/small">Small Modals</NavCard>
	<NavCard img="/images/modals.webp" color="green" href="/modals/medium">Medium Modals</NavCard>
	<NavCard img="/images/modals.webp" color="purple" href="/modals/large">Large Modals</NavCard>
	<NavCard img="/images/modals.webp" color="blue" href="/modals/extra-large">Extra-large</NavCard>
	<NavCard img="/images/modals.webp" color="red" href="/modals/signin">Signin Modals</NavCard>
</div>