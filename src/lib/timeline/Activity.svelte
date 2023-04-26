<script lang="ts">
	export let olClass: string = 'relative border-l border-gray-200 dark:border-gray-700';
</script>

<ol class={olClass}>
	<slot />
</ol>
