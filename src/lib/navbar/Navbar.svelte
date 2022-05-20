<script lang="ts">
	export let navClass: string =
		'bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800';
	const navDivClass: string = 'container flex flex-wrap justify-between items-center mx-auto';
</script>

<nav class={navClass}>
	<div class={navDivClass}>
		<slot />
	</div>
</nav>
