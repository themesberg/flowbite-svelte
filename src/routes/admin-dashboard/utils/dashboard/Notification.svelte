<script lang="ts">
	import IconAvatar from '../widgets/IconAvatar.svelte';

	export let src: string = '';
	export let icon: ConstructorOfATypedSvelteComponent | null = null;
	export let when: string = '';
	export let href: string = '';
	export let color: IconAvatar['color'] = 'dark';
</script>

<a
	{href}
	class="flex gap-2 border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
>
	<IconAvatar {src} {color}>
		{#if icon}
			<svelte:component this={icon} size="xs" class="text-gray-50 dark:text-white" />
		{/if}
	</IconAvatar>
	<div class="w-full pl-3">
		<div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
			<slot />
		</div>
		{#if when}
			<div class="text-xs font-medium text-primary-700 dark:text-primary-400">{when}</div>
		{/if}
	</div>
</a>
