<script lang="ts">
	import { Button, Card, Carousel } from 'flowbite-svelte';
	import {
		ArrowLeftOutline,
		ArrowRightOutline,
		CheckCircleSolid,
		CheckOutline,
		FireSolid,
		LayersSolid,
		RocketSolid
	} from 'flowbite-svelte-icons';
	import { fade, fly } from 'svelte/transition';
	const items = [{}, {}, {}];
	let animation = (node: Element) => fade(node, { duration: 200 });

	let transitionSlideIn = {
		x: '100%',
		opacity: 0.5,
		duration: 500
	};

	let transitionSlideOut = {
		x: '-100%',
		opacity: 0.5,
		duration: 500
	};
</script>

<Card size="xl">
	<Carousel images={items} let:Controls class="flex h-full">
		<div slot="slide" let:index>
			{#if index == 0}
				<div in:fly={transitionSlideIn} out:fly={transitionSlideOut} class="h-full">
					<div class="mb-4 flex items-center gap-2 text-lg font-medium text-primary-600">
						<LayersSolid /><span>Insights</span>
					</div>
					<h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
						You are going to grow by 44% next year
					</h3>
					<p class="mb-4 text-gray-500 dark:text-gray-400">
						Get started with a free and open-source admin dashboard layout built with Tailwind CSS
						and Flowbite featuring charts, widgets, CRUD layouts, authentication pages, and more
					</p>
					<p class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Key Takeaways:</p>
					<ul class="mb-4 list-disc space-y-3 pl-4 text-gray-500 dark:text-gray-400">
						<li>
							What are the new challenges in the delivery industry due to new consumer expectations.
						</li>
						<li>How the online delivery business model is diversifying to meet new demands.</li>
						<li>
							Which new technology requirements must be met to ensure true retail experiences.
						</li>
					</ul>
				</div>
			{:else if index == 1}
				<div in:fly={transitionSlideIn} out:fly={transitionSlideOut} class="h-full">
					<div class="mb-4 flex items-center text-lg font-medium text-teal-500">
						<RocketSolid class="me-2" /> Tips to grow
					</div>
					<p class="mb-4 text-gray-500 dark:text-gray-400">
						Marketing, sales &amp; business growth for small business. Improve your marketing &amp;
						promotion results - and grow your sales!
					</p>
					<p class="mb-4 text-lg font-medium text-gray-900 dark:text-white">What you'll learn:</p>
					<ul role="list" class="mb-4 list-disc space-y-3 pl-2 text-gray-500 dark:text-gray-400">
						<li class="flex items-center space-x-2">
							<CheckOutline size="lg" />
							<span class="leading-tight">Dynamic reports and dashboards</span>
						</li>
						<li class="flex space-x-2">
							<CheckOutline size="lg" />
							<span class="leading-tight"
								>Learn from competitors about what to do, and not to do</span
							>
						</li>
						<li class="flex space-x-2">
							<CheckOutline size="lg" />
							<span class="leading-tight">Take their business to the next level</span>
						</li>
						<li class="flex space-x-2">
							<CheckOutline size="lg" />
							<span class="leading-tight">Limitless business automation</span>
						</li>
						<li class="flex space-x-2">
							<CheckOutline size="lg" />
							<span class="leading-tight"
								>Build relationships with other businesses to co-promote</span
							>
						</li>
						<li class="flex space-x-2">
							<CheckOutline size="lg" />
							<span class="leading-tight">Make their customers feel loved and apprecaited</span>
						</li>
					</ul>
					<a
						href="#top"
						class="inline-flex items-center rounded-lg p-2 font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
					>
						Let's start <ArrowRightOutline size="sm" class="ms-2" />
					</a>
				</div>
			{:else}
				<div in:fly={transitionSlideIn} out:fly={transitionSlideOut} class="h-full">
					<div class="mb-4 flex items-center text-lg font-medium text-purple-600">
						<FireSolid class="me-2" />Features
					</div>
					<h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
						Go next level with Flowbite
					</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Deliver great service experiences fast - without the complexity of traditional ITSM
						solutions.Accelerate critical development work, eliminate toil, and deploy changes with
						ease.
					</p>
					<!-- List -->
					<ul
						role="list"
						class="my-5 mb-4 list-disc space-y-3 pl-2 text-gray-500 dark:text-gray-400"
					>
						<li class="flex items-center space-x-3">
							<CheckCircleSolid class="text-purple-600 dark:text-purple-500" size="sm" />
							<span class="leading-tight">Dynamic reports and dashboards</span>
						</li>
						<li class="flex items-center space-x-3">
							<CheckCircleSolid class="text-purple-600 dark:text-purple-500" size="sm" />
							<span class="leading-tight">Templates for everyone</span>
						</li>
						<li class="flex items-center space-x-3">
							<CheckCircleSolid class="text-purple-600 dark:text-purple-500" size="sm" />
							<span class="leading-tight">Development workflow</span>
						</li>
						<li class="flex items-center space-x-3">
							<CheckCircleSolid class="text-purple-600 dark:text-purple-500" size="sm" />
							<span class="leading-tight">Limitless business automation</span>
						</li>
					</ul>
					<Button color="alternative" size="sm">
						View more <ArrowRightOutline size="sm" class="ms-2" />
					</Button>
				</div>
			{/if}
		</div>
		<Controls let:changeSlide>
			<div class="-mt-2 flex items-center justify-center gap-5">
				<button on:click={() => changeSlide(false)}><ArrowLeftOutline size="lg" /></button>
				<button on:click={() => changeSlide(true)}><ArrowRightOutline size="lg" /></button>
			</div>
		</Controls>
	</Carousel>
</Card>
