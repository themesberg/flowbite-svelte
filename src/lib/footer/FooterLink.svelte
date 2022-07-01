<script lang="ts">
	import classNames from 'classnames';
	export let liClass: string = 'mr-4 last:mr-0 md:mr-6';
	export let aClass: string = 'hover:underline';
	export let href: string = '';
</script>

<li class={classNames(liClass, $$props.class)}>
	<a {href} class={aClass}>
		<slot />
	</a>
</li>
