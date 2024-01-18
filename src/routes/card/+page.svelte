<script>
	import { Card, Button } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';

	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true })

	import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<h1>Cards</h1>

<h2>Default card</h2>

<CodeWrapper>
<Card href="/cards">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		Noteworthy technology acquisitions 2021
	</h5>
	<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</p>
</Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/card1.md']} />

<h2>Card with action button</h2>

<CodeWrapper>
<Card>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		Noteworthy technology acquisitions 2021
	</h5>
	<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</p>
	<Button class="w-fit">
		Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
	</Button>
</Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/card2.md']} />
