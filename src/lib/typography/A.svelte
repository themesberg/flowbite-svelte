<script lang="ts">
	import classNames from 'classnames';
	export let href: string = '#';
	export let textColor: string = 'text-blue-600 dark:text-blue-500';
	export let aClass: string = `inline-flex items-center text-lg  hover:underline ${textColor}`;
</script>

<a {href} class={classNames(aClass, $$props.class)}>
	<slot />
</a>
