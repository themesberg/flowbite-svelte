<script>
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
	import EmptyCard from './EmptyCard.svelte';
</script>

<main>
	<div class="grid grid-cols-1 pt-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4 xl:px-0">
		<div class="col-span-full mb-4 xl:mb-2">
			<Breadcrumb class="mb-5">
				<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
				<BreadcrumbItem href="/">Pages</BreadcrumbItem>
				<BreadcrumbItem>Playground</BreadcrumbItem>
			</Breadcrumb>
			<Heading tag="h1" class="text-xl font-semibold sm:text-2xl">
				Create something awesome here
			</Heading>
		</div>
		<div class="col-span-full xl:col-auto">
			<EmptyCard size="xl" class="mb-4 h-80 w-full space-y-6 2xl:col-span-2"></EmptyCard>
			<EmptyCard size="xl" class="mb-4 h-80 w-full space-y-6 2xl:col-span-2"></EmptyCard>
		</div>
		<div class="col-span-2">
			<EmptyCard size="none" class="mb-4 h-80 w-full space-y-6"></EmptyCard>
			<EmptyCard size="none" class="mb-4 h-80 w-full space-y-6"></EmptyCard>
		</div>
	</div>
	<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
		{#each Array(4) as _, i}
			<EmptyCard size="xl" class="h-60 w-full space-y-6 sm:p-6"></EmptyCard>
		{/each}
	</div>
</main>
