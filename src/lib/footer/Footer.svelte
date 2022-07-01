<script lang="ts">
	import classNames from 'classnames';
	export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';
</script>

<footer
	class={classNames(
		{
			'bg-gray-800': footerType === 'sitemap',
			'p-4 bg-white sm:p-6 dark:bg-gray-800': footerType === 'socialmedia',
			'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800': footerType === 'logo',
			'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800':
				footerType === 'default'
		},
		$$props.class
	)}
>
	<slot />
</footer>
