<script lang="ts">
	import Wrapper from '$lib/utils/Wrapper.svelte';

	import classNames from 'classnames';
	import Label from './Label.svelte';

	export let value: string = '';
	export let rows: number = 4;
	export let helper: string = '';
	export let helperClass: string = 'mt-2 text-sm text-gray-500 dark:text-gray-400';

	const labelClass = (extraClass) => classNames('flex flex-col gap-2', extraClass);
	let textareaClass;
	$: textareaClass = classNames(
		'block w-full',
		'text-sm',
		$$slots.header || $$slots.footer ? 'border-0 px-0' : 'p-2.5 border border-transparent',
		$$slots.header || 'rounded-t-lg',
		$$slots.footer || 'rounded-b-lg',
		// 'border-gray-200 dark:border-gray-600',
		$$slots.header || $$slots.footer || 'bg-inherit dark:bg-inherit',
		'text-gray-900 dark:placeholder-gray-400 dark:text-white ',
		$$slots.header || $$slots.footer
			? 'focus:outline-none focus:ring-0'
			: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
	);
	let wrapperClass;
	$: wrapperClass = classNames(
		'w-full rounded-lg border',
		'bg-gray-50 dark:bg-gray-700',
		'border-gray-200 dark:border-gray-600',
		$$props.class
	);
</script>

<Label class={labelClass($$props.class)} show={!!$$slots.default}>
	<slot />
	<div class={wrapperClass}>
		{#if $$slots.header}<div class="border-b"><slot name="header" /></div>{/if}
		<Wrapper
			show={$$slots.header || $$slots.footer}
			class="py-2 px-4 rounded-lg bg-white dark:bg-gray-900"
		>
			<textarea
				bind:value
				on:blur
				on:change
				on:click
				on:focus
				on:keydown
				on:keypress
				on:keyup
				on:mouseenter
				on:mouseleave
				on:mouseover
				on:paste
				{rows}
				{...$$restProps}
				class={textareaClass}
			/>
		</Wrapper>
		{#if $$slots.footer}<div class="border-t"><slot name="footer" /></div>{/if}
	</div>
</Label>
{#if helper}
	<p class={helperClass}>{@html helper}</p>
{/if}
