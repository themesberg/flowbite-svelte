<script lang="ts">
	import classNames from 'classnames';
	export let href: string = '#';
	export let aClass: string =
		'inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline';
</script>

<a {href} class={classNames(aClass, $$props.class)}>
	<slot />
</a>
