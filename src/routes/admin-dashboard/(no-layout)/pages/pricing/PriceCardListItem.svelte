<script lang="ts">
	import { Li } from 'flowbite-svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<Li icon class="space-x-3">
	<slot name="icon">
		<CheckOutline size="md" class="text-green-500 dark:text-green-400" />
	</slot>
	<span class="dark:text-white"><slot /></span>
</Li>
