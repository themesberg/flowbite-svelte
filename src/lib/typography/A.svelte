<script lang="ts">
	import classNames from 'classnames';
	export let href: string = '#';
	export let textColor: string = 'text-blue-600 dark:text-blue-500';
	export let aClass: string = 'inline-flex items-center text-lg  hover:underline';
</script>

<a {href} class={classNames(aClass, textColor, $$props.class)}>
	<slot />
</a>
