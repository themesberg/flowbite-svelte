<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	import type { BadgeProps } from 'flowbite-svelte/Badge.svelte';

	export let state: keyof typeof states;
	export let dark: boolean = false;

	const states = {
		completed: 'Completed',
		cancelled: 'Canceled',
		inreview: 'In review',
		inprogress: 'In progress'
	};

	const colors: Record<string, BadgeProps['color']> = {
		completed: 'green',
		cancelled: 'red',
		inreview: 'yellow',
		inprogress: 'purple'
	};
</script>

<Badge color={colors[state] ?? 'dark'} border={dark}>{states[state] ?? 'Unknown'}</Badge>
