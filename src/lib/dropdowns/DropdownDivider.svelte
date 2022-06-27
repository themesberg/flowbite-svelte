<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string = 'my-1 h-px bg-gray-100 dark:bg-gray-600';
</script>

<div class={classNames(divClass, $$props.class)} {...$$restProps} />
