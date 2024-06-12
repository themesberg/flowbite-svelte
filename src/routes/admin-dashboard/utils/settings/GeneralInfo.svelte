<script lang="ts">
	import { Button, Input, Label, type InputType } from 'flowbite-svelte';
	import Card from '../widgets/Card.svelte';

	const inputs: { label: string; type: InputType; placeholder: string }[] = [
		{ label: 'First Name', type: 'text', placeholder: 'Bonnie' },
		{ label: 'Last Name', type: 'text', placeholder: 'Green' },
		{ label: 'Country', type: 'text', placeholder: 'United States' },
		{ label: 'City', type: 'text', placeholder: 'e.g. San Francisco' },
		{ label: 'Address', type: 'text', placeholder: 'e.g. California' },
		{ label: 'Email', type: 'text', placeholder: 'example@company.com' },
		{ label: 'Phone Number', type: 'text', placeholder: 'e.g. +(12)3456 789' },
		{ label: 'Birthday', type: 'text', placeholder: '15/08/1980' },
		{ label: 'Organization', type: 'text', placeholder: 'Company Name' },
		{ label: 'Role', type: 'text', placeholder: 'Svelte Developer' },
		{ label: 'Department', type: 'text', placeholder: 'Development' },
		{ label: 'Zip/postal code', type: 'text', placeholder: '123456' }
	];
</script>

<Card title="General Information" class="-mt-px max-w-none">
	<form class="grid grid-cols-6 gap-6">
		{#each inputs as { label, type, placeholder }}
			<Label class="col-span-6 space-y-2 sm:col-span-3">
				<span>{label}</span>
				<Input {type} {placeholder} class="border font-normal outline-none" />
			</Label>
		{/each}
		<Button class="w-fit whitespace-nowrap">Save all</Button>
	</form>
</Card>
