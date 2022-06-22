<script lang="ts">
	import classNames from 'classnames';
	export let helperClass: string = 'text-xs font-normal text-gray-500 dark:text-gray-300';
</script>

<p class={classNames(helperClass, $$props.class)} {...$$restProps}>
	<slot />
</p>
