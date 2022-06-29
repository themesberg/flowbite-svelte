<script lang="ts">
	import classNames from 'classnames';
	export let navClass: string = 'flex';
	export let olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
</script>

<nav aria-label="Breadcrumb" class={classNames(navClass, $$props.classNav)} {...$$restProps}>
	<ol class={classNames(olClass, $$props.classOl)}>
		<slot />
	</ol>
</nav>
