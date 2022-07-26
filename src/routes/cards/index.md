---
layout: cardLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  	import { Home } from 'svelte-heros';
	import NavCard from "../utils/NavCard.svelte"
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Card</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Card Components</h1>
<div class="flex flex-wrap gap-4">
	<NavCard img="/images/cards.webp" color="blue" link="/cards/card">CARD</NavCard>
	<NavCard img="/images/cards.webp" color="green" link="/cards/cta">CTA card</NavCard>
	<NavCard img="/images/cards.webp" color="red" link="/cards/ecommerce">ECOMMERCE card</NavCard>
	<NavCard img="/images/cards.webp" color="gray" link="/cards/interactive">INTERACTIVE card</NavCard>
	<NavCard img="/images/cards.webp" color="yellow" link="/cards/horizontal">HORIZONTAL card</NavCard>
	<NavCard img="/images/cards.webp" color="purple" link="/cards/list">LIST card</NavCard>
</div>
