<script lang="ts">
	import classNames from 'classnames';
	export let liClass: string =
		'block font-medium cursor-pointer py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
	export let color: string = 'default';

	const colors = {
		default: 'text-gray-700 dark:text-gray-200 dark:hover:text-white',
		red: 'text-red-600 dark:text-red-500'
	};
</script>

<li
	{...$$restProps}
	class={classNames(liClass, colors[color] ?? colors.default, $$props.class)}
	on:click|stopPropagation
	on:change
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:mouseenter
	on:mouseleave
	on:mouseenter
>
	<slot />
</li>
