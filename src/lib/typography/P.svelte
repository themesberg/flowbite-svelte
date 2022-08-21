<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-gray-500 dark:text-gray-400';
	export let size: string = 'text-lg';
	export let pClass: string = 'font-normal';
</script>

<p class={classNames(pClass, size, textColor, $$props.class)}>
	<slot />
</p>
