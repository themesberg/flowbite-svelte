<script>
	import { Banner, Skeleton, ImagePlaceholder } from '$lib';
	import {
		BullhornSolid,
		SalePercentSolid,
		ArrowRightSolid,
		OpenBookSolid
	} from 'flowbite-svelte-icons';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Banner</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default sticky banner</h2>

<CodeWrapper class="relative">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="py-4" />

	<Banner id="default-banner" position="absolute">
		<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
			<span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
				<BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
				<span class="sr-only">Light bulb</span>
			</span>
			<span>
				New brand identity has been launched for the <a
					href="https://flowbite.com"
					class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500"
				>
					Flowbite Library
				</a>
			</span>
		</p>
	</Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultsticky.md']} />

<h2>Bottom banner position</h2>

<CodeWrapper class="relative">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="py-4" />

	<Banner id="bottom-banner" position="absolute" bannerType="bottom">
		<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
			<span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
				<SalePercentSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
				<span class="sr-only">Discount coupon</span>
			</span>
			<span>
				Get 5% commission per sale <a
					href="https://flowbite.com"
					class="ms-0 flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 md:ms-1 md:inline-flex"
				>
					Become a partner <ArrowRightSolid class="ms-2 h-3 w-3" />
				</a>
			</span>
		</p>
	</Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/bottombanner.md']} />

<h2>Marketing CTA banner</h2>

<CodeWrapper class="relative">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="py-4" />

	<Banner id="cta-banner" position="absolute" bannerType="cta">
		<a
			href="https://flowbite-svelte.com/"
			class="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:me-4 md:border-e md:pe-4"
		>
			<img
				src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg"
				class="me-2 h-6"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-lg font-semibold dark:text-white"
				>Flowbite</span
			>
		</a>
		<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
			Build websites even faster with components on top of Tailwind CSS
		</p>
	</Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/marketing.md']} />

<h2>Newsletter sign-up banner</h2>

<CodeWrapper class="relative">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="py-4" />

	<Banner id="signup-banner" position="absolute" bannerType="signup">
		<form action="/" class="flex w-full flex-col items-center md:flex-row">
			<label
				for="email"
				class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0 md:me-4"
			>
				Sign up for our newsletter
			</label>
			<input
				type="email"
				id="email"
				placeholder="Enter your email"
				class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 md:mb-0 md:me-4 md:w-64"
				required
			/>
			<button
				type="submit"
				class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
			>
				Subscribe
			</button>
		</form>
	</Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/newsletter.md']} />

<h2>Informational banner</h2>

<CodeWrapper class="relative">
	<Banner id="info-banner" position="absolute" bannerType="info">
		{#snippet header()}
			<div class="mb-4 md:mb-0 md:me-4">
				<h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">
					Integration is the key
				</h2>
				<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
					You can integrate Flowbite with many tools.
				</p>
			</div>
		{/snippet}
		<a
			href="/"
			class="me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
		>
			<OpenBookSolid class="me-2 h-3 w-3" />
			Learn more
		</a>
		<a
			href="/"
			class="me-2 inline-flex rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		>
			Get started <ArrowRightSolid class="ms-2 h-3 w-3" />
		</a>
	</Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/informational.md']} />
