<script lang="ts">
	export let asideClass: string = 'w-64';
</script>

<aside class="{asideClass} {$$props.class || ''}" {...$$restProps} aria-label="Sidebar">
	<slot />
</aside>
