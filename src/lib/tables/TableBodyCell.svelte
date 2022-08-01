<script lang="ts">
	import classNames from 'classnames';

	export let tdClass: string =
		'px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white';
</script>

<td {...$$restProps} class={classNames(tdClass, $$props.class)}>
	<slot />
</td>
