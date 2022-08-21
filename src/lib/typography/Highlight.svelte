<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-blue-600 dark:text-blue-500';
</script>

<span class={classNames(textColor, $$props.class)}>
	<slot />
</span>
