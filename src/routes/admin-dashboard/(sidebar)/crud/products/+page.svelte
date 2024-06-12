<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Drawer, Heading, Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalOutline, EditOutline, ExclamationCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import type { ComponentType } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import Products from '../../../data/product.json';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import Delete from './Delete.svelte';
	import Product from './Product.svelte';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Product; // drawer component

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};

	const path: string = '/crud/products';
  	const description: string = 'CRUD products examaple - Flowbite Svelte Admin Dashboard';
	const title: string = 'Flowbite Svelte Admin Dashboard - CRUD Products';
	const subtitle: string = 'CRUD Products';
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<MetaTag {path} {description} {title} {subtitle} />


<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/products">E-commerce</BreadcrumbItem>
			<BreadcrumbItem>Products</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All products
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<Input placeholder="Search for products" class="me-6 w-80 border xl:w-96" />
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<CogSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<TrashBinSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<ExclamationCircleSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<DotsVerticalOutline size="lg" />
			</ToolbarButton>

			<div slot="end" class="space-x-2">
				<Button class="whitespace-nowrap" on:click={() => toggle(Product)}>Add new product</Button>
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
			{#each ['Product Name', 'Technology', 'Description', 'ID', 'Price', 'Discount', 'Actions'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each Products as product}
				<TableBodyRow class="text-base">
					<TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell>
					<TableBodyCell class="flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{product.name}
							</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
								{product.category}
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{product.technology}</TableBodyCell>
					<TableBodyCell
						class="max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
						>{product.description}</TableBodyCell
					>
					<TableBodyCell class="p-4">#{product.id}</TableBodyCell>
					<TableBodyCell class="p-4">{product.price}</TableBodyCell>
					<TableBodyCell class="p-4">{product.discount}</TableBodyCell>
					<TableBodyCell class="space-x-2">
						<Button size="sm" class="gap-2 px-3" on:click={() => toggle(Product)}>
							<EditOutline size="sm" /> Update
						</Button>
						<Button color="red" size="sm" class="gap-2 px-3" on:click={() => toggle(Delete)}>
							<TrashBinSolid size="sm" /> Delete item
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>


<Drawer placement="right" transitionType="fly" {transitionParams} bind:hidden>
	<svelte:component this={drawerComponent} bind:hidden />
</Drawer>
