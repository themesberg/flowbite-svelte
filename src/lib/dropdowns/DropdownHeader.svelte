<script lang="ts">
	import DropdownDivider from './DropdownDivider.svelte';
	export let divClass: string = 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200';
</script>

<div class="{divClass} {$$props.class || ''}" {...$$restProps}>
	<slot />
</div>
<DropdownDivider />
