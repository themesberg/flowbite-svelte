<script lang="ts">
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import CloseButton from '../utils/CloseButton.svelte';
	import Frame from '$lib/utils/Frame.svelte';

	const dispatch = createEventDispatcher();

	export let color:
		| 'gray'
		| 'blue'
		| 'red'
		| 'green'
		| 'yellow'
		| 'indigo'
		| 'purple'
		| 'pink'
		| 'dark'
		| 'custom' = 'blue';
	export let dismissable: boolean = false;
	export let rounded: boolean = true;
	export let accent: boolean = false;

	let hidden = false;

	const handleAlert = () => {
		dispatch('handleAlert');
	};

	const handleHide = () => {
		hidden = !hidden;
	};

	let divClass: string;
	$: divClass = classNames('p-4 text-sm', accent && 'border-t-4 ', hidden && 'hidden', $$props.class);
</script>

<Frame {color} {rounded} {...$$restProps} class={divClass} role="alert">
	<div class="flex items-center whitespace-pre-wrap">
		{#if $$slots.icon}
			<slot name="icon" />
		{/if}

		<slot />

		{#if dismissable}
			<CloseButton
				class="-mx-1.5 -my-1.5"
				{color}
				on:click={handleHide}
				on:click={handleAlert}
				on:click
				on:change
				on:keydown
				on:keyup
				on:focus
				on:blur
				on:mouseenter
				on:mouseleave />
		{/if}
	</div>
	<slot name="extra" />
</Frame>
