<script lang="ts">
	import ToolbarButton from '../toolbar/ToolbarButton.svelte';
	import classNames from 'classnames';
	import Menu from './Menu.svelte';

	export let btnClass: string = 'ml-3 md:hidden';
</script>

<ToolbarButton name="Open main menu" on:click {...$$restProps} class={classNames(btnClass, $$props.class)}>
	<Menu class="h-6 w-6 shrink-0" />
</ToolbarButton>
