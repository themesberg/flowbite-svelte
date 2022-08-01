<script lang="ts">
	import classNames from 'classnames';

	export let aClass: string =
		'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
	export let href: string = '';
	export let label: string = '';
</script>

<li>
	<a {...$$restProps} {href} class={classNames(aClass, $$props.class)}>{label}</a>
</li>
