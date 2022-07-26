---
layout: formLayout
---

<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  	import { Home } from 'svelte-heros';
	import NavCard from "../utils/NavCard.svelte";
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Forms</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Form Components</h1>
<div class="flex space-x-1 space flex-wrap">
	<NavCard img="/images/forms.webp" href="/forms/checkbox">CHECKBOX</NavCard>
	<NavCard img="/images/forms.webp" color="green" href="/forms/file-input">FILE input</NavCard>
	<NavCard img="/images/forms.webp" color="red" href="/forms/floating-label">FLOATING label</NavCard>
	<NavCard img="/images/forms.webp" color="yellow" href="/forms/input-field">INPUT</NavCard>
	<NavCard img="/images/forms.webp" color="light" href="/forms/radio">RADIO</NavCard>
	<NavCard img="/images/forms.webp" color="blue" href="/forms/range">RANGE</NavCard>
	<NavCard img="/images/forms.webp" color="purple" href="/forms/search-input">SEARCH</NavCard>
	<NavCard img="/images/forms.webp" color="yellow" href="/forms/select">SELECT</NavCard>
	<NavCard img="/images/forms.webp" color="green" href="/forms/textarea">TEXTAREA</NavCard>
	<NavCard img="/images/forms.webp" color="red" href="/forms/toggle">TOGGLE</NavCard>
</div>
