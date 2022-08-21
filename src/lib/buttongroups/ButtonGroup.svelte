<script lang="ts">
	import { setContext } from 'svelte';
	import classNames from 'classnames';

	export let divClass: string = 'inline-flex rounded-lg shadow-sm w-fit';

	setContext('group', true);
	setContext('background', true);
</script>

<div {...$$restProps} class={classNames(divClass, $$props.class)} role="group">
	<slot />
</div>
