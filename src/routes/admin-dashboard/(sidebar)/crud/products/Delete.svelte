<script lang="ts">
	import { Button, CloseButton, Heading } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Delete item</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<ExclamationCircleOutline class="mb-4 mt-8 h-10 w-10 text-red-600" />

<h3 class="mb-6 text-lg text-gray-500 dark:text-gray-400">
	Are you sure you want to delete this product?
</h3>

<Button href="/" color="red" class="mr-2">Yes, I'm sure</Button>
<Button color="alternative" on:click={() => (hidden = true)}>No, cancel</Button>
