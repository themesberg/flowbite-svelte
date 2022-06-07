<script lang="ts">
	export let aClass: string =
		'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
	export let href: string = '';
	export let label: string = '';
</script>

<li>
	<a {href} class="{aClass} {$$props.class || ''}" {...$$restProps}>{label}</a>
</li>
