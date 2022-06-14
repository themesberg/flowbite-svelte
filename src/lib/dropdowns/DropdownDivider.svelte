<script lang="ts">
	export let divClass: string = 'my-1 h-px bg-gray-100 dark:bg-gray-600';
</script>

<div class="{divClass} {$$props.class || ''}" {...$$restProps} />
