<script lang="ts">
	import { StarSolid } from 'svelte-heros';
	export let divClass: string = 'flex items-center';
	export let total: number = 5;
	export let rating: number = 4;
	// default is floor
	export let ceil: boolean = false;
	let roundedRating: number = ceil ? Math.ceil(rating) : Math.floor(rating);
	let grayStars: number = total - roundedRating;
</script>

<div class={divClass}>
	{#each Array(roundedRating) as _, star}
		<slot name="ratingUp">
			<StarSolid class="text-yellow-300 dark:text-yellow-200" />
		</slot>
	{/each}
	{#each Array(grayStars) as _, star}
		<slot name="ratingDown">
			<StarSolid class="text-gray-300 dark:text-gray-500" />
		</slot>
	{/each}
	{#if $$slots.text}
		<slot name="text" />
	{/if}
</div>
