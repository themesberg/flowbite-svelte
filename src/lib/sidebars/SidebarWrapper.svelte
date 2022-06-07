<script lang="ts">
	export let divClass: string = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800';
</script>

<div class="{divClass} {$$props.class || ''}" {...$$restProps}>
	<slot />
</div>
