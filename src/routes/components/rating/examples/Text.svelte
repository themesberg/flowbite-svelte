<script lang="ts">
	import { Rating } from '$lib';
</script>

<Rating total={5} rating={3.4}>
	{#snippet text()}
		<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>
	{/snippet}
</Rating>
