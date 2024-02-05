<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Android from './Android.svelte';
	import DefaultMockup from './DefaultMockup.svelte';
	import Desktop from './Desktop.svelte';
	import Ios from './Ios.svelte';
	import Laptop from './Laptop.svelte';
	import Smartwatch from './Smartwatch.svelte';
	import Tablet from './Tablet.svelte';
	interface Props {
		children?: any;
		device?: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch';
	}

	let { children, device = 'default' } = $props<Props>();

	const componets = {
		android: Android,
		ios: Ios,
		tablet: Tablet,
		default: DefaultMockup,
		smartwatch: Smartwatch,
		laptop: Laptop,
		desktop: Desktop
	};

	let component: ComponentType = componets[device];
</script>

{#if component}
	<svelte:component this={component}>{@render children()}</svelte:component>
{:else}
	<div class="border p-3 text-xl">Unknow device</div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop device = 'default'
-->
