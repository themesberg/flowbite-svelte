<script lang="ts">
	import classNames from 'classnames';
	import type { IconType } from '../types';
	export let aClass: string =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
	export let href: string = '';
	export let rel: string = '';
	export let label: string = '';
	export let spanClass: string = 'ml-3';
	export let icon: IconType;
</script>

<li>
	<a {href} {rel} class={classNames(aClass, $$props.class)} {...$$restProps}>
		<svelte:component
			this={icon.name}
			size={icon.size}
			color={icon.color}
			class="mr-2 {icon.class}"
		/>
		<span class={spanClass}>{label}</span>
		{#if $$slots.subtext}
			<slot name="subtext" />
		{/if}
	</a>
</li>
