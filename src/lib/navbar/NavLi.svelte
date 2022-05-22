<script lang="ts">
	export let href: string = '';
	export let active: boolean = false;

	export let activeClass =
		'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white';
	export let nonActiveClass =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
	let aClass: string = active ? activeClass : nonActiveClass;
</script>

<li>
	<a {href} class="{aClass} {$$props.class || ''}">
		<slot />
	</a>
</li>
