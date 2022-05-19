<script>
	import { AccordionFlush, AccordionItem } from '$lib/index';
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	let btnClass = 'flex justify-between items-center py-0 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400';
</script>

<ExampleDiv>
	<AccordionItem id="1" color class="text-xl text-red-500">
		<h2 slot="header">My Header 1</h2>
		<div slot="body">
			<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
			...
		</div>
	</AccordionItem>
	<AccordionItem id="2" color>
		<h2 slot="header">My Header 2</h2>
		<div slot="body">
			<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
			...
		</div>
	</AccordionItem>
</ExampleDiv>

<ExampleDiv>
	<AccordionFlush id="1" {btnClass}>
		<h2 slot="header">Header 2-1</h2>
		<div slot="body">
			<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo, atque temporibus rem iusto, dicta voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum nisi quis perspiciatis.</p>
		</div>
	</AccordionFlush>
	<AccordionFlush id="2" {btnClass}>
		<h2 slot="header">Header 2-2</h2>
		<div slot="body">
			<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo, atque temporibus rem iusto, dicta voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum nisi quis perspiciatis.</p>
		</div>
	</AccordionFlush>
</ExampleDiv>
