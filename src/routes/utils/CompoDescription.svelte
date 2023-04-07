<script lang="ts">
	export let pClass: string = 'mb-4 text-lg text-gray-500 dark:text-gray-400';
</script>

<div>
	<p class={pClass}>
		<slot />
	</p>
</div>
