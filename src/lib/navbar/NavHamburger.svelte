<script lang="ts">
	import classNames from 'classnames';
	import Menu from './Menu.svelte';
	export let btnClass: string =
		'ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden';
</script>

<button
	{...$$restProps}
	class={classNames(btnClass, $$props.class)}
	data-testid="navbar-toggle"
	on:click>
	<span class="sr-only">Open main menu</span>
	<Menu class="h-6 w-6 shrink-0" />
</button>
