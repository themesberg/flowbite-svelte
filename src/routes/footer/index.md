---
layout: footerLayout
---

<script>
	import { Card , Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Footer</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Footer Components</h1>

<div class="p-4">
	<Card {divClass} img="/images/footer.webp" header="DEFAULT" link="/footer/default" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/footer.webp" btnColor="green" header="LOGO FOOTER" link="/footer/logo" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/footer.webp" btnColor="red" header="SOCIALMEDIA" link="/footer/socialmedia" btnLabel="Read more" />
</div>
<div class="p-4">
	<Card {divClass} img="/images/footer.webp" btnColor="blue" header="SITEMAP" link="/footer/sitemap" btnLabel="Read more" />
</div>

