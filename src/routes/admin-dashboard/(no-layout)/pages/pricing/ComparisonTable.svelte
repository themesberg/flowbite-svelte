<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { CheckOutline, CloseOutline } from 'flowbite-svelte-icons';
	export let columns: string[] = ['Freelancer', 'Company', 'Enterprise'];
	export let rows: { name: string; [key: string]: string | boolean }[] = [
		{ name: 'Seperate business/personal', freelancer: true, company: true, enterprise: true },
		{ name: 'Estimate tax payments', freelancer: true, company: true, enterprise: true },
		{ name: 'Stock control', freelancer: true, company: true, enterprise: true },
		{ name: 'Create invoices & estimates', freelancer: false, company: true, enterprise: true },
		{ name: 'Manage bills & payments', freelancer: false, company: true, enterprise: true },
		{ name: 'Run payroll', freelancer: false, company: true, enterprise: true },
		{ name: 'Handle multiple currencies', freelancer: false, company: false, enterprise: true },
		{
			name: 'Number of Users',
			freelancer: '1 User',
			company: '5-10 Users',
			enterprise: '20+ Users'
		},
		{ name: 'Track deductible mileage', freelancer: false, company: false, enterprise: true },
		{ name: 'Track employee time', freelancer: false, company: false, enterprise: true },
		{ name: 'Multi-device', freelancer: false, company: false, enterprise: true }
	];
</script>

<Table striped bordered={false}>
	<TableHead class="normal-case">
		<TableHeadCell></TableHeadCell>
		{#each columns as column}
			<TableHeadCell
				class="p-4 text-right text-base font-semibold tracking-wider text-gray-900 dark:text-white"
				>{column}</TableHeadCell
			>
		{/each}
	</TableHead>
	<TableBody>
		{#each rows as row}
			<TableBodyRow class="border-none">
				<TableBodyCell
					class="whitespace-nowrap rounded-l-lg p-4 text-base font-normal text-gray-500 dark:text-gray-400"
				>
					{row.name}
				</TableBodyCell>
				{#each columns as column}
					{@const value = row[column.toLowerCase()]}
					{#if typeof value === 'boolean'}
						<TableBodyCell>
							{#if value}
								<CheckOutline class="ml-auto text-green-400" />
							{:else}
								<CloseOutline class="ml-auto text-red-500" />
							{/if}
						</TableBodyCell>
					{:else}
						<TableBodyCell
							class="flex-shrink-0 text-right text-xs font-medium text-gray-900 dark:text-white sm:text-sm md:text-base"
						>
							{value}
						</TableBodyCell>
					{/if}
				{/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
