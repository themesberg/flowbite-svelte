<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-white dark:bg-blue-500';
	export let markClass: string = `px-2 bg-blue-600 rounded ${textColor}`;
</script>

<mark class={classNames(markClass, $$props.class)}>
	<slot />
</mark>
