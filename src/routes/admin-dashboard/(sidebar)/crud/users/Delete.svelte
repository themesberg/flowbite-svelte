<script lang="ts">
	import { Button, CloseButton, Heading, Modal } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	export let open: boolean = false; // modal control
</script>

<Modal bind:open size="sm">
	<ExclamationCircleOutline class="mx-auto mb-4 mt-8 h-10 w-10 text-red-600" />

	<h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400">
		Are you sure you want to delete this product?
	</h3>

	<div class="flex items-center justify-center">
		<Button href="/" color="red" class="mr-2">Yes, I'm sure</Button>
		<Button color="alternative" on:click={() => (open = false)}>No, cancel</Button>
	</div>
</Modal>
