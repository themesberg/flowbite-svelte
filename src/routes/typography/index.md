---
layout: progressbarLayout
---

<script>
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
	import { Breadcrumb, BreadcrumbItem } from '$lib';
	import { Home } from 'svelte-heros';
</script>


<Breadcrumb>
	<BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
	<BreadcrumbItem>Typography</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Typography</h1>

<CompoDescription>Use the typography and the utility classes from Tailwind CSS to style text with FlowBite</CompoDescription>

The typography for FlowBite is completely based on the utility classes from Tailwind CSS.

We have listed some of the commonly used typography classes that we use throughout the FlowBite UI, however, you can also check out all of the utility classes on the <a class="link" href="https://tailwindcss.com/docs/font-family">Tailwind CSS documentation</a> directly.

<Htwo label="Font Size" />

Use the following text-size utility classes from Tailwind to set the font size for any text element.

<ExampleDiv>
	<p class="text-xs dark:text-white">Flowbite</p>
	<p class="text-sm dark:text-white">FlowBite</p>
	<p class="text-base dark:text-white">FlowBite</p>
	<p class="text-lg dark:text-white">FlowBite</p>
	<p class="text-xl dark:text-white">FlowBite</p>
	<p class="text-2xl dark:text-white">FlowBite</p>
	<p class="text-3xl dark:text-white">FlowBite</p>
	<p class="text-4xl dark:text-white">FlowBite</p>
	<p class="text-5xl dark:text-white">FlowBite</p>
	<p class="text-6xl dark:text-white">FlowBite</p>
	<p class="text-7xl dark:text-white">FlowBite</p>
	<p class="text-8xl dark:text-white">FlowBite</p>
	<p class="text-9xl dark:text-white">FlowBite</p>
</ExampleDiv>

```html
<p class="text-xs dark:text-white">Flowbite</p>
<p class="text-sm dark:text-white">FlowBite</p>
<p class="text-base dark:text-white">FlowBite</p>
<p class="text-lg dark:text-white">FlowBite</p>
<p class="text-xl dark:text-white">FlowBite</p>
<p class="text-2xl dark:text-white">FlowBite</p>
<p class="text-3xl dark:text-white">FlowBite</p>
<p class="text-4xl dark:text-white">FlowBite</p>
<p class="text-5xl dark:text-white">FlowBite</p>
<p class="text-6xl dark:text-white">FlowBite</p>
<p class="text-7xl dark:text-white">FlowBite</p>
<p class="text-8xl dark:text-white">FlowBite</p>
<p class="text-9xl dark:text-white">FlowBite</p>
```

<Htwo label="Font Weight " />

Use the following font-weight utility classes to set the font weight for any text element.

<ExampleDiv>
	<p class="font-thin dark:text-white">FlowBite</p>
	<p class="font-extralight dark:text-white">FlowBite</p>
	<p class="font-light dark:text-white">FlowBite</p>
	<p class="font-normal dark:text-white">FlowBite</p>
	<p class="font-medium dark:text-white">FlowBite</p>
	<p class="font-semibold dark:text-white">FlowBite</p>
	<p class="font-bold dark:text-white">FlowBite</p>
	<p class="font-extrabold dark:text-white">FlowBite</p>
	<p class="font-black dark:text-white">FlowBite</p>
</ExampleDiv>

```html
<p class="font-thin dark:text-white">FlowBite</p>
<p class="font-extralight dark:text-white">FlowBite</p>
<p class="font-light dark:text-white">FlowBite</p>
<p class="font-normal dark:text-white">FlowBite</p>
<p class="font-medium dark:text-white">FlowBite</p>
<p class="font-semibold dark:text-white">FlowBite</p>
<p class="font-bold dark:text-white">FlowBite</p>
<p class="font-extrabold dark:text-white">FlowBite</p>
<p class="font-black dark:text-white">FlowBite</p>
```

<Htwo label="Line Height" />

Use the following leading-type utility classes to set the line height for any text element.

<ExampleDiv>
	<p class="leading-none dark:text-gray-400">Themesberg was created to bring quality ...</p>
	<p class="leading-tight dark:text-gray-400">Themesberg was created to bring quality ...</p>
	<p class="leading-snug dark:text-gray-400">Themesberg was created to bring quality ...</p>
	<p class="leading-normal dark:text-gray-400">Themesberg was created to bring quality ...</p>
	<p class="leading-relaxed dark:text-gray-400">Themesberg was created to bring quality ...</p>
	<p class="leading-loose dark:text-gray-400">Themesberg was created to bring quality ...</p>
</ExampleDiv>

```html
<p class="leading-none dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-tight dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-snug dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-normal dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-relaxed dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-loose dark:text-gray-400">Themesberg was created to bring quality ...</p>
```

<Htwo label="Lists" />

Use the following code to create list items with ordered and unordered lists.

<ExampleDiv>
.list-disc
	<ul class="list-disc dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
.list-decimal
	<ol class="list-decimal dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ol>
.list-default
	<ul class="dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
</ExampleDiv>

```html
.list-disc
	<ul class="list-disc dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
.list-decimal
	<ol class="list-decimal dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ol>
.list-default
	<ul class="dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
```

<Htwo label="List position" />

Use the list-inside and list-outside classes to set the list item position inside a list component.

<ExampleDiv>
.list-inside
	<ul class="list-disc list-inside dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
.list-outside
	<ul class="list-disc list-outside dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
</ExampleDiv>

```html
.list-inside
	<ul class="list-disc list-inside dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
.list-outside
	<ul class="list-disc list-outside dark:text-gray-400">
		<li>Design</li>
		<li>Develop</li>
		<li>Test</li>
	</ul>
```

<Htwo label="Text Decoration" />

You can use the following classes to set the text decoration for any inline text element.

<ExampleDiv>
<p class="underline dark:text-gray-400">please read our terms and services</p>
<p class="line-through dark:text-gray-400">please read our terms and services</p>
</ExampleDiv>

```html
<p class="underline dark:text-gray-400">please read our terms and services</p>
<p class="line-through dark:text-gray-400">please read our terms and services</p>
```

