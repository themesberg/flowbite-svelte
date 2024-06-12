<script lang="ts">
	import { Button, Input, Label, Modal, Textarea } from 'flowbite-svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	function init(form: HTMLFormElement) {
		if (data?.name) [data.first_name, data.last_name] = data.name.split(' ');
		for (const key in data) {
			console.log(key, data[key]);
			const el = form.elements.namedItem(key);
			if (el) el.value = data[key];
		}
	}
	1;
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Edit user' : 'Add new user'}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form action="#" use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>First Name</span>
					<Input name="first_name" class="border outline-none" placeholder="e.g. Bonnie" required />
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Last Name</span>
					<Input name="last_name" class="border outline-none" placeholder="e.g. Green" required />
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Email</span>
					<Input
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Position</span>
					<Input
						name="position"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Current Password</span>
					<Input
						name="current-password"
						type="password"
						class="border outline-none"
						placeholder="••••••••"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>New Password</span>
					<Input
						name="news-password"
						type="password"
						class="border outline-none"
						placeholder="••••••••"
						required
					/>
				</Label>

				<Label class="col-span-6 space-y-2">
					<span>Biography</span>
					<Textarea
						id="biography"
						rows="4"
						class="bg-gray-50 outline-none dark:bg-gray-700"
						placeholder="👨‍💻Full-stack web developer. Open-source contributor."
					>
						👨‍💻Full-stack web developer. Open-source contributor.
					</Textarea>
				</Label>
			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button type="submit">{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
