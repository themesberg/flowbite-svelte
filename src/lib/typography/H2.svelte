<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-gray-900';
	export let h2Class: string = `text-4xl font-extrabold dark:text-white ${textColor}`;
</script>

<h2 class={classNames(h2Class, $$props.class)}>
	<slot />
</h2>
