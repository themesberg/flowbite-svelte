<script lang="ts">
	import classNames from 'classnames';
	export let kbdClass: string =
		'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
</script>

<kbd class={classNames(kbdClass, $$props.class)}>
	<slot />
</kbd>
