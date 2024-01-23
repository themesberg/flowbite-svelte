<script>
	import { Card, Button } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import { ArrowRightOutline, GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';

	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Cards</h1>

<h2>Default card</h2>

<CodeWrapper>
	<Card href="/cards">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
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
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button class="w-fit">
			Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
		</Button>
	</Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/card2.md']} />

<h2>Card with link </h2>

<CodeWrapper>
<Card>
	<GiftBoxSolid class="w-7 h-7 mb-3 text-gray-500 dark:text-gray-400" />
	<a href="/">
	  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
	</a>
	<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
	<a href="/" class="inline-flex items-center text-primary-600 hover:underline">
	  See our guideline
	  <ArrowUpRightFromSquareOutline class="w-3 h-3 ms-2.5" />
	</a>
</Card>
</CodeWrapper>

<h2>Card with image</h2>


<Card src="/images/image-1.webp" reverse={true}>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
	<Button>
	  Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
	</Button>
</Card>


<Card src="/images/image-1.webp" href="/" horizontal size="md">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>


<Card class="text-center" size="lg" padding="xl">
	<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
	<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
	<div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
	  <Button>Download it</Button>
	  <Button>Get it on</Button>
	</div>
  </Card>