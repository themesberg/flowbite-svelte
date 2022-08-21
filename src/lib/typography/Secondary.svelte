<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-gray-500 dark:text-gray-400';
	export let secondaryClass: string = 'font-semibold';
</script>

<small class={classNames(textColor, secondaryClass, $$props.class)}>
	<slot />
</small>
