<script lang="ts">
	export let href: string = '';
</script>

<a {href} class="flex items-center {$$props.class || ''}">
	<slot />
</a>
