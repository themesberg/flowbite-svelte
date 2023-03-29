<script lang="ts">
	export let divClass: string = 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700';
	export let timeClass: string = 'text-lg font-semibold text-gray-900 dark:text-white';
	export let date: Date | string;
</script>

<div class={divClass}>
	<time class={timeClass}>{date}</time>
	<ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
		<slot />
	</ol>
</div>
