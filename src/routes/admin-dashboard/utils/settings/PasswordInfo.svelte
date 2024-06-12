<script>
	import { Button, Input, Label } from 'flowbite-svelte';
	import Card from '../widgets/Card.svelte';
</script>

<Card title="Password Information" class="max-w-none">>
	<div class="grid grid-cols-6 gap-6">
		<Label class="col-span-6 space-y-2 sm:col-span-3">
			<span>Current password</span>
			<Input placeholder="••••••••" class="border font-normal outline-none"></Input>
		</Label>
		<Label class="col-span-6 space-y-2 sm:col-span-3">
			<span>New password</span>
			<Input placeholder="••••••••" class="border font-normal outline-none"></Input>
		</Label>
		<Label class="col-span-6 space-y-2 sm:col-span-3">
			<span>Confirm password</span>
			<Input placeholder="••••••••" class="border font-normal outline-none"></Input>
		</Label>
		<Button class="sm:col-full col-span-6 w-fit">Save all</Button>
	</div>
</Card>
