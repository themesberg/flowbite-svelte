---
layout: carouselLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
  import NavCard from '../utils/NavCard.svelte';
	
	let crumbs = [
    { label:'Home', href:'/' },
    { label:'Carousels', href:'/carousels/'}
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Carousels</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Carousel Components</h1>

<div class="flex gap-2">
	<NavCard img="/images/carousel.webp" color="blue" href="/carousels/default">
    CAROUSEL
  </NavCard>
	<NavCard img="/images/carousel.webp" color="blue" href="/carousels/transition">
    CAROUSEL TRANSITION
  </NavCard>
</div>
