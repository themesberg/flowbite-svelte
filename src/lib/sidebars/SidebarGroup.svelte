<script lang="ts">
	import classNames from 'classnames';

	export let ulClass: string = 'space-y-2';
	export let borderClass: string = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
	export let border: boolean = false;

	if (border) {
		ulClass += ' ' + borderClass;
	}
</script>

<ul {...$$restProps} class={classNames(ulClass, $$props.class)}>
	<slot />
</ul>
