<script lang="ts">
	import { Button, DarkMode, NavBrand, NavHamburger, NavLi, NavUl, Navbar, Toggle } from 'flowbite-svelte';
	import { ArrowLeftToBracketOutline, CloseOutline } from 'flowbite-svelte-icons';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import ComparisonTable from './ComparisonTable.svelte';
	import Faq from './FAQ.svelte';
	import Footer from './Footer.svelte';
	import PriceCard from './PriceCard.svelte';

	let yearly: boolean = false;
	let prices: string[][] = [
		['$24', '$200'],
		['$49', '$400'],
		['$499', '$1500']
	];
	$: period = yearly ? 'year' : 'month';

	const path: string = '/pages/pricing';
  const description: string = 'Pricing examaple - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - Pricing';
  const subtitle: string = 'Pricing';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<Navbar
	class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 px-2 py-1 dark:border-gray-700 sm:px-4"
	color="dark"
>
	<NavBrand href="/">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl class="me-auto ms-8">
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/">Team</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
	<div class="py-4">
		<DarkMode />
		<Button class="gap-2 px-3"><ArrowLeftToBracketOutline />Login/Register</Button>
	</div>
</Navbar>
<main class="mx-auto bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto px-4 pt-24 dark:bg-gray-900 md:pt-32 lg:px-0">
		<h1
			class="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight"
		>
			Our pricing plan made simple
		</h1>
		<p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
			All types of businesses need access to development resources, so we give you the option to
			decide how much you need to use.
		</p>
		<div class="flex items-center">
			<span class="text-base font-medium text-gray-900 dark:text-white"> Monthly</span>
			<Toggle class="ms-3" classDiv="peer-focus:ring-0" bind:checked={yearly} />
			<span class="text-base font-medium text-gray-900 dark:text-gray-400"> Yearly </span>
		</div>
		<section
			class="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:gap-x-6 md:space-y-0 lg:grid-cols-3"
		>
			<PriceCard title="Starter" price={prices[0][+yearly]} {period} let:Item>
				<svelte:fragment slot="subtitle">
					Best option for personal use and for your next project.
				</svelte:fragment>
				<Item>Individual configuration</Item>
				<Item>No setup, or hidden fees</Item>
				<Item>Team size: <span class="font-semibold">1 developer</span></Item>
				<Item>
					<CloseOutline slot="icon" class="text-red-500 dark:text-red-400" />
					Premium support
				</Item>
				<Item>
					<CloseOutline slot="icon" class="text-red-500 dark:text-red-400" />
					Free updates
				</Item>
			</PriceCard>
			<PriceCard title="Company" price={prices[1][+yearly]} {period} let:Item>
				<svelte:fragment slot="subtitle">
					Relevant for multiple users, extended & premium support.
				</svelte:fragment>
				<Item>Individual configuration</Item>
				<Item>No setup, or hidden fees</Item>
				<Item>Team size: <span class="font-semibold">10 developers</span></Item>
				<Item>Premium support: <span class="font-semibold">24 months</span></Item>
				<Item>Free updates: <span class="font-semibold">24 months</span></Item>
			</PriceCard>
			<PriceCard title="Enterprise" price={prices[2][+yearly]} {period} let:Item>
				<svelte:fragment slot="subtitle">
					Best for large scale uses and extended redistribution rights.
				</svelte:fragment>
				<Item>Individual configuration</Item>
				<Item>No setup, or hidden fees</Item>
				<Item>Team size: <span class="font-semibold">100 developers</span></Item>
				<Item>Premium support: <span class="font-semibold">36 months</span></Item>
				<Item>Free updates: <span class="font-semibold">36 months</span></Item>
			</PriceCard>
		</section>
		<section class="flex flex-col pt-10 md:pt-20">
			<div class="overflow-x-auto rounded-lg">
				<div class="inline-block min-w-full align-middle">
					<div class="overflow-hidden shadow sm:rounded-lg">
						<ComparisonTable />
					</div>
				</div>
			</div>
		</section>
		<section class="pt-20">
			<Faq />
		</section>
	</div>
</main>
<Footer />
