<script lang="ts">
	import classNames from 'classnames';
	export let spanClass: string = 'text-blue-600 dark:text-blue-500';
</script>

<span class={classNames(spanClass, $$props.class)}>
	<slot />
</span>
