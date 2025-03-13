<script lang="ts">
	import { Popover, Label, Input, Checkbox, Button } from '$lib';
	import { CheckOutline, CloseOutline } from 'flowbite-svelte-icons';
</script>

<form class="mb-8">
	<div class="mb-6">
		<Label for="email" class="mb-2">Your email</Label>
		<Input type="email" id="email" placeholder="name@flowbite.com" required />
	</div>
	<div class="mb-6">
		<Label for="password" class="mb-2">Your password</Label>
		<Input type="password" id="password" required />
	</div>
	<Checkbox class="mb-6">Remember me</Checkbox>
	<Button type="submit">Submit</Button>
</form>
<Popover arrow={false} class="p-4 text-sm" triggeredBy="#password" position="bottom">
	<h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
	<div class="grid grid-cols-4 gap-2">
		<div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
		<div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
		<div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
		<div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
	</div>
	<p class="py-2">It’s better to have:</p>
	<ul>
		<li class="mb-1 flex items-center">
			<CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />
			Upper &amp; lower case letters
		</li>
		<li class="mb-1 flex items-center">
			<CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />
			A symbol (#$&amp;)
		</li>
		<li class="flex items-center">
			<CloseOutline class="me-2 h-4 w-4 text-gray-300 dark:text-gray-400" />A longer password (min.
			12 chars.)
		</li>
	</ul>
</Popover>
