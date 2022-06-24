<script lang="ts">
	import classNames from 'classnames';
	export let href: string = '';
</script>

<a {href} {...$$restProps} class={classNames('flex items-center', $$props.class)}>
	<slot />
</a>
