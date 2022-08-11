<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import classNames from 'classnames';
	export let review: {
		name: string;
		imgSrc: string;
		imgAlt: string;
		address: string;
		addressIcon: typeof SvelteComponent;
		reviewDate: string;
		title: string;
		rating: number;
		item: string;
		itemIcon: typeof SvelteComponent;
		option1: string;
		option1Icon: typeof SvelteComponent;
		option2: string;
		option2Icon: typeof SvelteComponent;
	};
</script>

<article class="md:gap-8 md:grid md:grid-cols-3">
	<div>
		<div class="flex items-center mb-6 space-x-4">
			<img class="w-10 h-10 rounded-full" src={review.imgSrc} alt={review.imgAlt} />
			<div class="space-y-1 font-medium dark:text-white">
				<p>{review.name}</p>
				{#if review.address}
					<div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
						{#if review.addressIcon}
							<svelte:component this={review.addressIcon} />
						{/if}
						{review.address}
					</div>
				{/if}
			</div>
		</div>
		{#if review.item || review.option1 || review.option2}
			<ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
				{#if review.item}
					<li class="flex items-center">
						{#if review.itemIcon}
							<svelte:component this={review.addressIcon} />
						{/if}
						{review.item}
					</li>
				{/if}
				{#if review.option1}
					<li class="flex items-center">
						{#if review.option1Icon}
							<svelte:component this={review.option1Icon} />
						{/if}
						{review.option1}
					</li>
				{/if}
				{#if review.option2}
					<li class="flex items-center">
						{#if review.option2Icon}
							<svelte:component this={review.option2Icon} />
						{/if}
						{review.option2}
					</li>
				{/if}
			</ul>
		{/if}
	</div>
	<div class="col-span-2 mt-6 md:mt-0">
		<div class="flex items-start mb-5">
			<div class="pr-4">
				{#if review.date}
					<footer>
						<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
							Reviewed: {review.date}
						</p>
					</footer>
				{/if}
				<h4 class="text-xl font-bold text-gray-900 dark:text-white">
					{review.title}
				</h4>
			</div>
			<p
				class="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
			>
				{review.rating}
			</p>
		</div>
		<slot />
	</div>
</article>
