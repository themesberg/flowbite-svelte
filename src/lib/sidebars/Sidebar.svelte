<script lang="ts">
	import classNames from 'classnames';
	export let asideClass: string = 'w-64';
</script>

<aside {...$$restProps} class={classNames(asideClass, $$props.class)} aria-label="Sidebar">
	<slot />
</aside>
