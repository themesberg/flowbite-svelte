<script lang="ts">
	export let divClass = 'inline-flex rounded-md shadow-sm';
</script>

<div class="{divClass} {$$props.class}" {...$$restProps} role="group">
	<slot />
</div>
