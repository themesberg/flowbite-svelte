<script lang="ts">
	import classNames from 'classnames';
	export let asideClass: string = 'w-64';
</script>

<aside class={classNames(asideClass, $$props.class)} {...$$restProps} aria-label="Sidebar">
	<slot />
</aside>
