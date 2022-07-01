<script lang="ts">
	import classNames from 'classnames';
	import type { SvelteComponent } from 'svelte';
	export let href: string = '';
	export let ariaLabel: string = '';
	export let aClass: string = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
	export let icon: typeof SvelteComponent | null = null;
	export let iconClass: string = 'h-5 w-5';
	export let size: string = '20';
</script>

{#if href}
	<a {href} aria-label={ariaLabel} class={classNames(aClass, $$props.class)}>
		<svelte:component this={icon} {size} class={iconClass} />
	</a>
{:else}
	<svelte:component this={icon} {size} class={iconClass} />
{/if}
