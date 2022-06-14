<script lang="ts">
	export let liClass: string =
		'block cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white';
</script>

<li class="{liClass} {$$props.class || ''}" {...$$restProps} on:click>
	<slot />
</li>
