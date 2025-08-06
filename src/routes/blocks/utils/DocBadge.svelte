<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
	}
	let { children, class: className }: Props = $props();
</script>

<Badge class="bg-primary-100 text-primary-700 dark:text-primary-700 border-primary-700 dark:border-primary-700 dark:bg-gray-700 {className}">
	{@render children()}
</Badge>
