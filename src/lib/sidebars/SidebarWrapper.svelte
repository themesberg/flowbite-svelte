<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800';
</script>

<div class={classNames(divClass, $$props.class)} {...$$restProps}>
	<slot />
</div>
