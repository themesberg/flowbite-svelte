<script lang="ts">
	import classNames from 'classnames';
	export let value: string = '';
	export let size: 'xs' | 'sm' | 'lg' = 'sm';
	export let inputClass: string =
		'block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';
</script>

<input
	{...$$restProps}
	on:change
	on:keyup
	on:keydown
	on:keypress
	on:focus
	on:blur
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	bind:value
	class={classNames(inputClass, {
		'mb-5 text-xs': size === 'xs',
		'mb-5 text-sm': size === 'sm',
		'text-lg': size === 'lg'
	})}
	type="file"
/>
